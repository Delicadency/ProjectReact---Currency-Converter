import "./Main.css";
import ProjectContainerLight from "../ProjectContainerLight/ProjectContainerLight";
import SpinnerContainer from "../SpinnerContainer/SpinnerContainer";

const Main = () => {
  return (
    <main className="d-flex justify-content-center main__container">
      <ProjectContainerLight />
      <SpinnerContainer />
    </main>
  );
};
export default Main;
