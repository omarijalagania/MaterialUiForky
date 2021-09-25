import React, { useState } from "react";
import axios from "axios";
import NavBar from "./Components/NavBar/NavBar";
import Content from "./Components/Content/Content";
import Loader from "./Components/Loader/Loader";

function App() {
  //----state-----

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPagination, setShowPagination] = useState(false);

  //Api call

  const actualCall = async () => {
    try {
      setLoading(true);

      const result = await axios(`${process.env.REACT_APP_API_URL}${query}`);
      setData(result.data.recipes);
      setLoading(false);
      setShowPagination(true);
      cleanHandler();
    } catch (error) {
      console.log(error);
    }
  };

  //Content Clear Button

  const contentClear = () => {
    setData([]);
    setShowPagination(false);
  };

  //Search field clear func

  const cleanHandler = () => {
    setQuery("");
  };

  return (
    <>
      <NavBar
        actualCall={actualCall}
        setQuery={setQuery}
        query={query}
        contentClear={contentClear}
      />
      {loading && <Loader />}
      <Content data={data} showPagination={showPagination} />
    </>
  );
}

export default App;
