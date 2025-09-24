import { useState } from "react";
import { useParams } from "react-router-dom";

function ActualizarVida() {
  const { id } = useParams();
  const [vida, setVida] = useState("");
  async function actualizar(e) {
    e.preventDefault();
    await fetch(
      `https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/enemigo?id_enemigo=eq.${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          apiKey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
        }, //cerp donde se envia la informacion
        body: JSON.stringify({ vida: vida }),
      }
    ).then((res) => res.json());
  }

  return (
    <div>
      <h2>Actualizar Empleado</h2>
      <form onSubmit={actualizar}>
        <input
          placeholder="Actualizar vida"
          type="number"
          onChange={(e) => setVida(e.target.value)}></input>
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
}
export default ActualizarVida;
