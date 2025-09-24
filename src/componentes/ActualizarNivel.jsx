import { useState } from "react";
import { useParams } from "react-router-dom"

function ActualizarNivel(){
    const {id} = useParams()
    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [dificultad, setDificultad] = useState("")

    async function actualizar(e){
        e.preventDefault()
        await fetch(`https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/nivel?id_nivel=eq.${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                apiKey:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
                Authorization:    
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
            }, //cerp donde se envia la informacion
            body: JSON.stringify({nombre: nombre, descripcion: descripcion, dificultad: dificultad})
        })
    }

    return(
        <div>
            <h2>Actualizar Nivel</h2>
            <form onSubmit={actualizar}>
                <input type="text" placeholder="Nombre" onChange={(e)=>setNombre(e.target.value)}></input>
                <input type="text" placeholder="Descripcion" onChange={(e)=>setDescripcion(e.target.value)}></input>
                <input type="text" placeholder="Dificultad" onChange={(e)=>setDificultad(e.target.value)}></input>
                <button type="submit">Actualizar</button>
            </form>
        </div>
    )           
}
export default ActualizarNivel