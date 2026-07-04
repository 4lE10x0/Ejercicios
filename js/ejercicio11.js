function convertirDistancia(){
    const kilometros = document.getElementById('kilometros').value;
    if(kilometros === ""){ 
        alert("Por favor ingrese un valor en Kilometros");
        return;
    } else if (kilometros < 0){
        alert("Ingrese un valor mayor a 0");
        return;
    }
    const millas = kilometros * 0.621371;
    document.getElementById('millas').value = millas + " mi";
}
    

const kilometrosInput = document.getElementById('kilometros');

kilometrosInput.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        convertirDistancia();
    }
});