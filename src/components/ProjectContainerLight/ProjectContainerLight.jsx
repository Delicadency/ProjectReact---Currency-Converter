import "./ProjectContainerLight.css";
import OutputContainer from "../OutputContainer/OutputContainer";

const ProjectContainerLight = ({ convertedValue }) => {
  return (
    <section className="d-flex justify-content-center align-items-end justify-content-xl-start project__container--light">
      <OutputContainer convertedValue={convertedValue} />
    </section>
  );
};
export default ProjectContainerLight;
