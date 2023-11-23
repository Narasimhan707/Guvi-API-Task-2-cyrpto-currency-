// Function to fetch currency data
function fetchCurrencyData() {
  return new Promise((resolve, reject) => {
    fetch("https://api.coincap.io/v2/rates")
      .then((response) => response.json())
      .then((data) => resolve(data.data))
      .catch((error) => reject(error));
  });
}

// Function to render currency data on the webpage
function renderCurrencyData(currencies) {
  const currencyList = document.getElementById("currencyList");

  currencies.forEach((currency) => {
    const currencyCard = document.createElement("div");
    currencyCard.className = "col-md-4 mb-4";

    const card = document.createElement("div");
    card.className = "card";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = currency.id;

    const symbol = document.createElement("p");
    symbol.className = "card-text";
    symbol.textContent = `Symbol: ${currency.symbol}`;

    const rate = document.createElement("p");
    rate.className = "card-text";
    rate.textContent = `Rate (USD): ${currency.rateUsd}`;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(symbol);
    cardBody.appendChild(rate);

    card.appendChild(cardBody);
    currencyCard.appendChild(card);

    currencyList.appendChild(currencyCard);
  });
}

// Call API on Load
document.addEventListener("DOMContentLoaded", () => {
  fetchCurrencyData()
    .then((data) => renderCurrencyData(data))
    .catch((error) => console.error("Error fetching currency data:", error));
});
