import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Enemigo() {
  const [enemigo, setEnemigo] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/enemigo", {
      headers: {
        apiKey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
      },
    })
      .then((res) => res.json())
      .then((data) => setEnemigo(data));
  }, []);

  async function eliminarEnemigo(id) {
    await fetch(
      `https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/enemigo?id_enemigo=eq.${id}`,
      {
        method: "DELETE", 
        headers: {
          apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
        },
      }
    ) 
      .then(() => {
        setEnemigo(enemigo.filter((emp) => emp.id_enemigo !== id));
      }); 
  }

  function editarVida(id) {
    console.log(id);
    navigate(`/enemigo/actualizar/${id}`);
  }

  return (
    <div className="enemigo">
      <h1>Lista enemigos</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Vida</th>
            <th>Ataque</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {enemigo.map((enemigo) => (
            <tr key={enemigo.id_enemigo}>
              <td>{enemigo.id_enemigo}</td>
              <td>{enemigo.nombre}</td>
              <td>{enemigo.tipo}</td>
              <td>{enemigo.vida}</td>
              <td>{enemigo.ataque}</td>
              <td>
                <button onClick={() => editarVida(enemigo.id_enemigo)} className="btn-editar">
                  Editar
                </button>
                <button
                  onClick={() => eliminarEnemigo(enemigo.id_enemigo)}
                  className="btn-eliminar">
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/">Volver</Link>
    </div>
  );
}

export default Enemigo;
