/**
console.log("Hola Mundo");

let n1 = 10;
let n2 = 3;
let resultado = n1 + n2;

console.log("La suma es: " + resultado);

document.getElementById("boton").onclick = function (){
    console.log("Capturamos el evento click")
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS"
}

document.addEventListener("click", function () {
    console.log("Hola Mundo desde Event Listener")
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS"
})
*/

document.getElementById("boton").addEventListener("click", function () {
    console.log("Hola Mundo desde Event Listener")
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS"
})

document.getElementById("boton_color").addEventListener("click", function () {
    document.body.style.backgroundColor = "#DFCB24";
})

document.getElementById("boton_default").addEventListener("click", function () {
    document.body.style.backgroundColor = "aqua";
})