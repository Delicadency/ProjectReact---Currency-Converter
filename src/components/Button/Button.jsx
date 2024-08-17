import "./Button.css";

const Button = ({ currency, isActive, onClick }) => {
  const handleClick = () => {
    onClick(currency);
  };
  return (
    <button
      className={`d-flex align-items-center justify-content-center bar__button ${
        isActive ? "bar__button--active" : ""
      }`}
      onClick={handleClick}
    >
      {currency}
    </button>
  );
};
export default Button;
