import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardVehicles = (props) => {
  const { store, actions } = useContext(Context);

 
  return (
    //Podia haber utilizado el item, pero he usado store para practicar.
    <div className="card remwidth bg-dark text-warning">
      <img  src={store.vehiclesurl[props.index]} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{store.vehicles[props.index].name}</h5>
        <div className="card-text">
          <div>Cost in credits: {store.vehicles[props.index].cost_in_credits}</div>
          <div>Model: {store.vehicles[props.index].model}</div>
          <div>Manufacturer: {store.vehicles[props.index].manufacturer}</div>           
        </div>
        <Link to={`/viewdatavehicle/${props.index}`}>
          <span href="#" className="btn btn-warning">
            Learn more!
          </span>
			</Link>
      </div>
    </div>
  );
};

export default CardVehicles;
