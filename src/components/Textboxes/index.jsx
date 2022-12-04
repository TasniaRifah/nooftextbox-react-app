import React from "react";
import Textbox from "../Textbox";

function Textboxes(props) {
  const {
    checkboxValues,
    setCheckboxValues,
    allChecked,
    setAllChecked,
    isSingleCheckboxChange,
    setIsSingleCheckboxChange,
  } = props;

  return (
    <section className="todos">
      {checkboxValues.map((textbox) => (
        <Textbox
          textbox={textbox}
          checkboxValues={checkboxValues}
          setCheckboxValues={setCheckboxValues}
          allChecked={allChecked}
          setAllChecked={setAllChecked}
          isSingleCheckboxChange={isSingleCheckboxChange}
          setIsSingleCheckboxChange={setIsSingleCheckboxChange}
        />
      ))}
    </section>
  );
}

export default Textboxes;
