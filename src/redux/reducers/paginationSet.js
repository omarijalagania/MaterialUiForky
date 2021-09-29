const initialState = {
  showPagination: false,
};

const paginationSet = (state = initialState, action) => {
  switch (action.type) {
    case "PAGINATION":
      return {
        showPagination: action.payload,
      };
    default:
      return state;
  }
};

export default paginationSet;
