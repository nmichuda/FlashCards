import React from "react";
import { Link } from "react-router-dom";




function CreateDeckNav(){

    return(

        <nav label="breadcrumb">
            <ol className="breadcrumb">

                <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                    Create Deck
                </li>
                

            </ol>
        </nav>





    )





}

export default CreateDeckNav