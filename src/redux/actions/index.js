export const dataGet = (value) => {
  return {
    type: "GET_DATA",
    payload: value,
  };
};

export const loadingAction = (value) => {
  return {
    type: "LOADING",
    payload: value,
  };
};

export const queryAction = (value) => {
  return {
    type: "GET_QUERY",
    payload: value,
  };
};

export const paginationAction = (value) => {
  return {
    type: "PAGINATION",
    payload: value,
  };
};
