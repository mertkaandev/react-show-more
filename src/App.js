import React, {useState, useEffect} from "react";
import "./app.css";

import {movies} from "./movies.js";

const App = () => {
  const [currentMovies, setCurrentMovies] = useState([]);
  const [visible, setVisible] = useState(3);

  useEffect(()=> {
      setCurrentMovies(movies);
  }, []);

  return (
    <div className="app">
      <div className="app-header">Filmler</div>
      <div className="app-container">
         {currentMovies.slice(0, visible).map((currentMovie)=> (
          <div className="movie-card" key={currentMovie.id}>
              <img className="movie-card-img" src={currentMovie.img} alt=""/>
              <div className="movie-card-info">
                 <h2 className="movie-name">{currentMovie.name}</h2>
                 <span className="movie-description">{currentMovie.description}</span>
              </div>
          </div>
         ))}
      </div>
      {visible === currentMovies.length ? (
          <button className="more-button" onClick={(e)=>{
              setVisible(visible-3)
          }}>Daha Azını Gör</button>  
         ) :( 
          <button className="more-button" onClick={(e)=>{
              setVisible(visible+3)
          }}>Daha Fazlasını Gör</button> 
      )}       
    </div>
  );
}

export default App;
