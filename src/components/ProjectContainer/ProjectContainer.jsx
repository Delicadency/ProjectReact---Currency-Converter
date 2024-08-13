import "./ProjectContainer.css";
import Header from "../Header/Header";
import ButtonBar from "../ButtonBar/ButtonBar";

const ProjectContainer = () => {
  return (
    <section className="d-flex container-fluid flex-column align-items-center project__container">
      <Header />
      <ButtonBar />
    </section>
  );
};
export default ProjectContainer;
