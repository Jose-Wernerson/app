from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List
import uuid
from datetime import datetime

# Carregar variáveis do .env
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.getenv('MONGO_URL')
db_name = os.getenv('DB_NAME')

if not mongo_url or not db_name:
    raise ValueError("MONGO_URL ou DB_NAME não estão definidos corretamente no .env")

client = AsyncIOMotorClient(mongo_url)
db = client[db_name]

# Configurar CORS
origins = [origin.strip() for origin in os.getenv('CORS_ORIGINS', '*').split(',')]

# Criar app FastAPI
app = FastAPI()

# Criar router com prefixo /api
api_router = APIRouter(prefix="/api")

# Modelos
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# Rotas
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.dict())
    await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Incluir router na app principal
app.include_router(api_router)

# Middleware CORS
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Fechar conexão com MongoDB ao desligar
@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()