import { useReducer } from "react";

const Button = ({ text, classId, onClick }) => {
  return (
    <button className={classId} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
