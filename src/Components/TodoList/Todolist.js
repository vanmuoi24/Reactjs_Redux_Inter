import Todo from "../Todo/Todo";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions/Useraction";
import { v4 as uuid } from "uuid";
import { todoRemainingSelector } from "../Selectors/selector";
const TodoList = () => {
  const [todoname, settodoname] = useState();
  const [priority, setpriority] = useState("Hight");
  const todoList = useSelector(todoRemainingSelector);

  const dispath = useDispatch();
  const handleserach = () => {
    dispath(
      addTodo({
        id: uuid(),
        name: todoname,
        priority: priority,
        completed: false,
      })
    );
    settodoname("");
    setpriority("");
  };
  return (
    <>
      <div className="form-check">
        <div
          className="container"
          style={{ height: "calc(100vh - 40px)", overflowY: "auto" }}
        >
          <div className="row">
            {todoList.map((item, index) => (
              <div className="col-12" key={index}>
                <Todo
                  name={item.name}
                  priority={item.priority}
                  completed={item.completed}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="input-group mb-3 ">
        <div className="col-7">
          {" "}
          <input
            type="text"
            className="form-control"
            value={todoname}
            aria-label="Text input with dropdown button"
            onChange={(event) => settodoname(event.target.value)}
          />
        </div>

        <div className="col-2">
          <select
            className="form-select"
            value={priority}
            onChange={(event) => setpriority(event.target.value)}
          >
            <option value="Medium">Medium</option>
            <option value="Hight">Hight</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div className="col">
          {" "}
          <button
            onClick={(event) => handleserach()}
            className="btn btn-outline-success"
          >
            Tim Kiem
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoList;
