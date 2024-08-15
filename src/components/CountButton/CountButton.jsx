import "./CountButton.css";

const CountButton = ({ className, type, text }) => {
  return (
    <button className={className} type={type}>
      {text}
    </button>
  );
};
export default CountButton;
