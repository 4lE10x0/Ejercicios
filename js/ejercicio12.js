function convertirDivisa(){
    const pesosmx = document.getElementById('pesosmx').value;
    if(pesosmx === ""){ 
        alert("Por favor ingrese un valor en Dolares");
        return;
    } else if (pesosmx < 0){
        alert("Ingrese un valor mayor a 0");
        return;
    }
    const dolares = (pesosmx * 0.05723).toFixed(2);
    console.log(dolares);
    document.getElementById('dolares').value = dolares + " $";
}
    

const pesosInput = document.getElementById('pesosmx');

pesosInput.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        convertirDivisa();
    }
});