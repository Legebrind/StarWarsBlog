import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";

const CardVehicles = (props) => {
  const { store, actions } = useContext(Context);

 
  return (
    //Podia haber utilizado el item, pero he usado store para practicar.
    <div className="card remwidth">
      <img src={'https://starwars-visualguide.com/assets/img/vehicles/'+props.contador+'.jpg'} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{store.vehicles[props.index].name}</h5>
        <div className="card-text">
          <p>Cost in credits: {store.vehicles[props.index].cost_in_credits}</p>
          <p>Model: {store.vehicles[props.index].model}</p>
          <p>Manufacturer: {store.vehicles[props.index].manufacturer}</p>           
        </div>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default CardVehicles;
