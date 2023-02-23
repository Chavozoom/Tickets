import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

//FRONTEND
// 1 - Listar principais shows
// 2 - Criar um carrosel mostrando os shows
// 3 - Login e cadastro em navbar
// 4 - Buscar eventos em navBar

//BACKEND
// 1 - Criar sitema CRUD para cadastro e para atribuir ingressos

// Possibilitar criar shows?

export default App;
