
document.getElementById("sumar").addEventListener("click", function(){
    let numeroA = document.getElementById("n1").value;
    console.log("El valor del número es: "+numeroA);
    let numeroB = document.getElementById("n2").value;
    console.log("El valor del número es: "+numeroB);
    let resultado = sumar(parseInt(numeroA), parseInt(numeroB));
    console.log("El resultado de la suma es: "+resultado);

    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById("contenedorResultado").style.display = "block";
});

function sumar(a,b){
    return a + b;
}