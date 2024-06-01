const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');
const convertBtn = document.getElementById('convertBtn');
        
convertBtn.addEventListener('click', () => {
const celsiusValue = parseFloat(celsiusInput.value);
const fahrenheitValue = (celsiusValue * 9 / 5) + 32;
const kelvinValue = celsiusValue + 273.15;
        
fahrenheitInput.value = fahrenheitValue.toFixed(2);
kelvinInput.value = kelvinValue.toFixed(2);
});