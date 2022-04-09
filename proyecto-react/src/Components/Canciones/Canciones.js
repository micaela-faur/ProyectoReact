import React, {Component} from 'react'; 
import './Canciones.css'

class Canciones extends Component{
    constructor(props){
        super(props);
        this.state={
            datos: [],
        }
    }
    

    render(){
        console.log(this.props);
        return(
            <div>
                
                <main class="tarjeta">
                    <img src={this.props.artistas.artist.picture} alt={this.props.artistas} /> 
                    <h3 className="titulo" >Título: {this.props.artistas.title} </h3>
                    <h3>Artista: {this.props.artistas.artist.name} </h3>
                    <section class="aditional-info"> 
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p> 
                    </section>
                    <button className= "boton" type="button" onClick={()=> this.props.borrarCancion(this.props.artistas.id)}>Eliminar</button>
                    <button className= "boton"> Ver más </button> 
                </main>
                 
            </div>

        )
    }
    





}


export default Canciones; 