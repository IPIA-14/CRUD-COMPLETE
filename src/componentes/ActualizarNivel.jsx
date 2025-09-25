import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"

function ActualizarNivel(){
    const {id} = useParams()
    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [dificultad, setDificultad] = useState("")
    const [datos, setDatos] = useState([])

    useEffect(() => {
        llamarDatos()
    },[])

    async function llamarDatos(){
        await fetch("https://skojryaxbquqtwvuyhfv.supabase.co/rest/v1/nivel", {
            method: "GET",
            headers: {
                "content-type": "application/json",
                apiKey:
                    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
                Authorization:    
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrb2pyeWF4YnF1cXR3dnV5aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc1MTQ0MTUsImV4cCI6MjA3MzA5MDQxNX0.nZMSWKNIve_UmSe1KEehy9ocL2FIR25QflnccDRQ998",
            }
        })
        .then(res => res.json())
        .then((data)=>{
            setDatos(data);
            console.log(data)
            setNombre(data[0].nombre)
            setDescripcion(data[0].descripcion)
            setDificultad(data[0].dificultad)
        })
    }

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
                <input type="text" placeholder="Nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)}></input>
                <input type="text" placeholder="Descripcion" value={descripcion} onChange={(e)=>setDescripcion(e.target.value)}></input>
                <input type="text" placeholder="Dificultad" value={dificultad} onChange={(e)=>setDificultad(e.target.value)}></input>
                <button type="submit">Actualizar</button>
            </form>
        </div>
    )           
}
export default ActualizarNivel