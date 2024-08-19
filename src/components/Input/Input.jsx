import "./Input.css";

const Input = ({
  className,
  placeholder,
  id,
  inputMode,
  type,
  name
}) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      id={id}
      inputMode={inputMode}
      type={type}
      name={name}
    />
  );
};
export default Input;
