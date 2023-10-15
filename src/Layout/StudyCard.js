import { React, useEffect, useState } from "react";
import { Link, useHistory, useParams, useRouteMatch } from "react-router-dom";
import DeleteCard from "./DeleteCard";
import EditCard from "./EditCard";
import { readCard, updateCard, readDeck } from "../utils/api";
import EditCardNav from "./EditCardNav";
import AddCardButton from "./AddCardButton";
import StudyNav from "./StudyNav";

function StudyCard() {
  const params = useParams();
  const deckId = params.deckId;

  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);
  const [card, setCard] = useState({});
  const [count, setCount] = useState(1);
  const [front, setFront] = useState(true);
  const history = useHistory();

  const sideFlip = () =>{
    setFront(!front);
  }

  const nextCard = () => {
    if (count < cards.length) {
      setCard(cards[count]);
      setCount(count + 1);
      setFront(!front);
    } else {
      if (
        window.confirm(
          "Restart cards? Click 'cancel' to return to the home page."
        )
      ) {
        setFront(!front);
        setCount(1);
        setCard(cards[0]);
        history.go(0);
      } else {
        history.push("/");
      }
    }
  };

  useEffect(() => {
    async function loadDeck() {
      const response = readDeck(deckId);
      const loadedDeck = await response;
      setDeck(loadedDeck);
      setCards(loadedDeck.cards);
      setCard(loadedDeck.cards[0]); //sets the card to the first card in the deck
    }
    loadDeck();
  }, [deckId]);

  if (cards.length < 3) {
    return (
      <div>
        <StudyNav deck={deck}/>
        <h3>Not enough cards!</h3>
        <p>
          You need at least 3 cards to study. There are {cards.length} cards in
          this deck.
        </p>
        <AddCardButton deck={deck} />
      </div>
    );
  }

  if (front) {
    return (
      <div>
        <StudyNav deck={deck}/>
        <h3>
          Card {count} of {cards.length}
        </h3>
        <p>{card.front}</p>
        <button
          type="button"
          className="btn btn-dark"
          onClick={sideFlip}
        >
          Flip
        </button>
      </div>
    );
  }

  return (
    <div>
        <StudyNav deck={deck}/>
      <h3>
        Card {count} of {cards.length}
      </h3>
      <p>{card.back}</p>
      <button type="button" className="btn btn-dark" onClick={sideFlip}>
        Flip
      </button>
      <button type="button" className="btn btn-dark" onClick={nextCard}>
        Next
      </button>
    </div>
  );
}

export default StudyCard;
