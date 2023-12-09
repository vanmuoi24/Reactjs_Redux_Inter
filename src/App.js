import logo from "./logo.svg";
import "./App.css";
import Fillter from "./Components/Fillters/Fillters";
import TodoList from "./Components/TodoList/Todolist";

function App() {
  return (
    <>
      {" "}
      <div
        style={{
          width: 500,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          padding: 20,
          boxShadow: "0 0 10px 4px #bfbfbf",
          borderRadius: 5,
          height: "90vh",
        }}
      >
        <h2 style={{ textAlign: "center" }}>TODO APP with REDUX</h2>
        <Fillter></Fillter>
        <hr />
        <TodoList />
      </div>
    </>
  );
}

export default App;
