import "./ButtonBar.css";
import Button from "../Button/Button";
import { useState } from "react";

const ButtonBar = () => {
  const [activeButton, setActiveButton] = useState("USD");

  const handleButtonClick = (currency) => {
    setActiveButton(currency);
  };
  return (
    <section className="d-flex align-items-center justify-content-center bar">
      <Button
        currency="USD"
        isActive={activeButton === "USD"}
        onClick={handleButtonClick}
      />
      <Button
        currency="EUR"
        isActive={activeButton === "EUR"}
        onClick={handleButtonClick}
      />
      <Button
        currency="CHF"
        isActive={activeButton === "CHF"}
        onClick={handleButtonClick}
      />
    </section>
  );
};
export default ButtonBar;
