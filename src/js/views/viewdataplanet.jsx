import React from "react";
import {  useParams } from "react-router-dom";
import DataPlanet from "../component/dataplanet.jsx";

const ViewDataPlanet = ()=>{
    const params = useParams();
    console.log(params)
    return(<DataPlanet theid={params.theid}/>)
}

export default ViewDataPlanet;