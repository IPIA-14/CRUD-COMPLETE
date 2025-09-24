import { Link } from "react-router-dom";

function NavBar() {
  return (
    
    <nav>
    <h1>Bienvenido al home </h1>
        <ul>
            <li><Link to="/crearEnemigo">Crear</Link></li>
            <li><Link to="/enemigo">Enemigo</Link></li>
            <li><Link to="/nivel">Nivel</Link></li>
            <li><Link to="/crearNivel">Crear Nivel</Link></li>
            <li><Link to="/nivelEnemigo">NivelEnemigo</Link></li>
            <li><Link to="/crearNivelEnemigo">Crear NivelEnemigo</Link></li>
        </ul>
    </nav>
  )
}
export default NavBar