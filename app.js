// Ejercicio complementario clase 3 //

let numero1 = parseInt(prompt("Ingrese un numero: "));
let numero2 = parseInt(prompt("Ingrese un segundo numero: "));
let numero3 = parseInt(prompt("Ingrese un tercer numero: "));
let resultado = numero1 + numero2 + numero3;

while (isNaN(resultado) == false) { 
    console.log ("la suma total es: ", resultado);
    numero1 = parseInt(prompt("Ingrese un numero: "));
    numero2 = parseInt(prompt("Ingrese un segundo numero: "));
    numero3 = parseInt(prompt("Ingrese un tercer numero: "))
    resultado = numero1 + numero2 + numero3;
}

alert ("suma finalizada");