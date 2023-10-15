import { React, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { listDecks } from "../utils/api";
import { deleteCard } from "../utils/api";



function DeleteCard({card}){

   const history = useHistory();
    
    return(

        <button className="btn btn-dark col-2" onClick={()=>{

            if(window.confirm("Delete this card?")){
                deleteCard(card.id);
                history.go(0);
            }


            
        
        
        
        
        
        
        }}>Delete</button>


    )




}


export default DeleteCard;






