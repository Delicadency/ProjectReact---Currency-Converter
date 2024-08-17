export const fetchExchangeRate = async (currency) => {
  const apiURL = `https://api.nbp.pl/api/exchangerates/rates/a/${currency}/?format=json`;
  try {
    const response = await fetch(apiURL);
    if (!response.ok) {
      alert("Nie można pobrać kursu dla wybranej waluty.");
    }
    const data = await response.json();
    const rate = data?.rates?.[0]?.mid;
    return rate;
  } catch (error) {
    console.error("Błąd pobierania danych z API: ", error);
    alert("Wystąpił błąd podczas pobierania danych. Spróbuj ponownie później.");
  }
};
