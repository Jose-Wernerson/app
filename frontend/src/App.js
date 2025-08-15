import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Produtos from "./pages/Produtos";
import Servicos from "./pages/Servicos";
import Contato from "./pages/Contato";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;
