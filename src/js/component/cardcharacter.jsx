import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const CardCharacters = (props) => {
  const { store, actions } = useContext(Context);



  return (
    //Podia haber utilizado el item, pero he usado store para practicar.
    <div className="card remwidth bg-dark text-warning">
      <img src={'https://starwars-visualguide.com/assets/img/characters/'+props.contador+'.jpg'} className="card-img-top" alt="..." />
      <div className="card-body">
      
        <h5 className="card-title">{store.character[props.index].name}</h5>
        <div className="card-text">
          <div>Gender: {store.character[props.index].gender}</div>
          <div>Hair Color: {store.character[props.index].hair_color}</div>
          <div>Eye Color: {store.character[props.index].eye_color}</div>           
        </div>        
        <Link to={`/viewdatacharacter/${props.index}`}>
          <span href="#" className="btn btn-warning">
            Learn more!
          </span>
			</Link>
      </div>
    </div>
  );
};

export default CardCharacters;
