import React, { useEffect, useContext } from "react";
import Cards from "../component/cards.jsx";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {}, []);
  return (
    <div className="container">
      <div className="row">
        <h1 className="text-warning py-1">Characters</h1>
        <div className="d-flex overflow-auto">
          {store.character.map((item, i) => (
            <div>
              <Cards key={i} index={i} contador={i + 1} type="character" />
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <h1 className="text-warning py-1">Planets</h1>
        <div className="d-flex overflow-auto">
          {store.planets.map((item, i) => (
            <div>
              <Cards key={i} index={i} contador={i + 1} type="planet" />
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <h1 className="text-warning py-1">Vehicles</h1>
        <div className="d-flex overflow-auto">
          {store.vehicles.map((item, i) => (
            <div>
              <Cards key={i} index={i} contador={i + 1} type="vehicle" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
