import React, { useState } from "react";
import AddTextbox from "../AddTextbox";
import AllCheckcoxes from "../AllCheckboxes";
import Output from "../Output";
import Textboxes from "../Textboxes";


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
      <Output  checkboxValues={checkboxValues} setAllChecked={setAllChecked} allChecked={allChecked}/>
    </div>
  );
}

export default Home;
