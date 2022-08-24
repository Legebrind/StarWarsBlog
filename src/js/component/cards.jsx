import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Cards = (props) => {
  const { store, actions } = useContext(Context);
  let type = "";
  switch (props.type) {
    case "character":
      type = "character";
      return (
        //Podia haber utilizado el item, pero he usado store para practicar.
        <div className="card remwidth bg-dark text-warning">
          <img
            src={
              "https://starwars-visualguide.com/assets/img/characters/" +
              props.contador +
              ".jpg"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{store.character[props.index].name}</h5>
            <div className="card-text">
              <div>Gender: {store.character[props.index].gender}</div>
              <div>Hair Color: {store.character[props.index].hair_color}</div>
              <div>Eye Color: {store.character[props.index].eye_color}</div>
            </div>
            <div className="d-flex space-content-around">
              <Link to={`/viewdata/${type}/${props.index}`}>
                <span href="#" className="btn btn-warning">
                  Learn more!
                </span>
              </Link>
              {!store.favoriteList.includes(
                store.character[props.index].name
              ) ? (
                <i
                  className="fa-regular fa-star"
                  onClick={() =>
                    actions.addFavorite(store.character[props.index].name)
                  }
                ></i>
              ) : (
                <i className="fa-solid fa-star"></i>
              )}
            </div>
          </div>
        </div>
      );
      break;
    case "planet":
      type = "planet";
      return (
        //Podia haber utilizado el item, pero he usado store para practicar.
        <div className="card remwidth bg-dark text-warning">
          <img
            src={
              props.index == 0
                ? "https://starwars-visualguide.com/assets/img/placeholder.jpg"
                : "https://starwars-visualguide.com/assets/img/planets/" +
                  props.contador +
                  ".jpg"
            }
            className="card-img-top customMaxHeight"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{store.planets[props.index].name}</h5>
            <div className="card-text">
              <div>Terrain: {store.planets[props.index].climate}</div>
              <div>Population: {store.planets[props.index].population}</div>
            </div>
            <div className="d-flex space-content-around">
              <Link to={`/viewdata/${type}/${props.index}`}>
                <span href="#" className="btn btn-warning">
                  Learn more!
                </span>
              </Link>
              {!store.favoriteList.includes(store.planets[props.index].name) ? (
                <i
                  className="fa-regular fa-star"
                  onClick={() =>
                    actions.addFavorite(store.planets[props.index].name)
                  }
                ></i>
              ) : (
                <i className="fa-solid fa-star"></i>
              )}
            </div>
          </div>
        </div>
      );
      break;
    case "vehicle":
      type = "vehicle";
      return (
        //Podia haber utilizado el item, pero he usado store para practicar.
        <div className="card remwidth bg-dark text-warning">
          <img
            src={store.vehiclesurl[props.index]}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{store.vehicles[props.index].name}</h5>
            <div className="card-text">
              <div>
                Cost in credits: {store.vehicles[props.index].cost_in_credits}
              </div>
              <div>Model: {store.vehicles[props.index].model}</div>
              <div>
                Manufacturer: {store.vehicles[props.index].manufacturer}
              </div>
            </div>
            <div className="d-flex space-content-around">
              <Link to={`/viewdata/${type}/${props.index}`}>
                <span href="#" className="btn btn-warning">
                  Learn more!
                </span>
              </Link>
              {!store.favoriteList.includes(
                store.vehicles[props.index].name
              ) ? (
                <i
                  className="fa-regular fa-star"
                  onClick={() =>
                    actions.addFavorite(store.vehicles[props.index].name)
                  }
                ></i>
              ) : (
                <i className="fa-solid fa-star"></i>
              )}
            </div>
          </div>
        </div>
      );
  }
};

export default Cards;
