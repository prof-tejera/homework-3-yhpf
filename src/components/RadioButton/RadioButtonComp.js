import "./RadioButtonComp.css";

const RadioButtonComp = ({active, text, ...btnProps}) => {
  return (
    <button
      // if active is true className = ".Default-button-active" otherwise "Default-button"
      className={active ? ".Default-button-active" : "Default-button"}
      {...btnProps}
    >
      {text}
    </button>
  );
};

export default RadioButtonComp;