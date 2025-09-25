import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function ActualizarNivelEnemigo() {
  const [idNivel, setIdNivel] = useState("");
  const [idEnemigo, setIdEnemigo] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [datos, setDatos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    llamarDatos();
  }, []);

  async function llamarDatos() {
    await fetch(`https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/nivel_enemigo?id=eq.${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        apiKey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setDatos(data);
          setIdNivel(data[0].id_nivel);
          setIdEnemigo(data[0].id_enemigo);
          setCantidad(data[0].cantidad);
        }
      });
  }

  async function actualizar(e) {
    e.preventDefault();
    await fetch(`https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/nivel_enemigo?id=eq.${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        apiKey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
      },
      body: JSON.stringify({
        id_nivel: idNivel,
        id_enemigo: idEnemigo,
        cantidad: cantidad,
      }),
    }).then((res) => res.json());
  }

  return (
    <div className="actualizarNivelEnemigo">
      <h1>Actualizar Nivel Enemigo</h1>
      <form onSubmit={actualizar}>
        <label htmlFor="id_nivel">Id Nivel</label>
        <input
          type="text"
          id="id_nivel"
          value={idNivel}
          onChange={(e) => setIdNivel(e.target.value)}
        />

        <label htmlFor="id_enemigo">Id Enemigo</label>
        <input
          type="text"
          id="id_enemigo"
          value={idEnemigo}
          onChange={(e) => setIdEnemigo(e.target.value)}
        />

        <label htmlFor="cantidad">Cantidad</label>
        <input
          type="text"
          id="cantidad"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
        />

        <button type="submit">Actualizar</button>
      </form>
      <Link to="/">Volver</Link>
    </div>
  );
}

export default ActualizarNivelEnemigo;
