import { React, useEffect, useState } from "react";
import { Link, useHistory, useParams, useRouteMatch } from "react-router-dom";
import { readDeck } from "../utils/api";
import CardView from "./CardView";
import DeckViewNav from "./DeckViewNav";

import StudyButton from "./StudyButton";
import EditDeckButton from "./EditDeckButton";
import DeleteDeck from "./DeleteDeck";

import AddCardButton from "./AddCardButton";

function DeckView() {
  const DeckID = useParams().deckId;
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);
  const { url } = useRouteMatch();

  


  useEffect(() => {
    async function loadDeck() {
      const response = readDeck(DeckID);
      const loadedDeck = await response;
      setDeck(loadedDeck);
      setCards(loadedDeck.cards);
    }
    loadDeck();
  }, [DeckID]);

  if (deck.name) {
    return (
      <div>
        
        <DeckViewNav deck={deck.name}/>
        <h2>{deck.name}</h2>
        <h5>{deck.description}</h5>
        <DeleteDeck deck={deck}/>
        <EditDeckButton deck={deck}/>
        <StudyButton deck={deck}/>
        <AddCardButton deck={deck}/>
        <h1>Cards</h1>
        <CardView cards={cards} deck={deck}/>
      </div>
    );
  }
  return "Loading...";
}

export default DeckView;
