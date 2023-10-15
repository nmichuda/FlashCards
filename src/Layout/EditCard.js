import { React, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { listDecks } from "../utils/api";



function EditCard({card,deck}){


    const history = useHistory();
    return(
        <button className="col-2" onClick={()=>history.push(`/decks/${deck.id}/cards/${card.id}/edit`)}>Edit</button>


    )




}


export default EditCard;