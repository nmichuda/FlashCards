import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import DeckView from "./DeckView";
import CardEditor from "./CardEditor";
import AddCard from "./AddCard";
import EditDeck from "./EditDeck";
import CreateDeck from "./CreateDeck";
import StudyCard from "./StudyCard";


function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          


          <Route path="/decks/:deckId/cards/:cardId/edit">
            <CardEditor/>
          </Route> 

          <Route path="/decks/:deckId/cards/new">
            <AddCard/>
          </Route>

          <Route path="/decks/:deckId/edit">
            <EditDeck/>
          </Route>
          <Route path="/decks/:deckId/study">
            <StudyCard/>
          </Route>


          <Route path="/decks/new">
            <CreateDeck/>
          </Route>

          <Route exact path="/decks/:deckId">
            <DeckView/>
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
