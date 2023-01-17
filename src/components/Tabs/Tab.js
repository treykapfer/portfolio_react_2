import React from "react";

function Tab({ active, setActive, name, style }) {
  return (
    <div onClick={() => setActive(name)}>
      {active === name ? <div>{name}</div> : <div>{name}</div>}
    </div>
  );
}

export default Tab;
