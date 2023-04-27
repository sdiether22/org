import Colaborador from "../Colaborador"
import "./Equipo.css"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) =>{
    //Destructuración
    const{titulo, colorPrimario, colorSecundario, id}=props.datos
    const estiloTitulo = {borderColor: colorPrimario}
    const {colaboradores, eliminarColaborador, actualizarColor, like}=props

    return <>{ colaboradores.length > 0 &&
        <section className="equipo" style={{backgroundColor: hexToRgba(colorPrimario,0.5)}}>
            <input
                type='color'
                className="input-color"
                value={colorPrimario}
                onChange={(evento) => {
                    actualizarColor(evento.target.value, id)
                }}
            />
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map((colaborador,index) => <Colaborador 
                    datos={colaborador} 
                    key={index} 
                    colorPrimario={hexToRgba(colorPrimario,0.5)}
                    eliminarColaborador={eliminarColaborador}
                    like={like}
                    />)
                }
            </div>
        </section>
    }</>
}

export default Equipo