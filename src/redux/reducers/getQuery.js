const initialState = {
  query: "",
};

const getQuery = (state = initialState, action) => {
  switch (action.type) {
    case "GET_QUERY":
      return {
        query: action.payload,
      };
    default:
      return state;
  }
};

export default getQuery;
