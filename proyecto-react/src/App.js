import React from 'react';
import Playlist from "./Components/Playlist/Playlist"
import Canciones from "./Components/Canciones/Canciones"


function App() {
  return (
    <div> 
      <header>
        <h1>Título/ Nombre de la app</h1>
          <section>
              <i class="fas fa-th"></i>
              <i class="fas fa-align-justify"></i>
              <form action="">
                  <input type="text" name="search" id="" placeholder="Search"/>
                  <button type="submit"><i class="fas fa-search"></i></button>
              </form>
          </section>
      </header>

      <main>
          <button type="button">Cargar más tarjetas</button>
          <section class="card-container">
            <Playlist/> 
          </section>

      </main>

    </div>

  );
}

export default App;
