import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Enemigo from "./componentes/enemigo";
import CrearEnemigo from "./componentes/CrearEnemigo";
import Home from "./Home";
import ActualizarVida from "./componentes/ActualizarVida";
import Nivel from "./componentes/Nivel";
import CrearNivel from "./componentes/CrearNivel";
import ActualizarNivel from "./componentes/ActualizarNivel";
import NivelEnemigo from "./componentes/NivelEnemigo"
import CrearNivelEnemigo from "./componentes/CrearNivelEnemigo"
import ActualizarNivelEnemigo from "./componentes/ActualizarNivelEnemigo"
import './App.css'


function App() {
  return (
    <div className="App"> 
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enemigo" element={<Enemigo />} />
          <Route path="/crearEnemigo" element={<CrearEnemigo />} />
          <Route path="/enemigo/actualizar/:id" element={<ActualizarVida />} />
          <Route path="/nivel" element={<Nivel />} />
          <Route path="/crearNivel" element={<CrearNivel />} />
          <Route path="/nivel/actualizar/:id" element={<ActualizarNivel />} />
          <Route path="/nivelEnemigo" element={<NivelEnemigo />} />
          <Route path="/crearNivelEnemigo" element={<CrearNivelEnemigo />} />
          <Route path="/actuaizarNivelEnemigo/:id" element={<ActualizarNivelEnemigo />} />
          


        </Routes>
      </Router>
    </div>
  );
} 

export default App;