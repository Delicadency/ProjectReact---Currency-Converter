import "./InputSection.css";
import InputContainer from "../InputContainer/InputContainer";
import CountContainer from "../CountContainer/CountContainer";

const InputSection = () => {
  return (
    <section className="section__container d-flex flex-column flex-xl-row align-items-center justify-content-xl-between align-items-xl-center">
      <InputContainer />
      <CountContainer />
    </section>
  );
};
export default InputSection;
