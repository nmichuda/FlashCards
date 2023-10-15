import { React, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { listDecks } from "../utils/api";
import { deleteDeck } from "../utils/api";



function DeleteDeck({deck}){

   const history = useHistory();
    
    return(

        <button onClick={()=>{

            if(window.confirm("Delete this deck?")){
                deleteDeck(deck.id);
                history.go(0);
            }


            
        
        
        
        
        
        
        }}>Delete</button>


    )




}


export default DeleteDeck;