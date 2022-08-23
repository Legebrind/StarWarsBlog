import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";

const CardCharacters = (props) => {
  const { store, actions } = useContext(Context);

  const sendName = () => {
    let nameItem = props.data.name;
    actions.addFavorite(nameItem);
  };

  const sendUrl = () => {
    let url = props.data.url;
    actions.fetchSingleCharacter(url);
  };

  return (
    //Podia haber utilizado el item, pero he usado store para practicar.
    <div className="card remwidth">
      <img src={'https://starwars-visualguide.com/assets/img/characters/'+props.contador+'.jpg'} className="card-img-top" alt="..." />
      <div className="card-body">
        {console.log(store)}
        <h5 className="card-title">{store.character[props.index].name}</h5>
        <div className="card-text">
          <p>Gender: {store.character[props.index].gender}</p>
          <p>Hair Color: {store.character[props.index].hair_color}</p>
          <p>Eye Color: {store.character[props.index].eye_color}</p>           
        </div>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default CardCharacters;
