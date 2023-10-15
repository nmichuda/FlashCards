import { React, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { listDecks } from "../utils/api";



function ViewButton({deck}){

    const history = useHistory();
    return(
        <button type="button" onClick={()=>history.push(`/decks/${deck.id}`)}>View</button>


    )




}


export default ViewButton;