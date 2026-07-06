const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

const obtenerNumero = (id) => document.getElementById(id).value;

const calcularOperacion = (opcion) => {
    let num1 = obtenerNumero("numero1");
    let num2 = obtenerNumero("numero2");
    if(!num1 || !num2){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Los campos estan vacios!",
            footer: "Ingresa numeros validos!"
        });
    }
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    let resultado = document.getElementById('resultado');
    
    switch (opcion) {
        case "suma":
            (() => resultado.value = sumar(num1, num2))();
        break;

        case "resta":
            (() => resultado.value = restar(num1, num2))();
        break;
    
        case "multiplicacion":
            (() => resultado.value = multiplicar(num1, num2))();
        break;

        case "division":
            (() => resultado.value = dividir(num1, num2))();
        break;

        default:
            break;
    }
}

document.addEventListener("keydown", function(event){
    if(event.key === "+") calcularOperacion(suma);
    if(event.key === "-") calcularOperacion(resta);
    if(event.key === "*") calcularOperacion(multiplicacion);
    if(event.key === "/") calcularOperacion(division);
});