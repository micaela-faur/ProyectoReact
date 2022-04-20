import React, {Component} from "react";
import './Buscador.css';

class Buscador extends Component {
constructor(props){
        super(props);
        this.state={
        busqueda: "",
        
        }
    }


    evitarDefault(accionDefault){ //Este metodo se encarga de evitar que se envie el formulario
        console.log('evitando envio');
        accionDefault.preventDefault();

    }

    obtenerDatos(datos){
        this.setState({
            busqueda: datos.target.value
    
        },
            ()=> this.props.cancionesAFiltrar(this.state.busqueda)
        
        )
    }


    render(){
        
        return(
            <form onSubmit={(event)=>this.evitarDefault(event)}>
                <input className="buscador" onChange={(cambios)=>this.obtenerDatos(cambios)} type= "text" name="busqueda" placeholder="Ingrese Busqueda" value ={this.state.busqueda}/> 
                <button className="enviar" type= "submit" >Enviar</button>
                
            </form>
        )
    }

}


export default Buscador