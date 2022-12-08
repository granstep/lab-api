import logo from './logo.svg';
import './App.css';
import { useState,  useEffect } from "react";
import { MarsGallery } from "./MarsGallery";
import { NasaAPIConnection } from "./DataConnection";
import Snowfall from "react-snowfall";

function App() {

  const [year, setYear] = useState(2010);
  const [pics, setPics] = useState([]);

  useEffect(async () => {
    const timer = setTimeout( async ()  => {
    let returnedPictures = await NasaAPIConnection(year);
    setPics(returnedPictures.photos);
    }, 1000);

    return () => clearInterval(timer);
  }, {year});
  
  return (
    <div className="App">
      <h1>Christmas on Mars at.. </h1>
      <input aria-label='date' type="range" min="2008" max="2021" value={year}
      onChange={(e) => {setYear(e.target.value)}} />
      <div>{year}</div>
      <MarsGallery images={pics} />
      <Snowfall />
    </div>
  );
}

export default App;
