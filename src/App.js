import React ,{useState} from "react";
import "./App.css";
import data from "./data";
function App(){
  const [tours,setTours]=useState(data);
  return(
    <div>
      <h2>Trippin-Tourist Guide</h2>
      <Tours></Tours>
    </div>
  )
}

export default App;