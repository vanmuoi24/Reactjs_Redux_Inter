const initvalue = {
  filters: {
    search: "",
    status: "All",
    priority: [],
  },
};

const filterReducer = (state = initvalue, action) => {
  console.log(action);
  switch (action.type) {
    case "todoList/searchtodo":
      return {
        ...state,
        search: action.payload,
      };

    case "todoList/statustodo":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
