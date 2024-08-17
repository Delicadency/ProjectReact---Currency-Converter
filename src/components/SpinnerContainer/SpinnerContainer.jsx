import "./SpinnerContainer.css";

const SpinnerContainer = ({ isLoading }) => {
  return (
    <section
      id="spinnerContainer"
      className={`${
        isLoading
          ? "d-flex justify-content-center align-items-center project-body__container--spinner"
          : ""
      }`}
    >
      {isLoading && (
        <div className="spinner-border spinner text-light" role="status"></div>
      )}
    </section>
  );
};
export default SpinnerContainer;
