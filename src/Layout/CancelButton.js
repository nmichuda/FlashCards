import { React, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { listDecks } from "../utils/api";



function CancelButton(){


    const history = useHistory();
    return(
        <button type="button" onClick={()=>history.go(-1)}>Cancel</button>


    )




}


export default CancelButton;