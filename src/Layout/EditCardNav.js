import React from "react";
import { Link } from "react-router-dom";




function EditCardNav({deck, card}){

    return(

        <nav label="breadcrumb">
            <ol className="breadcrumb">

                <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                    <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
                </li>
                <li className="breadcrumb-item">
                    Edit Card {card.id}
                </li>

            </ol>
        </nav>





    )





}

export default EditCardNav