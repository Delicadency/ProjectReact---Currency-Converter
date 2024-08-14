import "./ButtonBar.css";
import Button from "../Button/Button";

const ButtonBar = () => {
  return (
    <section className="d-flex align-items-center justify-content-center bar">
      <Button currency="USD" />
      <Button currency="EUR" />
      <Button currency="CHF" />
    </section>
  );
};
export default ButtonBar;
