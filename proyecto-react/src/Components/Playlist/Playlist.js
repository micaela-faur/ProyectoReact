import React, {Component} from 'react'; 
import Canciones from "../Canciones/Canciones";
import './Playlist.css';
import Buscador from "../Buscador/Buscador";


class Playlist extends Component{
    constructor(props){
        super(props);
        this.state={
            datos: [],
            limit: 10,
        
        }
    }
    

    componentDidMount(){
        let url = 'https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=' + this.state.limit
        fetch(url)
        .then(response => response.json()) // transofrma los datos que vienen de la API en Json
        .then( info => this.setState({
            datos: info.data,
            limit: this.state.limit + 10
        }))
        .catch(error => console.log(error))
    } 

   

    borrar(id){
        let cancionesFiltradas = []; // creamos un array para cargar las canciones filtradas
     cancionesFiltradas = this.state.datos.filter( unaCancion => unaCancion.id !== id );

     this.setState({
         datos: cancionesFiltradas // decimos que las canciones filtradas se carguen en el array segun la condicion del filter
     })


    }
// 
    pedirMas(){
        console.log('hola')
        let url2 = 'https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=' + this.state.limit 
        fetch(url2)
        .then(response => response.json())
        .then(data => this.setState({
        datos: data.data , 
        limit: this.state.limit + 10    
        }))


    }

    filtrarCanciones(textoAFiltrar){
        let cancionesAFiltrar = [];
        cancionesAFiltrar = this.state.datos.filter(filtrado  => filtrado.title.toLowerCase().includes(textoAFiltrar.toLowerCase()))
        this.setState({
            datos: cancionesAFiltrar
        }) 


    }

    render(){
        console.log(this.state.datos);
        return(
            <React.Fragment> 
            <div className="botonMas"> 
                <Buscador cancionesAFiltrar={(filtrar)=> this.filtrarCanciones(filtrar)} /> 
                <button type='button' onClick={() => this.pedirMas() }> Pedir Mas </button> 
            </div>

            <div className = 'container' >
                {this.state.datos.length === 0 ? // if ternario: creamos un condicional porque si tarta en traer la info de la api, que me tire cargando, y sino que me traiga del estado el array con toda la info de las canciones.
               //<h3> Cargando ...</h3> :
               <img src= "/imagenes/gifloader.gif" alt= "" /> :  
                this.state.datos.map((cancion, idx) => <Canciones key={cancion.datos + idx} 
                artistas={cancion} borrarCancion = { (id)=> this.borrar(id)} />)  }
               
            </div>
            </React.Fragment>
        )

    }
    



}


export default Playlist; 