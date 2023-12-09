import { createSelector } from "reselect";

export const todoListselector = (state) => state.todoList.todoList;
export const filterStatus = (state) =>
  state.filter && state.filter.status !== undefined
    ? state.filter.status
    : "All";

export const seachFilterChange = (state) => state.filters.search;

export const todoRemainingSelector = createSelector(
  todoListselector,
  seachFilterChange,
  filterStatus,
  (todolist, searchText, status) => {
    if (!searchText || searchText.trim() === "") {
      return todolist;
    } else {
      const searchLowerCase = searchText.toLowerCase().trim();
      return todolist.filter((todo) => {
        return (
          todo.name.toLowerCase().includes(searchLowerCase) &&
          (status === "Completed" ? todo.completed : !todo.completed)
        );
      });
    }
  }
);
