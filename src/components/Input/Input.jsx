import "./Input.css";

const Input = ({
  className,
  placeholder,
  id,
  inputMode,
  type,
  inputValue,
  onInputChange,
}) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      id={id}
      inputMode={inputMode}
      type={type}
      value={inputValue}
      onChange={onInputChange}
    />
  );
};
export default Input;
