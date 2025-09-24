
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


function Nivel() {
    const [nivel, setNivel] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
    fetch("https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/nivel", {
      headers: {
        apiKey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
      },
    })
      .then((res) => res.json())
      .then((data) => setNivel(data));
  }, []);

  async function eliminarNivel(id) {
    await fetch(
      `https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/nivel?id_nivel=eq.${id}`,
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
        setNivel(nivel.filter((emp) => emp.id_nivel !== id));
      }); 
  }

  function editarVida(id) {
    console.log(id);
    navigate(`/nivel/actualizar/${id}`);
  }



    return(
        <div>
      <h1>Enemigo</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Dificultad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {nivel.map((niv) => (
            <tr key={niv.id_vida}>
              <td>{niv.id_vida}</td>
              <td>{niv.nombre}</td>
              <td>{niv.descripcion}</td>
              <td>{niv.dificultad}</td>
              <td>
                <button onClick={() => editarVida(niv.id_nivel)} className="btn-editar">
                  Editar
                </button>
                <button
                  onClick={() => eliminarNivel(niv.id_nivel)}
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
    )
}
export default Nivel