import "./Main.css";
import ProjectContainerLight from "../ProjectContainerLight/ProjectContainerLight";
import SpinnerContainer from "../SpinnerContainer/SpinnerContainer";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
const Main = () => {
  return (
    <main className="d-flex justify-content-center main__container">
      <ProjectContainerLight />
      <SpinnerContainer />
      <ProjectContainer />
    </main>
  );
};
export default Main;
