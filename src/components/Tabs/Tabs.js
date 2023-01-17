import React from "react";
import Tab from "./Tab";

function Tabs({ tabNames, active, setActive }) {
  return (
    <div>
      {tabNames.map((name) => (
        <Tab
          key={name}
          active={active === name}
          setActive={setActive}
          name={name}
        />
      ))}
    </div>
  );
}

export default Tabs;
