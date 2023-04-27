import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) =>{
    /*Estado - hooks
    useState
    useState()
    const [nombreVariable, funcionActualiza] = useState(valorInicial)*/

    /*const [mostrar, actualizarMostrar] = useState(true)
    const manejarClick = () => {
        console.log("Mostrar el ocultar")

    }*/
    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg