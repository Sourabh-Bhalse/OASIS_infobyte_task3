function convert() {
    const inputTemp = document.getElementById('inputTemp').value;
    const unit = document.getElementById('unit').value;
    let result;

    if (unit === 'celsius') {
        result = (inputTemp * 9/5) + 32; // Celsius to Fahrenheit
        document.getElementById('result').innerText = `${inputTemp} °C = ${result.toFixed(2)} °F`;
    } else {
        result = (inputTemp - 32) * 5/9; // Fahrenheit to Celsius
        document.getElementById('result').innerText = `${inputTemp} °F = ${result.toFixed(2)} °C`;
    }
}
