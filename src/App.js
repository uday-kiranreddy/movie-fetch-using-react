import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

const url = "https://www.omdbapi.com/?apikey=bec039f0&s=batman";
function App() {
  const [movies, setMovies] = useState([]);
  const [loading,setLoading]=useState(true);
 
  const etch = async () => {
    try {

      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.Search);
      setLoading(false);
      console.log(data.Search);
    } catch (error) {
      console.log(error);
    }
  };
  const MoviesDisplay = () => {etch()};
  // useEffect(() => {
  //   etch();
  // }, []);

  return (
    <>
    
    <div className="container">
      <button className="btn" onClick={() => MoviesDisplay()}>
        Fetch Movies
      </button>
      {!loading && movies.map((item) => {
        return <>
       <div className="container">
        <img src={item.Poster} className="img" alt="" />
        <p className="grid">{item.Title} ||<span>Year :: {item.Year}</span> </p>
       </div>
     
        </>;
      })}
     
    </div>
    </>
  );
}

export default App;
