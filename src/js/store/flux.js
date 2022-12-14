export const getState = ({ getStore, getActions, setStore }) => {
  let vehiclesIdArray = [4, 6, 7, 8, 14, 16, 18, 19, 20, 24];

  return {
    store: {
      character: [],
      planets: [],
      vehicles: [],
      favoriteList: [],
      vehiclesurl: vehiclesIdArray.map(
        (id) =>
          "https://starwars-visualguide.com/assets/img/vehicles/" + id + ".jpg"
      ),
    },
    actions: {
      fetchCharacter: (localIsFilled) => {
        fetch("https://swapi.dev/api/people", {
          method: "GET",
          headers: { "Content-type": "application/json" },
        })
          .then((response) => response.json())
          .then((response) =>
            localIsFilled ?
            setStore(
              { character:JSON.parse(localStorage.getItem("character"))})
            :
            setStore(
              { character: response.results }    
            ).addToLocal("vehicles",response.results)
          );
      },
      fetchPlanets: (localIsFilled) => {
        fetch("https://swapi.dev/api/planets", {
          method: "GET",
          headers: { "Content-type": "application/json" },
        })
          .then((response) => response.json())
          .then((response) =>
          localIsFilled ?
          setStore(
            { planets:JSON.parse(localStorage.getItem("planets"))})
          :
          setStore(
            { planets: response.results }
          ).addToLocal("vehicles",response.results)
        );
      },
      fetchVehicles: (localIsFilled) => {
        fetch("https://swapi.dev/api/vehicles", {
          method: "GET",
          headers: { "Content-type": "application/json" },
        })
          .then((response) => response.json())
          .then((response) =>
          localIsFilled ?
          setStore(
            { vehicles:JSON.parse(localStorage.getItem("vehicles"))})
          :
          setStore(
            { vehicles: response.results }
          ).addToLocal("vehicles",response.results)
        );
      },
      addFavorite: (item) => {
        const store = getStore();
        setStore({ favoriteList: [...store.favoriteList, item] });
      },
      deleteFavorite: (i) => {
        const store = getStore();
        const newList = store.favoriteList.filter((item, index) => index !== i);
        setStore({ favoriteList: newList });
      },
      addToLocal:(key,value) =>{
        localStorage.setItem(key, JSON.stringify(value));
        
      }
    },
  };
};
export default getState;
