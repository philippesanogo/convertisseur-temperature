const inputCelsius = document.querySelector('.celsius');
const inputFahrenheit = document.querySelector('.fahrenheit');
const inputKelvin = document.querySelector('.kelvin');

function convertCelsius() {
    let celsius = Number(this.value);

    let celsiusToFahrenheit = (1.8 * celsius) + 32;
    let celsiusToKelvin = celsius + 273.15;

    inputFahrenheit.value = celsiusToFahrenheit;
    inputKelvin.value = celsiusToKelvin;

    if(inputCelsius.value === '') {
        inputFahrenheit.value = '';
        inputKelvin.value = '';
    }

}
inputCelsius.addEventListener('keyup', convertCelsius);
inputCelsius.addEventListener('click', convertCelsius);


function convertFahrenheit() {
    let fahrenheit = Number(this.value);

    let fahrenheitToCelsius = (fahrenheit - 32) / 1.8;
    let fahrenheitToKelvin = (fahrenheit + 459.67) * 5/9;

    inputCelsius.value = fahrenheitToCelsius;
    inputKelvin.value = fahrenheitToKelvin;

    if(inputFahrenheit.value === '') {
        inputCelsius.value = '';
        inputKelvin.value = '';
    }

}
inputFahrenheit.addEventListener('keyup', convertFahrenheit);
inputFahrenheit.addEventListener('click', convertFahrenheit);


function convertKelvin() {
    let kelvin = Number(this.value);

    let kelvinToCelsius = kelvin - 273.15;
    let kelvinToFahrenheit = (kelvin * 1.8) - 459.67;

    inputCelsius.value = kelvinToCelsius;
    inputFahrenheit.value = kelvinToFahrenheit;

    if(inputKelvin.value === '') {
        inputCelsius.value = '';
        inputFahrenheit.value = '';
    }

}
inputKelvin.addEventListener('keyup', convertKelvin);
inputKelvin.addEventListener('click', convertKelvin);