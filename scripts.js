const button = document.getElementById("convert-button");
const select = document.getElementById("currency-select");

const dolar = 5.20;
const euro = 5.18;
const Bitcoin = 0.000010;

const convertValue = () => {
  const inputReais = document.getElementById("input-real").value;
  const realTextValue = document.getElementById("real-text-value");
  const dolarTextValue = document.getElementById("dolar-text-value");

  realTextValue.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReais);

  if (select.value === "US$ Dólar Americano") {
    dolarTextValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputReais / dolar);
  }

  if (select.value === "€ Euro") {
    dolarTextValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReais / euro);
  }

  if (select.value === "₿ Bitcoin") {
    dolarTextValue.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BTC",
    }).format(inputReais * Bitcoin );
  }
};



changeCurrency = () => {
  const currencyName = document.getElementById("currency-name");
  const currentyImg = document.getElementById("currenty-img");

  if (select.value === "US$ Dólar Americano") {
    currencyName.innerHTML = "Dólar";
    currentyImg.src = "./assets/estados-unidos.png";
  }

  if (select.value === "€ Euro") {
    currencyName.innerHTML = "Euro";
    currentyImg.src = "./assets/euro.png";
  }

  if (select.value === "₿ Bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currentyImg.src = "./assets/moeda-bitcoin.png";
  }

  convertValue()

};

button.addEventListener("click", convertValue);
select.addEventListener("change", changeCurrency);
