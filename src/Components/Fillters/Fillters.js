import { useState } from "react";
import { useDispatch } from "react-redux";
import { seachFilterChange } from "../Selectors/selector";
import { StatusTodo, searchTodo } from "../../redux/actions/Useraction";
const Fillter = () => {
  const [searchname, setsearchname] = useState("");
  const [filterstatus, setfilterstatus] = useState("All");
  const dispatch = useDispatch();
  const handlesearch = (event) => {
    setsearchname(event.target.value);
    dispatch(searchTodo(event.target.value));
  };
  const handleRadioChange = (event) => {
    setfilterstatus(event.target.value);
    dispatch(StatusTodo(event.target.value));
  };

  return (
    <>
      <div>
        {" "}
        <span className=" fw-bold ">Search</span>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={(event) => handlesearch(event)}
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Button
          </button>
        </div>
        <span className=" fw-bold ">Filter By Status</span>
        <div className=" d-flex gap-4 ">
          {" "}
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              value="All"
              onChange={(event) => handleRadioChange(event)}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              All
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              value="Completed"
              onChange={(event) => handleRadioChange(event)}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              Completed
            </label>
          </div>
          <div class="form-check me-2">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              value="Todo"
              onChange={(event) => handleRadioChange(event)}
            />
            <label class="form-check-label" for="flexRadioDefault2">
              ToDo
            </label>
          </div>
        </div>
        <span className=" fw-bold me-2 mt-3 ">Filter By Priority</span>
        <div class="input-group">
          <select
            class="form-select"
            id="inputGroupSelect04"
            aria-label="Example select with button addon"
          >
            <option selected>Choose...</option>
            <option value="1">Hight</option>
            <option value="2">Medium</option>
            <option value="3">Low</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Fillter;
