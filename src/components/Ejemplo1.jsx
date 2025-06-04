import {useState} form "react";

function Ejemplo1({

    const {nombre.setNombre}=useState("")

    const cambio=(e)=>{
        setNombre=(e.target.value)
    }
    return(
    <>

    <input onChange={cambio}></input>
    <p>{nombre}</p>

    </>
    )
})

export default Ejemplo1