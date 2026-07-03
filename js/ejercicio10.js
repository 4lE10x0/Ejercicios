function convertirTemperatura() {
    const celsius = document.getElementById('celsius').value;
    if (celsius === "") {
        alert("Por favor, ingrese un valor en Celsius.");
        return;
    }
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit + " °F";
}

const celsiusInput = document.getElementById('celsius');

celsiusInput.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        convertirTemperatura();
    }
});