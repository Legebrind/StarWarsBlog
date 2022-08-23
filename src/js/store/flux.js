export const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		character: [],
		planets:[],
		vehicles:[],
		favoriteList:[],

	  },
	  actions: {
		fetchCharacter: () => {
		  fetch("https://swapi.dev/api/people", {
			method: "GET",
			headers: { "Content-type": "application/json" },
		  })
			.then((response) => response.json())
			.then((response) => setStore({ character: response.results }));
		},
		fetchPlanets: () => {
		  fetch("https://swapi.dev/api/planets",{
			method: "GET",
			headers: {"Content-type": "application/json"},
		  })
			.then((response)=>response.json())
			.then((response)=> setStore({planets: response.results}))
		},
		fetchVehicles:() => {
		  fetch("https://swapi.dev/api/vehicles", {
			method: "GET",
			headers: {"Content-type": "application/json"},
		  })
			.then((response)=>response.json())
			.then((response)=>setStore({vehicles:response.results}))
		},
	  },
	};
  };
  export default getState;