import { useState } from "react";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ name, priority, completed }) {
  const [checked, setChecked] = useState(completed);
  console.log("check ", completed);
  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <div
      className="row justify-content-between"
      style={{ marginBottom: "3px" }}
    >
      <div className="col-9">
        <div
          className="form-check"
          style={{
            textDecoration: checked ? "line-through" : "none",
            opacity: checked ? "0.5" : "1",
          }}
        >
          <input
            className="form-check-input"
            type="checkbox"
            checked={checked}
            onChange={toggleCheckbox}
          />
          <label className="form-check-label">{name}</label>
        </div>
      </div>
      <div className="col-3">
        <span
          className="badge bg-"
          style={{ backgroundColor: priorityColorMapping[priority] }}
        >
          {priority}
        </span>
      </div>
    </div>
  );
}
