const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectConvert = document.querySelector("#currency-select-convert")


function convertValues() {

    const inputCurrencyValue = parseFloat (document.querySelector(".input-currency").value.replace(",", ".")) || 0;

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em real

    const currencyValueConverted = document.querySelector(".currency-value") //valor outras moedas



    const rates = {
        "real": 0.001602,
        "dolar": 5.2,
        "euro": 6.2,
        "libra": 7.9,
        "bitcoin": 627.305
    }

    if (isNaN(inputCurrencyValue || inputCurrencyValue <= 0)) {
        currencyValueToConvert.innerHTML = "Valor inválido"
        currencyValueConverted.innerHTML = "----"
        return;
    }

     // Exibe o valor de entrada na moeda de origem

     const formatOptions = { 
        real: {locale: "pt-BR", currency: "BRL" },
        dolar: { locale: "en-US", currency: "USD" },
        euro: { locale: "de-DE", currency: "EUR" },
        libra: { locale: "en-GB", currency: "GBP" }
     }

     if(currencySelectConvert.value === "bitcoin") { 
        currencyValueToConvert.innerHTML = `${(inputCurrencyValue / rates.bitcoin).toFixed(6)} BTC`
        } else {
            const { locale, currency } = formatOptions[currencySelectConvert.value] || formatOptions.real
            currencyValueToConvert.innerHTML = new Intl.NumberFormat(locale, {
                style: "currency",
                currency
            }).format(inputCurrencyValue)
        } 
    

      // Converte para a moeda de destino
    if (currencySelect.value === "bitcoin") {
        currencyValueConverted.innerHTML = `${(inputCurrencyValue / rates.bitcoin).toFixed(6)} BTC`
    } else{
        const { locale, currency } = formatOptions[currencySelect.value] || formatOptions.real
        currencyValueConverted.innerHTML = new Intl.NumberFormat(locale, {
            style: "currency",
            currency
        }).format(inputCurrencyValue / rates[currencySelect.value])
    }
}

function changeCurrency() {

    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector("#change-img")
    const changeImageConvert = document.querySelector("#change-image-convert")
    const currencyNameConvert = document.getElementById("currency-name-convert")

   const names = {
        real: "Real Brasileiro",
        dolar: "Dólar Amercicano",
        euro: "Euro",
        libra: "Libra",
        bitcoin: "Bitcoin"
   }

   const images = {
        real: "./assets/real.png",
        dolar: "./assets/dolar.png",
        euro: "./assets/euro.png",
        libra: "./assets/libra.png",
        bitcoin: "./assets/bitcoin.png"
   }

    // Atualiza moeda de origem
    if (currencySelectConvert.value && names[currencySelectConvert.value]) {
        currencyNameConvert.innerHTML = names[currencySelectConvert.value]
        changeImageConvert.src = images[currencySelectConvert.value]
    }

     // Atualiza moeda de destino
     if (currencySelect.value && names[currencySelect.value]) {
        currencyName.innerHTML = names[currencySelect.value]
        currencyImage.src = images[currencySelect.value]

     }
    convertValues()
}

currencySelectConvert.addEventListener("change", changeCurrency)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)