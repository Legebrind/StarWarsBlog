import React from "react";
import { useParams } from "react-router-dom";
import Data from "../component/data.jsx";

const ViewData = () => {
  const params = useParams();
  
  return <Data theid={params.theid} type={params.type} />;
};

export default ViewData;
