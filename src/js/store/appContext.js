import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Don't change, here is where we initialize our context, by default it's just going to be null.
export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, we will inject the context to layout.js, you can see it here:
// https://github.com/4GeeksAcademy/react-hello-webapp/blob/master/src/js/layout.js#L35
const injectContext = (PassedComponent) => {
  
  
  const StoreWrapper = (props) => {
    //this will be passed as the contenxt value
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updatedStore) =>
          setState({
            store: Object.assign(state.store, updatedStore),
            actions: { ...state.actions },
          }),
      })
    );

    useEffect(() => {
      let localIsFilled = false;
      localStorage.getItem("character") || localStorage.getItem("planets") || localStorage.getItem("vehicles") ?
      localIsFilled = true : null;
      state.actions.fetchCharacter(localIsFilled);
      state.actions.fetchPlanets(localIsFilled);
      state.actions.fetchVehicles(localIsFilled);

      /* if (localStorage.getItem("character")) {
        setState( {store.character: JSON.parse(localStorage.getItem("character"))} );
        localIsFilled = true;
        state.actions.fetchCharacter(localIsFilled)
        console.log("Estoy en la memoria local1");
      } else {
        state.actions.fetchCharacter();
      }
      if (sessionStorage.getItem("planets")) {
        state.setStore({ planets: JSON.parse(localStorage.getItem("planets")) });
      } else {
        state.actions.fetchPlanets();
      }
      if (sessionStorage.getItem("vehicles")) {
        state.setStore({ vehicles: JSON.parse(localStorage.getItem("vehicles")) });
      } else {
        state.actions.fetchVehicles();
      } */
    }, []);

    // The initial value for the context is not null anymore, but the current state of this component,
    // the context will now have a getStore, getActions and setStore functions available, because they were declared
    // on the state of this component
    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };
  return StoreWrapper;
};

export default injectContext;
