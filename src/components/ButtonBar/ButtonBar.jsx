import "./ButtonBar.css";
import Button from "../Button/Button";

const ButtonBar = ({ activeCurrency, onButtonClick }) => {
  return (
    <section className="d-flex align-items-center justify-content-center bar">
      <Button
        currency="USD"
        isActive={activeCurrency === "USD"}
        onClick={() => onButtonClick("USD")}
      />
      <Button
        currency="EUR"
        isActive={activeCurrency === "EUR"}
        onClick={() => onButtonClick("EUR")}
      />
      <Button
        currency="CHF"
        isActive={activeCurrency === "CHF"}
        onClick={() => onButtonClick("CHF")}
      />
    </section>
  );
};

export default ButtonBar;
