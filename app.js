// Ejercicio complementario clase 3 //

//let numero1 = parseInt(prompt("Ingrese un numero: "));
//let numero2 = parseInt(prompt("Ingrese un segundo numero: "));
//let numero3 = parseInt(prompt("Ingrese un tercer numero: "));
//let resultado = numero1 + numero2 + numero3;

//while (isNaN(resultado) == false) { 
//    console.log ("la suma total es: ", resultado);
//    numero1 = parseInt(prompt("Ingrese un numero: "));
//    numero2 = parseInt(prompt("Ingrese un segundo numero: "));
//    numero3 = parseInt(prompt("Ingrese un tercer numero: "))
//    resultado = numero1 + numero2 + numero3;
//}

//alert ("suma finalizada");

// Ejercicio clase 4 - sacar un promedio entre 2 numeros // 

let parcial = parseFloat(prompt("Ingrese nota Parcial"));
let final = parseFloat(prompt("Ingrese nota Final"));
let promedio = (parcial + final)/2;

if (promedio >= 6) {
    alert ("La nota final es Aprobado");
}else{
    alert ("la nota final es Desaprobado");
}

// Agrego un ARRAY // 

const arrayPromedio = []; 
arrayPromedio.unshift (parcial, final, promedio);
console.log (arrayPromedio);

// Ahora que ya sabemos que se aprueba con 6, ver que alumnos aprobaron con un filtro // 

const alumnos = [
    {
        nombre: 'Tomas',
        nota: 6,
    },
    {
        nombre: 'Juan',
        nota: 4,
    },
    {
        nombre: 'Andres',
        nota: 8,
    },
    {
        nombre: 'Mateo',
        nota: 10,
    },
    {
        nombre: 'Calvin',
        nota: 7,
    },
    {
        nombre: 'Alan',
        nota: 2,
    }
]

let aprobados = alumnos.filter (alumnos => alumnos.nota >= 6);

console.log (aprobados)