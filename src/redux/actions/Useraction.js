export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const searchTodo = (text) => {
  return {
    type: "todoList/searchtodo",
    payload: text,
  };
};
export const StatusTodo = (text) => {
  return {
    type: "todoList/statustodo",
    payload: text,
  };
};
