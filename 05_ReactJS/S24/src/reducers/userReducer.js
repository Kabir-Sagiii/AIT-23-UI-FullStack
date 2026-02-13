const userReducer = (state = { name: "", city: "" }, action) => {
  //Logic to update the store the data
  if (action.type === "name") {
    state = {
      ...state,
      name: action.payload,
    };
  } else if (action.type === "city") {
    state = {
      ...state,
      city: action.payload,
    };
  }
  return state;
};

export default userReducer;
