import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";

const CardPlanet = (props) => {
  const { store, actions } = useContext(Context);

  
  return (
    //Podia haber utilizado el item, pero he usado store para practicar.
    <div className="card remwidth">
      <img src={'https://starwars-visualguide.com/assets/img/planets/'+props.contador+'.jpg'} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{store.planets[props.index].name}</h5>
        <div className="card-text">
          <div>Terrain: {store.planets[props.index].climate}</div>
          <div>Population: {store.planets[props.index].population}</div>
                     
        </div>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default CardPlanet;
