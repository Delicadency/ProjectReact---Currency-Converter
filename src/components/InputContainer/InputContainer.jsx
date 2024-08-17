import "./InputContainer.css";
import Input from "../Input/Input";

const InputContainer = ({ inputValue, onInputChange }) => {
  return (
    <div className="d-flex align-items-center justify-content-center input__container">
      <Input
        className={"input"}
        placeholder={"Wpisz kwotę"}
        id={"input"}
        inputMode={"numeric"}
        type={"number"}
        inputValue={inputValue}
        onInputChange={onInputChange}
      />
    </div>
  );
};
export default InputContainer;
