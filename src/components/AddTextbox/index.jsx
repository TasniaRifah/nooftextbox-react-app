import React, { useState } from "react";
import "./style.css";

function AddTextbox(props) {
  const { checkboxValues, setCheckboxValues } = props;
  const [count, setCount] = useState(0);
  const addTextbox = (event) => {
    event.preventDefault();
    props.onAddTextbox();
    setCount(count + 1);
    setCheckboxValues([
      ...checkboxValues,
      { id: count, checkboxValues: false, value: 0 },
    ]);
  };

  return (
    <div>
      <label>No of Textbox: </label>
      <input type="text" disabled value={count} />
      <br />
      <button onClick={addTextbox} className="addbtn">
        Add Textbox
      </button>
    </div>
  );
}

export default AddTextbox;
