import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Liste from "./liste";
import Form from "./form";

function App() {
  const [taches, setTaches] = useState([
    { id: 1, nom: "faire la lessive" },
    { id: 2, nom: "faire le menage" },
  ]);
  
  return <div className="App">
    <h1>Liste de tache a faire</h1>
    <Liste  taches={taches} setTaches={setTaches}/>
    <Form taches={taches} setTaches={setTaches}/>
  </div>
}

export default App;
