import React, { useEffect, useContext } from "react";
import CardCharacters from "../component/cardcharacter.jsx";
import CardPlanet from "../component/cardplanet.jsx";
import CardVehicles from "../component/cardvehicle.jsx";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);


  useEffect(() => {
    actions.fetchCharacter();
    actions.fetchPlanets();
    actions.fetchVehicles();
	console.log(store.character);
  }, []);
  return(
	<div className="container">
		<div className="row">
			<h1 className="text-light py-1">Characters</h1>
			<div className="d-flex overflow-auto">
				{store.character.map((item,i)=> <div><CardCharacters key={i} index={i} contador={i+1} /></div>)}
			</div>
		</div>
		<div className="row">
			<h1 className="text-light py-1">Planets</h1>
			<div className="d-flex overflow-auto">
				{store.planets.map((item,i)=> <div><CardPlanet key={i} index={i} contador={i+1} /></div>)}
			</div>
		</div>
		<div className="row">
			<h1 className="text-light py-1">Vehicles</h1>
			<div className="d-flex overflow-auto">
				{store.vehicles.map((item,i)=> <div><CardVehicles key={i} index={i} contador={i+1} /></div>)}
			</div>
		</div>
	</div>
	);
};
