import { combineReducers } from "redux";
import getData from "./getData";
import loading from "./loading";
import getQuery from "./getQuery";
import paginationSet from "./paginationSet";

const rootReducer = combineReducers({
  getData,
  loading,
  getQuery,
  paginationSet,
});

export default rootReducer;
