export default function Liste({taches, setTaches}){

    function supprimer(id){
        const copy=taches.slice()
        const tacheUpdate=copy.filter((tache)=>tache.id !=id)
        setTaches(tacheUpdate)
    }

    return <ul>
    {taches.map((tache) => {
      return (
        <li>
          {tache.nom} <button onClick={()=>supprimer(tache.id)}>X</button>
        </li>
      );
    })}
  </ul>
}