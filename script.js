const button = document.getElementById("convert-button");
const valueReals = document.getElementById("currency-select-from");
const valueDolars = document.getElementById("currency-select-to");


const convertValue = async () => {

  const inputReais = document.getElementById("input-real").value;
  const realTextValue = document.getElementById("real-text-value");
  const dolarTextValue = document.getElementById("dolar-text-value");

  const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

  const dolar = data.USDBRL.high
  const euro = data.EURBRL.high
  const Bitcoin = data.BTCBRL.high


  realTextValue.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputReais);

  if (valueDolars.value === "US$ Dólar Americano") {
    dolarTextValue.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputReais / dolar);
  }

  if (valueDolars.value === "€ Euro") {
    dolarTextValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputReais / euro);
  }

  if (valueDolars.value === "₿ Bitcoin") {
    dolarTextValue.innerHTML = (inputReais / Bitcoin / 1000).toFixed(4);
  }
};

const changeCurrencyFrom = () => {

  const currencyNameFrom = document.getElementById("currency-name")
  const currencyImgFrom = document.getElementById("currency-img-from")
  const currencyValueTextFrom = document.getElementById("real-text-value")


  if (valueReals.value === "R$ Real Brasileiro") {
      currencyNameFrom.innerHTML = "Real"
      currencyImgFrom.src = "./assets/bandeira-brasil.png"
      currencyValueTextFrom.innerHTML = "R$ 0,00"
  }
}

const changeCurrencyTo = () => {

  const currencyName = document.getElementById("currency-name");
  const currentyImg = document.getElementById("currenty-img");
  const currencyValueTextTo = document.getElementById("dolar-text-value")


  if (valueDolars.value === "US$ Dólar Americano") {
    currencyName.innerHTML = "Dólar";
    currentyImg.src = "./assets/estados-unidos.png";
    currencyValueTextTo.innerHTML = "US$ 0,00"
  }

  if (valueDolars.value === "€ Euro") {
    currencyName.innerHTML = "Euro";
    currentyImg.src = "./assets/euro.png";
    currencyValueTextTo.innerHTML = "€ 0,00"
  }

  if (valueDolars.value === "₿ Bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currentyImg.src = "./assets/moeda-bitcoin.png";
    currencyValueTextTo.innerHTML = "₿ 0.00"
  }

  convertValue()

};

button.addEventListener("click", convertValue);
valueReals.addEventListener("change", changeCurrencyFrom);
valueDolars.addEventListener("change", changeCurrencyTo);
