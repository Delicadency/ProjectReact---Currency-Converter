import "./ButtonParagraph.css";

const ButtonParagraph = ({ currency }) => {
  return (
    <p className="bar__button-paragraph" id={currency}>
      {currency}
    </p>
  );
};
export default ButtonParagraph;
