import React, {Component} from 'react'; 
import Canciones from "../Canciones/Canciones"
class Playlist extends Component{
    constructor(props){
        super(props);
        this.state={
            datos: [],
        }
    }
    

    componentDidMount(){
        let url = 'https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=10'
        fetch(url)
        .then(response => response.json()) // transofrma los datos que vienen de la API en Json
        .then( info => this.setState({
            datos: info.data
        }))
        .catch(error => console.log(error))
    } 

    
    render(){
        console.log(this.state.datos);
        return(
            <div>
                {this.state.datos === ''? // if ternario: creamos un condicional porque si tarta en traer la info de la api, que me tire cargando, y sino que me traiga del estado el array con toda la info de las canciones.
                <h3> Cargando... </h3> :  
                
                this.state.datos.map((cancion, idx) => <Canciones key={cancion.datos + idx} 
                artistas={cancion} />)  }
               
            </div>

        )

    }
    



}


export default Playlist; 