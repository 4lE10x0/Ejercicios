function validarEdad(){
    const edad = document.getElementById('edad').value;
    if(edad === ""){ 
        alert("Por favor ingrese un valor en Edad");
        return;
    } else if (edad <= 0){
        alert("Error, edad no puede ser igual o menor que 0");
        return;
    }
    document.getElementById('validacion').innerHTML = (edad >= 18) ? "Puedes Votar" : "No Puedes Votar";
}
    

const edadInput = document.getElementById('edad');

edadInput.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        validarEdad();
    }
});