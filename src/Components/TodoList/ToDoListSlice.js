const initvalue = {
  todoList: [
    {
      id: 1,
      name: "learn code ",
      completed: false,
      priority: "Medium",
    },
    {
      id: 2,
      name: "learn english ",
      completed: false,
      priority: "Medium",
    },
    {
      id: 3,
      name: "learn java ",
      completed: true,
      priority: "Medium",
    },
    {
      id: 4,
      name: "learn reduxs ",
      completed: false,
      priority: "Medium",
    },
  ],
};

const todoReducer = (state = initvalue, action) => {
  console.log(state, action);
  switch (action.type) {
    case "todoList/addTodo":
      return {
        todoList: [...state.todoList, action.payload],
      };

    default:
      return state;
  }
};

export default todoReducer;
