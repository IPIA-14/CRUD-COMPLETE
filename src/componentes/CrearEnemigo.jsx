import { useState } from "react"
import { Link } from "react-router-dom"


function CrearEnemigo(){
    
    const [nombre, setNombre] = useState("")
    const [tipo, setTipo] = useState("")
    const [vida, setVida] = useState("")
    const [ataque, setAtaque] = useState("")

    async function guardar(e) {
    e.preventDefault()
    await fetch("https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/enemigo", {
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
            tipo: tipo,
            vida: vida,
            ataque: ataque
        })
    })
    alert("Enemigo Creado")
}


    return(
        <div>
            <h1>Crear Enemigo</h1>
            <form onSubmit={guardar}>
                <input type="text" placeholder="Nombre" onChange={(e)=>setNombre(e.target.value)}></input>
                <input type="text" placeholder="Tipo" onChange={(e)=>setTipo(e.target.value)}></input>
                <input type="number" placeholder="Vida" onChange={(e)=>setVida(e.target.value)}></input>
                <input type="number" placeholder="Ataque" onChange={(e)=>setAtaque(e.target.value)}></input>
                <button>Crear</button>
            </form>
            <Link to="/">Volver</Link>
        </div>
    )
}
export default CrearEnemigo