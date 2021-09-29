import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import NavBar from "./Components/NavBar/NavBar";
import Content from "./Components/Content/Content";
import Loader from "./Components/Loader/Loader";
import {
  dataGet,
  loadingAction,
  queryAction,
  paginationAction,
} from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  //Get data from Global State

  const loadingData = useSelector((state) => state.loading.loading);

  //Api call
  const actualCall = (query) => async (dispatch) => {
    try {
      dispatch(loadingAction(true));
      const response = await axios(
        `https://forkify-api.herokuapp.com/api/search?q=${query}`
      );
      dispatch(dataGet(response.data.recipes));
      dispatch(loadingAction(false));
      dispatch(paginationAction(true));
      cleanHandler();
    } catch (error) {
      console.log(error);
    }
  };

  //Content Clear Button

  const contentClear = () => {
    dispatch(paginationAction(false));
    dispatch(dataGet([]));
  };

  //Search field clear func

  const cleanHandler = () => {
    dispatch(queryAction(""));
  };

  return (
    <>
      <NavBar actualCall={actualCall} contentClear={contentClear} />
      {loadingData && <Loader />}
      <Content />
    </>
  );
}

export default App;
