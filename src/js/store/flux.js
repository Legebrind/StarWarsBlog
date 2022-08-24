export const getState = ({ getStore, getActions, setStore }) => {
	let vehiclesIdArray= [4, 6, 7, 8, 14, 16, 18, 19, 20, 24];
	
	return {
	  store: {
		character: [],
		planets:[],
		vehicles:[],
		favoriteList:[],
		vehiclesurl: vehiclesIdArray.map((id)=>("https://starwars-visualguide.com/assets/img/vehicles/"+id+".jpg"))

	  },
	  actions: {
		fetchCharacter: () => {
		  fetch("https://swapi.dev/api/people", {
			method: "GET",
			headers: { "Content-type": "application/json" },
		  })
			.then((response) => response.json())
			.then((response) => setStore({ character: response.results},localStorage.setItem("character",response.results)));
		},
		fetchPlanets: () => {
		  fetch("https://swapi.dev/api/planets",{
			method: "GET",
			headers: {"Content-type": "application/json"},
		  })
			.then((response)=>response.json())
			.then((response)=> setStore({planets: response.results},localStorage.setItem("planets",response.results)));
		},
		fetchVehicles:() => {
		  fetch("https://swapi.dev/api/vehicles", {
			method: "GET",
			headers: {"Content-type": "application/json"},
		  })
			.then((response)=>response.json())
			.then((response)=>setStore({vehicles:response.results},localStorage.setItem("vehicles",response.results)));
		},
		addFavorite:(item)=>{
			const store = getStore();
			setStore({favoriteList:[...store.favoriteList,item]})
		  },
		deleteFavorite:(i)=>{
			const store = getStore();
			const newList = store.favoriteList.filter((item,index)=>index !==i)
			setStore({favoriteList:newList})		
		}
	  },
	};
  };
  export default getState;