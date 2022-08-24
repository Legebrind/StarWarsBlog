import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardPlanet = (props) => {
  const { store, actions } = useContext(Context);

  
  return (
    //Podia haber utilizado el item, pero he usado store para practicar.
    <div className="card remwidth bg-dark text-warning">
      <img src={props.index==0 ? "https://starwars-visualguide.com/assets/img/placeholder.jpg" : 'https://starwars-visualguide.com/assets/img/planets/'+props.contador+'.jpg'} className="card-img-top customMaxHeight" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{store.planets[props.index].name}</h5>
        <div className="card-text">
          <div>Terrain: {store.planets[props.index].climate}</div>
          <div>Population: {store.planets[props.index].population}</div>
                     
        </div>
        <Link to={`/viewdataplanet/${props.index}`}>
          <span href="#" className="btn btn-warning">
            Learn more!
          </span>
			</Link>
      </div>
    </div>
  );
};

export default CardPlanet;
