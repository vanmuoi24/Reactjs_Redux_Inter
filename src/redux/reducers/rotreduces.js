import filterReducer from "../../Components/Fillters/filterSlice";
import todoReducer from "../../Components/TodoList/ToDoListSlice";

const rootReducer = (state = {}, action) => {
  return {
    filters: filterReducer(state.filters, action),
    todoList: todoReducer(state.todoList, action),
  };
};

export default rootReducer;
