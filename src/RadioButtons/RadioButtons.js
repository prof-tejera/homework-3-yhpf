import { useState } from "react";
import Panel from "components/Panel/Panel";
import Button from "components/RadioButton/RadioButtonComp";
import "./RadioButtons.css";

const RadioButtons = () => {
  const [activeType, setActiveType] = useState(null);

  const handleClick = (type) => {
    if (type === activeType) {
      setActiveType(null);
    } else {
      setActiveType(type);
    } 
  };

  console.log(activeType);

  return (
    <Panel>
      <Button
        active={activeType === "apple"}
        onClick={() => handleClick("apple")}
        text="Apple"
      />
      <Button
        active={activeType === "pear"}
        onClick={() => handleClick("pear")}
        text="Pear"
      />
      <Button
        className = "inactive-button"
        text="Orange"
      />
    </Panel>
  );
};

export default RadioButtons;
