import "./InputSection.css";
import InputContainer from "../InputContainer/InputContainer";
import CountContainer from "../CountContainer/CountContainer";

const InputSection = ({ inputValue, onInputChange, onConvert }) => {
  return (
    <section className="section__container d-flex flex-column flex-xl-row align-items-center justify-content-xl-between align-items-xl-center">
      <InputContainer inputValue={inputValue} onInputChange={onInputChange} />
      <CountContainer onConvert={onConvert} />
    </section>
  );
};
export default InputSection;
