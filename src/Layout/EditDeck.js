import { React, useEffect, useState } from "react";
import { Link, useHistory, useParams, useRouteMatch } from "react-router-dom";
import DeleteCard from "./DeleteCard";
import EditCard from "./EditCard";
import { readCard, updateCard, readDeck, updateDeck } from "../utils/api";
import EditViewNav from "./EditViewNav";
import CancelButton from "./CancelButton";



function EditDeck(){

    const params = useParams();
    
    const deckId = params.deckId;


    const [deck, setDeck] = useState({});
   
    const [name,setName] = useState("");
    const [description, setDescription] = useState("");

    const [oldDeck, setOldDeck] = useState({});




    
    const { url } = useRouteMatch();
    const history = useHistory();


    const handleNameChange = (event) => setName(event.target.value);
    const handleDescriptionChange = (event) => setDescription(event.target.value);

    const handleSubmit = (event) =>{
        event.preventDefault();
        updateDeck({...oldDeck, name: name, description: description})
        .then((newDeck)=>history.push(`/decks/${deck.id}`));

    }


    useEffect(() => {
        async function loadDeck() {
          const response = readDeck(deckId);
          const loadedDeck = await response;
          setDeck(loadedDeck);
          setOldDeck(loadedDeck);
          setName(loadedDeck.name);
          setDescription(loadedDeck.description);
        }
        loadDeck();
      }, [deckId]);
    


    return(
        <div>
            <EditViewNav deck={deck}/>
            <h1>Edit Deck</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label>
                Name:
                <input id="name" name="name" value={name} onChange={handleNameChange}/>
            </label>
            </div>
            <div>
            <label>
                Description:
                <textarea id="description" name="description" value={description} onChange={handleDescriptionChange}/>
            </label>
            </div>
            <button type="submit">Submit</button>
            <CancelButton/>


        </form>

        </div>







    )
}



export default EditDeck;