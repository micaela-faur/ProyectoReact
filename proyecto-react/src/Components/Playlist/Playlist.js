import React, {Component} from 'react'; 

class Playlist extends Component{
    constructor(props){
        super(props);
        this.state={
            datos: [],
        }
    }
    

    componentDidMount(){
        let url = 'https://thingproxy.freeboard.io/fetch/https://developers.deezer.com/api/explorer?url=chart/0/tracks '
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
                {this.state.datos === ''?
                <h3> Cargando... </h3> : 
                <h1> Llego bien </h1> }
                {/* // this.state.datos.map(datos)} */}
            </div>

        )
    }
    





}


export default Playlist; 