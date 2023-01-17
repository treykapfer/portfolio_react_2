import React, { useState } from "react";
import Tab from "./Tab";

function useTabs({ tabNames, initialTab }) {
  const [active, setActive] = useState(initialTab || tabNames[0]);

  const Tabs = () => {
    <div>
      {tabNames.map((name) => (
        <Tab
          key={name}
          active={active === name}
          setActive={setActive}
          name={name}
        />
      ))}
    </div>;
  };

  return { active, setActive, Tabs };
}

export default useTabs;
