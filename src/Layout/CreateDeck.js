import { React, useEffect, useState } from "react";
import { Link, useHistory, useParams, useRouteMatch } from "react-router-dom";
import DeleteCard from "./DeleteCard";
import EditCard from "./EditCard";
import { readCard, updateCard, readDeck, createDeck } from "../utils/api";
import EditViewNav from "./EditViewNav";
import { listDecks } from "../utils/api";
import CreateDeckNav from "./CreateDeckNav";
import CancelButton from "./CancelButton";



function CreateDeck(){



    const [deck, setDeck] = useState({});
   
    const [name,setName] = useState("");
    const [description, setDescription] = useState("");

    const [id,setId] = useState(0);




    
    const { url } = useRouteMatch();
    const history = useHistory();


    const handleNameChange = (event) => setName(event.target.value);
    const handleDescriptionChange = (event) => setDescription(event.target.value);

    const handleSubmit = (event) =>{
        event.preventDefault();
        createDeck({name: name, description: description, id: id})
        .then((newDeck)=>history.push(`/`));

    }

    useEffect(() => {
        async function deckList() {
          const response = listDecks();
          const loadedDeck = await response;
          setId(loadedDeck.length + 1);
          
        }
        deckList();
      }, []);

    


    return(
        <div>
            <CreateDeckNav/>
            <h1>Create Deck</h1>
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



export default CreateDeck;