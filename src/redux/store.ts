//Dependencias
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//Reducer
import reducer from "./redux";
//API servide
import {IInitialState} from "~/interfaces/stateRedux"


//TODO:Obtiene el store almacenado en localstorage
export const loadState = ():IInitialState => {
  try {
    let serializedState = localStorage.getItem("ecommerce-xcaret");
    if (serializedState === null) {
      return undefined;
    }    
    let algo:IInitialState = serializedState = JSON.parse(serializedState);
    return algo;
  } catch (err) {    
    return undefined;
  }
};

const persistedState = loadState();
const store = createStore(
  reducer, //Se agrega el reducer
  persistedState, //Guarda el state actual
  applyMiddleware(thunk) //aplica el Middleware para comunicarse con la API
);

// TODO: Actualiza el arreglo almacenado en localstorage
const saveState = state => {
  try {
    let serializedState = JSON.stringify(state);
    
    localStorage.setItem("ecommerce-xcaret", serializedState);
    localStorage.setItem("ecommerce-xcaret_version", "1.0.0");
  } catch (err) {
    
  }
};


store.subscribe(() => {
  saveState(store.getState());
});

export default store;