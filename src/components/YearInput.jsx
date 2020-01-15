import React from "react";

function YearInput({ value, openPanel, selected, clear, placeholder }) {
  const selectedClass = selected ? "imput-wrapper-selected" : "";

  function clearHandler(e) {
    clear();
  }

  return (
    <div className={`input-wrapper ${selectedClass}`}>
      <input
        className="year-input"
        value={value}
        onClick={openPanel}
        placeholder={placeholder}
        readOnly
      />      
      <i
        name="calendar"
        className="input-icon input-icon-close fa fa-times"
        onClick={clearHandler}
      />
    </div>
  );
}

export default YearInput;
