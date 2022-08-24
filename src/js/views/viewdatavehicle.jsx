import React from "react";
import {  useParams } from "react-router-dom";
import DataVehicles from "../component/datavehicle.jsx";

const ViewDataVehicle = ()=>{
    const params = useParams();
    console.log(params)
    return(<DataVehicles theid={params.theid}/>)
}

export default ViewDataVehicle;