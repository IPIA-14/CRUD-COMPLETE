import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
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