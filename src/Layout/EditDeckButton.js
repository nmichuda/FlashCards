import { React, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { listDecks } from "../utils/api";



function EditDeckButton({deck}){


    const history = useHistory();
    return(
        <button onClick={()=>history.push(`/decks/${deck.id}/edit`)}>Edit</button>


    )




}


export default EditDeckButton;