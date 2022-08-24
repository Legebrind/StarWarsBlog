import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Data = (props) => {
  const { store } = useContext(Context);

  switch (props.type) {
    case "character":
      return (
        //Podia haber utilizado el item, pero he usado store para practicar.
        <div className="card bg-dark text-warning customHeight w-25 container">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${
              parseInt(props.theid) + 1
            }.jpg`}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{store.character[props.theid].name}</h5>
            <div className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              atque minus in voluptatum sed, deleniti iste ipsum exercitationem
              aliquam vero voluptate vitae dolore? Exercitationem assumenda,
              dolorem nihil aliquam corporis adipisci qui repellendus. Fugiat
              incidunt laborum, necessitatibus cumque odio, atque adipisci
              inventore, recusandae modi tempore eaque minus fugit velit
              consectetur culpa. Quo, atque distinctio. Expedita velit minus
              ipsam ipsum nam, veniam, esse sint autem magnam, aliquam
              perspiciatis. Iure quos error placeat nobis accusamus
              exercitationem dolore, neque asperiores laboriosam rem accusantium
              esse. Beatae, accusamus alias? Incidunt necessitatibus voluptates
              voluptatum quos provident! Iste, quasi sit? Numquam error
              laudantium est beatae porro laborum voluptate iure hic in dolores
              quisquam consectetur, accusantium eaque adipisci dignissimos velit
              pariatur? Placeat! Voluptatem natus excepturi accusamus quo
              consectetur non aspernatur, eligendi veritatis, quia asperiores
              eum architecto, reiciendis sit dolorum? Cumque voluptate velit
              aperiam rem tenetur optio quo ex atque maxime, delectus est?
            </div>
            <Link to={`/`}>
              <span href="#" className="btn btn-warning">
                Back
              </span>
            </Link>
          </div>
        </div>
      );
      break;
    case "planet": {
      return (
        //Podia haber utilizado el item, pero he usado store para practicar.
        <div className="card bg-dark text-warning customHeight w-25 container">
          <img
            src={
              props.theid == 0
                ? "https://starwars-visualguide.com/assets/img/placeholder.jpg"
                : `https://starwars-visualguide.com/assets/img/planets/${
                    parseInt(props.theid) + 1
                  }.jpg`
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{store.planets[props.theid].name}</h5>
            <div className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              atque minus in voluptatum sed, deleniti iste ipsum exercitationem
              aliquam vero voluptate vitae dolore? Exercitationem assumenda,
              dolorem nihil aliquam corporis adipisci qui repellendus. Fugiat
              incidunt laborum, necessitatibus cumque odio, atque adipisci
              inventore, recusandae modi tempore eaque minus fugit velit
              consectetur culpa. Quo, atque distinctio. Expedita velit minus
              ipsam ipsum nam, veniam, esse sint autem magnam, aliquam
              perspiciatis. Iure quos error placeat nobis accusamus
              exercitationem dolore, neque asperiores laboriosam rem accusantium
              esse. Beatae, accusamus alias? Incidunt necessitatibus voluptates
              voluptatum quos provident! Iste, quasi sit? Numquam error
              laudantium est beatae porro laborum voluptate iure hic in dolores
              quisquam consectetur, accusantium eaque adipisci dignissimos velit
              pariatur? Placeat! Voluptatem natus excepturi accusamus quo
              consectetur non aspernatur, eligendi veritatis, quia asperiores
              eum architecto, reiciendis sit dolorum? Cumque voluptate velit
              aperiam rem tenetur optio quo ex atque maxime, delectus est?
            </div>
            <Link to={`/`}>
              <span href="#" className="btn btn-warning">
                Back
              </span>
            </Link>
          </div>
        </div>
      );
      break;
    }
    case "vehicle": {
      return (
        //Podia haber utilizado el item, pero he usado store para practicar.
        <div className="card bg-dark text-warning customHeight w-25 container">
          <img
            src={store.vehiclesurl[props.theid]}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{store.vehicles[props.theid].name}</h5>
            <div className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              atque minus in voluptatum sed, deleniti iste ipsum exercitationem
              aliquam vero voluptate vitae dolore? Exercitationem assumenda,
              dolorem nihil aliquam corporis adipisci qui repellendus. Fugiat
              incidunt laborum, necessitatibus cumque odio, atque adipisci
              inventore, recusandae modi tempore eaque minus fugit velit
              consectetur culpa. Quo, atque distinctio. Expedita velit minus
              ipsam ipsum nam, veniam, esse sint autem magnam, aliquam
              perspiciatis. Iure quos error placeat nobis accusamus
              exercitationem dolore, neque asperiores laboriosam rem accusantium
              esse. Beatae, accusamus alias? Incidunt necessitatibus voluptates
              voluptatum quos provident! Iste, quasi sit? Numquam error
              laudantium est beatae porro laborum voluptate iure hic in dolores
              quisquam consectetur, accusantium eaque adipisci dignissimos velit
              pariatur? Placeat! Voluptatem natus excepturi accusamus quo
              consectetur non aspernatur, eligendi veritatis, quia asperiores
              eum architecto, reiciendis sit dolorum? Cumque voluptate velit
              aperiam rem tenetur optio quo ex atque maxime, delectus est?
            </div>
            <Link to={`/`}>
              <span href="#" className="btn btn-warning">
                Back
              </span>
            </Link>
          </div>
        </div>
      );
      break;
    }
  }
};

export default Data;
