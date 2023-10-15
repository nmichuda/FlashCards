import React from "react";
import { Link } from "react-router-dom";




function AddCardNav({deck}){

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
                    Add Card
                </li>

            </ol>
        </nav>





    )





}

export default AddCardNav