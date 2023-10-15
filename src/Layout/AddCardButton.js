import { React, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { listDecks } from "../utils/api";



function AddCardButton({deck}){


    const history = useHistory();
    return(
        <button onClick={()=>history.push(`/decks/${deck.id}/cards/new`)}>Add Cards</button>


    )




}


export default AddCardButton;