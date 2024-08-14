import "./Input.css";

const Input = ({ className, placeholder, id, inputMode, type }) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      id={id}
      inputMode={inputMode}
      type={type}
    />
  );
};
export default Input;
