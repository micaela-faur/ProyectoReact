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
                <article>
                                <main>
                                    <img src={this.props.artistas.artist.picture} alt={this.props.artistas} /> 
                                     <h3>Título: {this.props.artistas.title} </h3>
                                     <h3>Artista: {this.props.artistas.artist.name} </h3>
                                      <button> Ver más </button> 
                                      <section class="aditional-info"> 
                                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p> 
                                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p> 
                                      </section>
                                      <button type="button" onClick={()=> this.props.borrarCancion(this.props.artistas.id)}>Eliminar</button>
                                </main>
                 </article> 
            </div>

        )
    }
    





}


export default Canciones; 