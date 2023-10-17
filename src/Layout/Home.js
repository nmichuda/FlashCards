import { React, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { listDecks } from "../utils/api";
import StudyButton from "./StudyButton";
import ViewButton from "./ViewButton";
import DeleteDeck from "./DeleteDeck";

function Home() {
  const history = useHistory();

  const [decks, setDecks] = useState([]);

  useEffect(() => {
    async function loadDecks() {
      const loaded = listDecks();
      const loadedDecks = await loaded;
      setDecks(loadedDecks);
    }
    loadDecks();
  }, []);

  const cardStyle = {
    border: "1px solid black",
  };

  return (
    <div>
      <button onClick={() => history.push("/decks/new")}>Create Deck</button>
      

      {decks.map((deck, index) => {
        return (
          <div style={cardStyle} className="flex" key={index}>
            <div className="card-body">
              <div className="row">
                <div className="col-5">{deck.name}</div>

                <div className="col-5">{deck.cards.length} cards</div>
              </div>

              <div>{deck.description}</div>

              <ViewButton deck={deck} />
              <StudyButton deck={deck} />
              
              <DeleteDeck deck={deck} />
              
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;