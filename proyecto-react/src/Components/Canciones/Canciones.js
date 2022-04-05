import React, {Component} from 'react'; 

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
                                    <img src="./img/image-default.png" alt=""/> 
                                     <h3>Título/ Nombre</h3>
                                     <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint cumque velit minus facere laboriosam voluptatem impedit ea unde labore optio eius quis, dignissimos expedita. Culpa, soluta perspiciatis! Sint, laboriosam cum.</p> 
                                     <section class="aditional-info"> 
                                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p> 
                                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p>
                                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse qui atque.</p> 
                                      </section>
                                      <a href="">Ver más</a>
                                </main>
                 </article> 
            </div>

        )
    }
    





}


export default Canciones; 