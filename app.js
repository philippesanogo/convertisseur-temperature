// Récupère tous les input
const inputCelsius = document.querySelector('.celsius');
const inputFahrenheit = document.querySelector('.fahrenheit');
const inputKelvin = document.querySelector('.kelvin');
// console.log(inputCelsius);


// Fonction pour convertir de celsius à fahrenheit et de celsius à kelvin
function convertCelsius() {

    let celsius = this.value;

    let celsiusToFahrenheit = (1.8 * celsius) + 32;
    let celsiusToKelvin = Number(celsius) + 273.15;

    inputFahrenheit.value = celsiusToFahrenheit;
    inputKelvin.value = celsiusToKelvin;

    if (celsius === "") {
        inputFahrenheit.value = "";
        inputKelvin.value = "";
    }
}

// Récupère la valeur de l'input au "keyup"
inputCelsius.addEventListener('keyup', convertCelsius);
inputCelsius.addEventListener('click', convertCelsius);



// Fonction pour convertir de fahrenheit à celsius et de fahrenheit à kelvin
function convertFahrenheit() {

    let fahrenheit = this.value;

    let fahrenheitToCelsius = (fahrenheit - 32) / 1.8;
    let fahrenheitToKelvin = (fahrenheit - 32) / 1.8 + 273.15;

    inputCelsius.value = fahrenheitToCelsius;
    inputKelvin.value = fahrenheitToKelvin;

    if (fahrenheit === "") {
        inputCelsius.value = "";
        inputKelvin.value = "";
    }

}

// Récupère la valeur de l'input au "keyup"
inputFahrenheit.addEventListener('keyup', convertFahrenheit);
inputFahrenheit.addEventListener('click', convertFahrenheit);


// Fonction pour convertir de kelvin à celsius et de kelvin à fahrenheit
function convertKelvin() {

    let kelvin = this.value;

    let kelvinToCelsius = kelvin - 237.15;
    let kelvinToFahrenheit = (kelvin - 273.15) * 9/5 + 32;

    inputCelsius.value = kelvinToCelsius;
    inputFahrenheit.value = kelvinToFahrenheit;

    if (kelvin === "") {
        inputCelsius.value = "";
        inputFahrenheit.value = "";
    }
}

// Récupère la valeur de l'input au "keyup"
inputKelvin.addEventListener('keyup', convertKelvin);
inputKelvin.addEventListener('click', convertKelvin);
































// Récupérer les class 
// const getClassCelsius = document.querySelector('.celsius');
// const getClassFahrenheit = document.querySelector('.fahrenheit');
// const getClassKelvin = document.querySelector('.kelvin');

// Déclarer la fonction convertCelsiusToFahrenheit
// function convertCelsiusToFahrenheit() {

//     let celsius = this.value;

//     let celsiusToFahrenheit = (1.8 * celsius) + 32;

//     return getClassFahrenheit.value = celsiusToFahrenheit;
// }

// ajoute des évènements
// getClassCelsius.addEventListener("keyup", convertCelsiusToFahrenheit);