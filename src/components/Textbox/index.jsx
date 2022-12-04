import React, { useEffect, useState } from "react";

function Textbox(props) {
  const {
    checkboxValues,
    setCheckboxValues,
    textbox,
    allChecked,
    setAllChecked,
    isSingleCheckboxChange,
    setIsSingleCheckboxChange,
  } = props;
  const [checkStatus, setCheckStatus] = useState(false);

  useEffect(() => {
    if (isSingleCheckboxChange) {
      const CheckItems = checkboxValues.map((item) => {
        return item.id === textbox.id
          ? { ...item, checkboxValues: checkStatus }
          : item;
      });

      setCheckboxValues(CheckItems);
    } else {
      setCheckStatus(allChecked);
      const CheckItems = checkboxValues.map((item) => {
        return { ...item, checkboxValues: allChecked };
      });

      setCheckboxValues(CheckItems);
    }
    setIsSingleCheckboxChange(false);
  }, [allChecked]);

  const handleCheckStatus = (e) => {
    setCheckStatus(e.target.checked);
    setAllChecked(false);
    setIsSingleCheckboxChange(true);

    let CheckItems = checkboxValues.map((item) => {
      return item.id === textbox.id
        ? { ...item, checkboxValues: e.target.checked }
        : item;
    });

    setCheckboxValues(CheckItems);
  };

  const handleInputValue = (e) => {
    const inputValues = checkboxValues.map((item) => {
      return item.id === textbox.id ? { ...item, value: e.target.value } : item;
    });
    setCheckboxValues(inputValues);
  };

  useEffect(() => {
    if (allChecked === true) {
      setCheckStatus(allChecked);
      setIsSingleCheckboxChange(true);
    }
  }, [allChecked, isSingleCheckboxChange]);

  return (
    <div>
      <input
        type="checkbox"
        onChange={handleCheckStatus}
        checked={checkStatus}
      />
      <input type="number" onChange={handleInputValue} />
    </div>
  );
}

export default Textbox;
