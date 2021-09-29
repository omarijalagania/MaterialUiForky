const initialState = {
  result: [],
  loading: false,
};

const getData = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};

export default getData;
