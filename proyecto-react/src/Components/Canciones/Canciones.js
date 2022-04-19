import React, {Component} from 'react'; 
import './Canciones.css'

class Canciones extends Component{
    constructor(props){
        super(props);
        this.state={
            datos: [],
            descripcion: false, // Situacion inicial: se ve el boton de ver mas y la descripcion esta oculta por eso el valor: false
            botonDescripcion: "Ver más",
        };
    }
    verMas(){
        if (this.state.descripcion){
            this.setState({
                descripcion: false,
                botonDescripcion: "Ver más",
            });
        } else {
            this.setState({
                descripcion: true,
                botonDescripcion: "Ver menos",
        });
    } 
    }

    render(){
        console.log(this.props);
        return(
            <React.Fragment>
            <main className="tarjeta">
                <img src={this.props.artistas.artist.picture} alt={this.props.artistas} /> 
                <h3 className="titulo" >Título: {this.props.artistas.title} </h3>
                <h3>Artista: {this.props.artistas.artist.name} </h3>
                <section className= {this.state.descripcion ? "aditional-info-show" : "aditional-info"} > 
                    <p>Duracion: {this.props.artistas.duration} seconds</p>
                    <p>Ranking: {this.props.artistas.rank} </p> 
                </section>
                <button className= "boton" type="button" onClick={()=> this.props.borrarCancion(this.props.artistas.id)}>Eliminar</button>
                <button className= "boton" onClick={()=> this.verMas()} > {this.state.botonDescripcion} </button> 
            </main>
            <div>
                
            </div>
                 
</React.Fragment>     
        )
    }
    





}


export default Canciones; 