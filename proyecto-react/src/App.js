import React from 'react';
import Playlist from "./Components/Playlist/Playlist"
import Canciones from "./Components/Canciones/Canciones"


function App() {
  return (
    <div className="body"> 
      <header>
        <h1 className="tituloApp">Nombre de la App</h1>
          <section>
              <i class="fas fa-th"></i>
              <i class="fas fa-align-justify"></i>
              <form   action="">
                  <input className="search" type="text" name="search" id="" placeholder="Search"/>
                 
              </form>
          </section>
      </header>

      <main>
          <button className="botonMas" type="button">Cargar más tarjetas</button>
          <section class="card-container">
            <Playlist/> 
          </section>

      </main>

    </div>

  );
}

export default App;
