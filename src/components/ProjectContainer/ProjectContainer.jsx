import "./ProjectContainer.css";
import Header from "../Header/Header";
import ButtonBar from "../ButtonBar/ButtonBar";
import InputSection from "../InputSection/InputSection";

const ProjectContainer = () => {
  return (
    <section className="d-flex container-fluid flex-column align-items-center project__container">
      <Header />
      <ButtonBar />
      <InputSection />
    </section>
  );
};
export default ProjectContainer;
