import "./ProjectContainer.css";
import Header from "../Header/Header";
import ButtonBar from "../ButtonBar/ButtonBar";
import InputSection from "../InputSection/InputSection";

const ProjectContainer = ({
  activeCurrency,
  onButtonClick,
  inputValue,
  onInputChange,
  onConvert,
}) => {
  return (
    <section className="d-flex container-fluid flex-column align-items-center project__container">
      <Header />
      <ButtonBar
        activeCurrency={activeCurrency}
        onButtonClick={onButtonClick}
      />
      <InputSection
        inputValue={inputValue}
        onInputChange={onInputChange}
        onConvert={onConvert}
      />
    </section>
  );
};

export default ProjectContainer;
