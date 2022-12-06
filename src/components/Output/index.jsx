import React, { useEffect } from "react";

import "./style.css";

function Output(props) {
  const { checkboxValues, setAllChecked, allChecked } = props;

  const getSum = () => {
    let sum = 0;
    for (const item of checkboxValues) {
      if (item.checkboxValues) {
        sum = sum + parseInt(item.value);
      }
    }
    return sum;
  };
  let id = "";

  const getIds = () => {
    if (!allChecked) {
      let ids = [];
      let text = "";
      for (const item of checkboxValues) {
        if (item.checkboxValues) {
          id = item.id + 1;
          ids.push(id);
        }
      }
      text = ids.join(", ").replace(/,([^,]*)$/, " and$1");
      return text;
    }
  };

  const getCount = () => {
    let count = 0;
    for (const item of checkboxValues) {
      if (item.checkboxValues) {
        count = count + 1;
      }
    }
    return count;
  };

  useEffect(() => {
    if (checkboxValues.length > 0 && checkboxValues.length === getCount()) {
      setAllChecked(true);
    }
  }, [getCount()]);

  const outputSelect = () => {
    if (allChecked) {
      return "Selected All ";
    } else {
      return "Seleted ";
    }
  };
  const outputPosition = () => {
    if (!allChecked) {
        return "position is ";
    } 
  };
  const outputThere = () => {
    if (!allChecked) {
        return ", there ";
    } 
  };
  
  return (
    <div className="outputfield">
      <p>Output is: </p>
      <div className="textarea">
        <p>
          {outputSelect()}
          <span style={{ fontWeight: "bold" }}>{getCount()} items</span>
          {outputThere()}
          <span style={{ fontWeight: "bold" }}>
            {outputPosition()} {getIds()}
          </span>{" "}
          and Total Number is{" "}
          <span style={{ fontWeight: "bold" }}>{getSum()}</span>
        </p>
      </div>
    </div>
  );
}

export default Output;
