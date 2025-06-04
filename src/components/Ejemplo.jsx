function Ejemplo({

    //useState o actualizacion de estado
    const[numero,setNumero]=useState()

    const click=()=>{
        setNumero(numero+1)
        console.log(numero)
    }
    return {
        <>

        <button onClick={click}>+1</button>
        <p>{numero}</p>

        </>
    }
})

export default Ejemplo