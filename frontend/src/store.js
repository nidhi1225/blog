import { createStore } from "redux";
import  cartReducer  from "./reducer.js";

const store = createStore(cartReducer);

export default store;