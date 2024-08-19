import "./CountContainer.css";
import CountButton from "../CountButton/CountButton";

const CountContainer = () => {
  return (
    <section className="count__container d-flex align-items-center justify-content-center">
      <CountButton
        className={"count__button"}
        type={"submit"}
        text={"PRZELICZ"}
      />
    </section>
  );
};
export default CountContainer;
