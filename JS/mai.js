for (let i = 0; i < 1; i++){
    alert('¿Queres saber tu Indice de Masa Corporal (IMC)?')
}

function saludarConNombre(nombre){
    alert('Hola ' + nombre);
}

let nombreUsuario = prompt('Hola! Ingresa tu nombre');
saludarConNombre(nombreUsuario);

let peso;

while (true) {
peso = prompt(nombreUsuario + ", ingrese su peso (Ej. 80)");

  // Intenta convertir la entrada a un número entero
const numeroEntero = parseInt(peso);

  // Verifica si la conversión fue exitosa y si el número es un entero
if (!isNaN(numeroEntero) && numeroEntero == peso) {
    break; // Salir del bucle si es un número entero válido
} else {
    alert("El número ingresado no es un número entero válido. Por favor, inténtelo de nuevo.");
}
}

let altura;

while(true){
altura = prompt(nombreUsuario + ', ingrese su altura (Ej. 1.70)')
const numeroFloat = parseFloat(altura);

if(!isNaN(numeroFloat) && numeroFloat !== Math.floor(altura)){
    break;
}else{
    alert("El número ingresado no es un número con decimales. Por favor, inténtelo de nuevo.");
}
}

imc= (peso / (altura * altura)).toFixed(2);
alert("Tu IMC es: " + imc);

if(imc < 18.5){
    alert('Tu peso es inferior al normal');
}else if(imc >= 18.5 && imc <= 24.9){
    alert('Tu peso es normal');
}else if (imc >= 25 && imc <= 29.9){
    alert('Usted tiene sobrepeso');
}else{
    alert('Usted tiene obesidad')
} 

const productos = ["Entrenamiento Básico", "Entrenamiento Intermedio"];

productos.push("Entrenamiento Avanzado");

console.log(productos)

const productosDetallados = [
    {nombre: "Entrenamiento Báisco", precio: 300},
    {nombre: "Entrenamiento Intermedio", precio: 500},
    {nombre: "Entrenamiento Avanzado", precio: 700}
]

for (let i = 0; i < productosDetallados.length; i++) {
    console.log("========================");
    console.log("Nombre: " + productosDetallados[i].nombre);
    console.log("Precio: " + productosDetallados[i].precio);
}

alert ('Vení a entrenar a Fit-Coach')