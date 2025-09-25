import { useState } from "react"
import { Link } from "react-router-dom"


function CrearNivel(){
    
    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [dificultad, setDificultad] = useState("")    

    async function guardar(e) {
    e.preventDefault()
    await fetch("https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/nivel", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apiKey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
        },
        body: JSON.stringify({
            nombre: nombre,
            descripcion: descripcion,
            dificultad: dificultad
        })
    })
    alert("Nivel Creado")       
    }

    return(
        <div>
            <h1>Crear Nivel</h1>
            <form onSubmit={guardar}>
                <input type="text" placeholder="Nombre" onChange={(e)=>setNombre(e.target.value)}></input>
                <input type="text" placeholder="Descripcion" onChange={(e)=>setDescripcion(e.target.value)}></input>
                <input type="text" placeholder="Dificultad" onChange={(e)=>setDificultad(e.target.value)}></input>
                <button>Crear</button>
            </form>
            <Link to="/">Volver</Link>
        </div>
    )
}

export default CrearNivel