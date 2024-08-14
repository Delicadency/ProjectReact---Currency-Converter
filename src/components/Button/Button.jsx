import "./Button.css";
import ButtonParagraph from "../ButtonParagraph/ButtonParagraph";

const Button = ({ currency }) => {
  return (
    <div className="d-flex align-items-center justify-content-center bar__button">
      <ButtonParagraph currency={currency} />
    </div>
  );
};
export default Button;
