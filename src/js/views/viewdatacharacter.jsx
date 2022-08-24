import React from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import DataCharacters from "../component/datacharacter.jsx";

const ViewDataCharacter = ()=>{
    const params = useParams();
    console.log(params)
    return(<DataCharacters theid={params.theid}/>)
}

export default ViewDataCharacter;