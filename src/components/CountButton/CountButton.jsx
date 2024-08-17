import "./CountButton.css";

const CountButton = ({ className, type, text, onConvert }) => {
  return (
    <button className={className} type={type} onClick={onConvert}>
      {text}
    </button>
  );
};

export default CountButton;
