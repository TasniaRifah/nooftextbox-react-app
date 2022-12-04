import React, { useState } from "react";
import { useEffect } from "react";
import AddTextbox from "../AddTextbox";
import AllCheckcoxes from "../AllCheckboxes";
import Textboxes from "../Textboxes";
import "./style.css";

function Home() {
  const [allChecked, setAllChecked] = useState(false);
  const [textboxes, setTextboxes] = useState([]);
  const [checkboxValues, setCheckboxValues] = useState([]);
  const [isSingleCheckboxChange, setIsSingleCheckboxChange] = useState(false);

  const handelAddTextbox = (textbox) => {
    setTextboxes((prevTextboxes) => {
      return [...prevTextboxes, { textbox }];
    });
  };

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

  return (
    <div>
      <AddTextbox
        onAddTextbox={handelAddTextbox}
        checkboxValues={checkboxValues}
        setCheckboxValues={setCheckboxValues}
      />
      <AllCheckcoxes
        setAllChecked={setAllChecked}
        allChecked={allChecked}
        checkboxValues={checkboxValues}
        setIsSingleCheckboxChange={setIsSingleCheckboxChange}
      />
      <Textboxes
        textboxes={textboxes}
        checkboxValues={checkboxValues}
        setCheckboxValues={setCheckboxValues}
        allChecked={allChecked}
        setAllChecked={setAllChecked}
        isSingleCheckboxChange={isSingleCheckboxChange}
        setIsSingleCheckboxChange={setIsSingleCheckboxChange}
      />
      <div className="outputfield">
        <p>Output is: </p>
        <div className="textarea">
          <p>
            Selected{" "}
            <span style={{ fontWeight: "bold" }}>{getCount()} items</span>,
            there{" "}
            <span style={{ fontWeight: "bold" }}>position is {getIds()}</span>{" "}
            and Total Number is <span style={{ fontWeight: "bold" }}>{getSum()}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
