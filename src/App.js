import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [taches, setTaches] = useState([
    { id: 1, nom: "faire la lessive" },
    { id: 2, nom: "faire le menage" },
  ]);
  return (
    <ul>
      {taches.map((tache) => {
        return (
          <li>
            {tache.nom} <button>X</button>
          </li>
        );
      })}
    </ul>
  );
}

export default App;
