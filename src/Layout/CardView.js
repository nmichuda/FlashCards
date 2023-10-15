import { React, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import DeleteCard from "./DeleteCard";
import EditCard from "./EditCard";



function CardView({cards,deck}){

   
const cardStyle = {
    border: '1px solid black',
}


    const mappedCards = cards.map((card,index)=>{
        return(
            <div key={index} className="deck-card card mt-2">
                <div className="card-body row">
                <div className="col-5"> 
                <p>Front:</p>
                <p>{card.front}</p>
                </div>
                <div className="col-5">
                    <p>Back:</p>
                    <p>{card.back}</p>
                </div>
                </div>

                <DeleteCard card={card}/>
                <EditCard card={card} deck={deck}/>
            </div>
        )
    })



    if (mappedCards.length){
        return <div>{mappedCards}</div>
    }
    else{
        return <p>There are no cards yet!</p>
    }

}




    



export default CardView;