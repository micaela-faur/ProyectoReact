import React from 'react';
import Playlist from "./Components/Playlist/Playlist"
import Canciones from "./Components/Canciones/Canciones"
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="body"> 
      <header>
        <h1 className="tituloApp">DEEZER</h1>
          <section>
              <i class="fas fa-th"></i>
              <i class="fas fa-align-justify"></i>
              
          </section>
      </header>

      <main>

          <section class="card-container">
            <Playlist/> 
          </section>

      </main>
    <section class= "section-footer">
      <Footer/> 

    </section>
    </div>
    

  );
}

export default App;
