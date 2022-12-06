import React from "react";


import "./style.css";

function AllCheckcoxes(props) {
  const { setAllChecked, allChecked } = props;

  return (
    <div className="container">
      <input
        type="checkbox"
        onClick={(e) => setAllChecked(e.target.checked)}
        checked={allChecked}
      />
      <button type="text" disabled className="allcheck">
        All Check
      </button>
    </div>
  );
}

export default AllCheckcoxes;
