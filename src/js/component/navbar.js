import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light mb-5">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><img className="iconBrand bg-warning" type="icon" src="https://icon-library.com/images/star-wars-icon-png/star-wars-icon-png-8.jpg"/></span>
			</Link>
			<div className="ml-auto me-5">
			<div class="dropdown">
				<button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
					Favorite List
				</button>
				<ul class="dropdown-menu bg-warning" aria-labelledby="dropdownMenuButton1">
					{store.favoriteList.map((item,i)=>
						<li className="d-flex"><a className="dropdown-item" href="#">{item}</a><i className="fa-solid fa-x" onClick={()=>{actions.deleteFavorite(i)}}></i></li>
					)}
					
				</ul>
</div>
			</div>
		</nav>
	);
};
