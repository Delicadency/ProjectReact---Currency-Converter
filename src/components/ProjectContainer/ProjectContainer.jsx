import "./ProjectContainer.css";
import Header from "../Header/Header";
import ButtonBar from "../ButtonBar/ButtonBar";
import InputForm from "../InputForm/InputForm";

const ProjectContainer = ({
  activeCurrency,
  onButtonClick,
  onConvert,
}) => {
  return (
    <section className="d-flex container-fluid flex-column align-items-center project__container">
      <Header />
      <ButtonBar
        activeCurrency={activeCurrency}
        onButtonClick={onButtonClick}
      />
      <InputForm
        onConvert={onConvert}
      />
    </section>
  );
};

export default ProjectContainer;
