import { React, useEffect, useState } from "react";
import { Link, useHistory, useParams, useRouteMatch } from "react-router-dom";
import { readCard, updateCard, readDeck, createCard } from "../utils/api";
import AddCardNav from "./AddCardNav";
import CancelButton from "./CancelButton";
import FormComponent from "./FormComponent";



function AddCard(){

    const params = useParams();
    
    const deckId = params.deckId;

    const [deck,setDeck] = useState({});

    useEffect(() => {
        async function loadDeck() {
          const response = readDeck(deckId);
          const loadedDeck = await response;
          setDeck(loadedDeck);
        }
        loadDeck();
      }, [deckId]);


    
    const [cardFront, setCardFront] = useState("");
    const [cardBack, setCardBack] = useState("");
    
    const { url } = useRouteMatch();
    const history = useHistory();


    const handleFrontChange = (event) => setCardFront(event.target.value);
    const handleBackChange = (event) => setCardBack(event.target.value);

    const handleSubmit = (event) =>{
        event.preventDefault();
        createCard(deckId, {front: cardFront, back: cardBack})
        .then((newCard)=>history.push(`/decks/${newCard.deckId}`));

    }


   
    


    return(
        <div>
            <AddCardNav deck={deck}/>
            <h1>{deck.name}: Add Card</h1>
        <FormComponent firstLabel="Front" firstValue={cardFront} firstHandler={handleFrontChange} secondLabel="Back" secondValue={cardBack} secondHandler={handleBackChange} handleSubmit={handleSubmit}/>
        

        </div>







    )
}



export default AddCard;