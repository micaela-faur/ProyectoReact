import React, {Component} from 'react'; 
import Canciones from "../Canciones/Canciones";
import './Playlist.css';
import Buscador from "../Buscador/Buscador";


class Playlist extends Component{
    constructor(props){
        super(props);
        this.state={
            datos: undefined, // tipo de datoq no esta definido
            limit: 10,
            ordenCanciones: "columnas",
            datosModificado: undefined
        
        }
    }
    

    componentDidMount(){
        let url = 'https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/tracks&top?limit=' + this.state.limit
        fetch(url)
        .then(response => response.json()) // transofrma los datos que vienen de la API en Json
        .then( info => this.setState({
            datos: info.data,
            datosModificado: info.data,
            limit: this.state.limit + 10
        }))
        .catch(error => console.log(error))
    } 

   

    borrar(id){
        let cancionesFiltradas = []; // creamos un array para cargar las canciones filtradas
     cancionesFiltradas = this.state.datos.filter( unaCancion => unaCancion.id !== id );

     this.setState({
         datos: cancionesFiltradas, // decimos que las canciones filtradas se carguen en el array segun la condicion del filter
         datosModificado: cancionesFiltradas
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
        datosModificado: data.data,
        limit: this.state.limit + 10    
        }))


    }

    filtrarCanciones(textoAFiltrar){
        let cancionesAFiltrar = [];
        cancionesAFiltrar = this.state.datos.filter(filtrado  => filtrado.title.toLowerCase().includes(textoAFiltrar.toLowerCase()))
        this.setState({
            datosModificado: cancionesAFiltrar
        }) 


    }

    filas(){
        this.setState({
            ordenCanciones: "filas"
        })
    }

    columnas(){
        this.setState({
            ordenCanciones: "columnas"
        })
    }

    render(){
        console.log('hola', this.state.datosModificado)
        return(
          <React.Fragment>
              <div className='botonMas'>
                <Buscador cancionesAFiltrar={(filtrar)=> this.filtrarCanciones(filtrar)} /> 
                <button className="pm" type='button' onClick={() => this.pedirMas() }> Pedir Mas </button>
              </div>
                    
              <section> 
                    <div className='orientacion'>               
                        <button onClick={() =>this.filas()}> Filas </button>                
                        <button onClick={() =>this.columnas()}> Columnas </button>
                    </div>
                    
                    <div className={`container ${this.state.ordenCanciones ==  "columnas" ? "columnas" : "filas"}`}>
                            {this.state.datosModificado ?  // si existe datos 
                            this.state.datosModificado.length > 0 ? // fijate si tienen la length mayor  a cero
                            this.state.datosModificado.map((cancion, idx) => <Canciones key={cancion.title + idx} // si es asi haceme el map
                                artistas={cancion} borrarCancion = { (id)=> this.borrar(id)} />) : 
                                <h3 className='resultadosBusqueda'> No hay datos que coincidan con su busqueda </h3> : // si false osea si no existen datos me tira el loader
                                <img className='loader' src= "/imagenes/gifloader.gif" alt= "" />
                                }
                    </div>
              </section>
          </React.Fragment>
        )
       
    } 
    

} 


export default Playlist; 