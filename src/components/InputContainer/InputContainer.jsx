import "./InputContainer.css";
import Input from "../Input/Input";

const InputContainer = () => {
  return (
    <div className="d-flex align-items-center justify-content-center input__container">
      <Input
        className={"input"}
        placeholder={"Wpisz kwotę"}
        id={"input"}
        inputMode={"numeric"}
        type={"number"}
        name={"amount"}
      />
    </div>
  );
};
export default InputContainer;
