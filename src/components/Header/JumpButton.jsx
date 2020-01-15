import React from "react";
import FontAwesome from "react-fontawesome";

function JumpButton({ direction, onClick }) {
  let icon = direction === "forward" ? "angle-right" : "angle-left";
  let buttonClass =
    direction === "forward" ? "jump-button-next" : "jump-button-back";
  function handlerClick(e) {
    e.preventDefault();
    onClick();
  }

  return (
    <button className={`nav-button + ${buttonClass}`} onClick={handlerClick}>
      <FontAwesome name={icon}  />
      <FontAwesome name={icon}  />
    </button>
  );
}

export default JumpButton;
