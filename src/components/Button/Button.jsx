import "./Button.css";

const Button = ({ currency, isActive, onClick }) => {
  return (
    <button
      className={`d-flex align-items-center justify-content-center bar__button ${
        isActive ? "bar__button--active" : ""
      }`}
      onClick={onClick}
    >
      {currency}
    </button>
  );
};

export default Button;
