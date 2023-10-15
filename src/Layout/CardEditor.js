import { React, useEffect, useState } from "react";
import { Link, useHistory, useParams, useRouteMatch } from "react-router-dom";
import DeleteCard from "./DeleteCard";
import EditCard from "./EditCard";
import { readCard, updateCard, readDeck } from "../utils/api";
import EditCardNav from "./EditCardNav";
import CancelButton from "./CancelButton";




function CardEditor(){

    const params = useParams();
    const cardId = params.cardId;
    const deckId = params.deckId;


    const [deck, setDeck] = useState({});
    const [cards, setCards] = useState([]);
    const [cardFront, setCardFront] = useState("");
    const [cardBack, setCardBack] = useState("");
    const [oldCard, setOldCard] = useState({});
    const { url } = useRouteMatch();
    const history = useHistory();


    const handleFrontChange = (event) => setCardFront(event.target.value);
    const handleBackChange = (event) => setCardBack(event.target.value);

    const handleSubmit = (event) =>{
        event.preventDefault();
        updateCard({...oldCard, front: cardFront, back: cardBack})
        .then((newCard)=>history.push(`/decks/${newCard.deckId}`));

    }


    useEffect(() => {
        async function loadDeck() {
          const response = readDeck(deckId);
          const loadedDeck = await response;
          setDeck(loadedDeck);
          setCards(loadedDeck.cards);
          setCardFront(loadedDeck.cards);
        }
        loadDeck();
      }, [deckId]);

      useEffect(()=>{
        async function loadCard(){
            const response = readCard(cardId);
            const loadedCard = await response;
            setOldCard(loadedCard);
            setCardFront(loadedCard.front);
            setCardBack(loadedCard.back);
        }
        loadCard();
      },[cardId])
    


    return(
        <div>
            <EditCardNav deck={deck} card={oldCard}/>
            <h1>Edit Card</h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label>
                Front:
                <textarea id="cardFront" name="cardFront" value={cardFront} onChange={handleFrontChange}/>
            </label>
            </div>
            <div>
            <label>
                Back:
                <textarea id="cardBack" name="cardBack" value={cardBack} onChange={handleBackChange}/>
            </label>
            </div>
            <button type="submit">Submit</button>
            <CancelButton/>



        </form>

        </div>







    )
}



export default CardEditor;