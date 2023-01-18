import { useState } from "react"

export default function Form({taches, setTaches}){
    const[inputValue, setValue]=useState("")

    function change(e){
        e.preventDefault();
        setValue(e.target.value);
    }

    function add(e){
        e.preventDefault();
        const listeCopie=taches.slice();
        const newElement={
            id: Math.floor(Math.random()*10),
            nom: inputValue,
        }
        listeCopie.push(newElement);
        setTaches(listeCopie);
        setValue("");
    }

    return <form >
            <input type="text" placeholder="Entrer la tache" value={inputValue} onChange={change}></input>
            <button onClick={add}>+</button>
    </form>
}