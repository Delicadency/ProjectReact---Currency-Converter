import "./InputForm.css";
import InputContainer from "../InputContainer/InputContainer";
import CountContainer from "../CountContainer/CountContainer";

const InputForm = ({ onConvert }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const amount = event.target.elements.amount.value; // zakładam, że input ma name="amount"
    onConvert(amount);
  };

  return (
    <form onSubmit={handleSubmit}  className="section__container d-flex flex-column flex-xl-row align-items-center justify-content-xl-between align-items-xl-center">
      <InputContainer  />
      <CountContainer onConvert={onConvert} />
    </form>
  );
};
export default InputForm;