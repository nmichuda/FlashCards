import React from "react";
import { Link } from "react-router-dom";




function DeckViewNav({deck}){

    return(

        <nav label="breadcrumb">
            <ol className="breadcrumb">

                <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                    {deck}
                </li>

            </ol>
        </nav>





    )





}

export default DeckViewNav