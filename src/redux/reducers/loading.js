const initialState = {
  loading: false,
};

const loading = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default loading;
