function calcularOperaciones(){
    let input = document.getElementById('numeros').value;
    if(input === ""){
        alert("Ingrese valores en el campo");
    } else if (!input.includes(",")){
        alert("Los numeros deben estar separados por comas");
    }
    let cadena =input.split(",");
    let numeros = cadena.map(Number);

    let promedio = ( numeros.reduce((acc, valor) => acc + valor, 0) ) / numeros.length;

    document.getElementById('numayor').value = "Numero Mayor: " + Math.max(...numeros);
    document.getElementById('numenor').value = "Numero Menor: " + Math.min(...numeros);
    document.getElementById('promedio').value = "Promedio: " + promedio;
}