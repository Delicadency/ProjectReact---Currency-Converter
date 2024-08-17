import "./CountContainer.css";
import CountButton from "../CountButton/CountButton";

const CountContainer = ({ onConvert }) => {
  return (
    <section className="count__container d-flex align-items-center justify-content-center">
      <CountButton
        className={"count__button"}
        type={"button"}
        text={"PRZELICZ"}
        onConvert={onConvert}
      />
    </section>
  );
};
export default CountContainer;
