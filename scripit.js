const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectConvert = document.querySelector("#currency-select-convert")


function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em real

    const currencyValueConverted = document.querySelector(".currency-value") //valor outras moedas

    console.log(currencySelectConvert.value)
    
    const dollarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.9
    const bitcoinToday = 627.305

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dollarToday)
    }

    if (currencySelect.value == "euro") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    if (currencySelect.value == "libra") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == "bitcoin") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }



    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"

    }).format(inputCurrencyValue)

}

function changeCurrency () {

    const currencyName = document.getElementById("currency-name")
    const currencyImge = document.querySelector("#change-img")

   if (currencySelect.value == "dolar") {

    currencyName.innerHTML = "Dólar Americano"
    currencyImge.src = "./assets/dolar.png"

   }

   if (currencySelect.value == "euro")  {

    currencyName.innerHTML = "Euro"
    currencyImge.src = "./assets/euro.png"
   }

   if (currencySelect.value == "libra") {

    currencyName.innerHTML = "Libra"
    currencyImge.src = "./assets/libra.png"
   }

   if (currencySelect.value == "bitcoin") {

    currencyName.innerHTML = "Biticoin"
    currencyImge.src = "./assets/bitcoin.png"
   }

   convertValues()
}


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)