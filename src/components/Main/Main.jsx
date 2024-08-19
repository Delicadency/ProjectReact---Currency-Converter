import { useState } from "react";
import "./Main.css";
import ProjectContainerLight from "../ProjectContainerLight/ProjectContainerLight";
import SpinnerContainer from "../SpinnerContainer/SpinnerContainer";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import { fetchExchangeRate } from "../../services/fetchExchangeRate";

const Main = () => {
  const [activeCurrency, setActiveCurrency] = useState("USD");
  const [convertedValue, setConvertedValue] = useState("0,00");
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = (currency) => {
    setActiveCurrency(currency);
    setConvertedValue("0,00");
  };

  const handleConversion = async (amount) => {
    const parsedAmount = parseFloat(amount);
    if (!activeCurrency || isNaN(parsedAmount) || parsedAmount <= 0.009) {
      alert("Wybierz walutę i wprowadź poprawną kwotę.");
      return;
    }

    setIsLoading(true);
    try {
      const rate = await fetchExchangeRate(activeCurrency);
      if (rate) {
        const result = (rate * amount).toFixed(2).replace(".", ",");
        setConvertedValue(result);
      } else {
        alert("Nie można pobrać kursu dla wybranej waluty.");
      }
    } catch (error) {
      alert(
        "Wystąpił błąd podczas pobierania danych. Spróbuj ponownie później."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="d-flex justify-content-center main__container">
      <ProjectContainerLight convertedValue={convertedValue} />
      <SpinnerContainer isLoading={isLoading} />
      <ProjectContainer
        activeCurrency={activeCurrency}
        onButtonClick={handleButtonClick}
        onConvert={handleConversion}
      />
    </main>
  );
};

export default Main;
