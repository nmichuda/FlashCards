import { React, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { listDecks } from "../utils/api";



function StudyButton({deck}){


    const history = useHistory();
    return(
        <button onClick={()=>history.push(`/decks/${deck.id}/study`)}>Study</button>


    )




}


export default StudyButton;