import "./OutputContainer.css";
import OutputParagraph from "../OutputParagraph/OutputParagraph";

const OutputContainer = ({ convertedValue }) => {
  return (
    <section className="d-flex justify-content-center align-items-center justify-content-xl-start output__container">
      <OutputParagraph
        className="output__paragraph--value"
        text={convertedValue}
      />
      <OutputParagraph className="output__paragraph--currency" text="PLN" />
    </section>
  );
};
export default OutputContainer;
