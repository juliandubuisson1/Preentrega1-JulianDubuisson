for (let i = 0; i < 1; i++){
    alert('¿Queres saber tu Indice de Masa Corporal (IMC)?')
}

function saludarConNombre(nombre){
    alert('Hola ' + nombre + ' necesito algunos datos tuyos');
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

// Intenta convertir la entrada a un número float
const numeroFloat = parseFloat(altura);

// Verifica si la conversión fue exitosa y si el número es un float
if(!isNaN(numeroFloat) && numeroFloat !== Math.floor(altura)){
    break; // Salir del bucle si es un número entero válido
}else{
    alert("El número ingresado no es un número con decimales. Por favor, inténtelo de nuevo.");
}
}

//CALCULO DE IMC

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



//ARRAYS DE ENTRENAMIENTOS
const entrenamientos= [
    {
        id:0, 
        nombre: "Báisco", 
        precio: 300,
        thumbnail: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&q=80&w=1931&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },

    {
        id:1, 
        nombre: "Intermedio", 
        precio: 500,
        thumbnail:'https://images.unsplash.com/photo-1536922246289-88c42f957773?auto=format&fit=crop&q=80&w=2104&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    
    {
        id: 2, 
        nombre: "Avanzado", 
        precio : 700,
        thumbnail:'https://images.unsplash.com/photo-1591258370814-01609b341790?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
];


const mostrarEntrenamientos = () => {
    let mensaje =  'Entrenamientos: \n';
    entrenamientos.map((entrenamiento) => {
        mensaje += `Entrenamiento: ${entrenamiento.nombre} \nPrecio: ${entrenamiento.precio} \n ----------------------- \n` 
    })
    alert(mensaje);
};


mostrarEntrenamientos(); 

alert ('Vení a entrenar a Fit-Coach') 


//MUESTRA DE LOS ENTRENAMIENTOS EN EL HTML

let contenedor = document.createElement("div");


for ( const entrenamiento of entrenamientos) {
    contenedor.innerHTML += `
    <article class= "box-container" id=${entrenamiento.id}>
        <img src= ${entrenamiento.thumbnail} alt="imagen sobre ${entrenamiento.nombre}> 
        <div class="box-container-body">
            <h2>${entrenamiento.nombre}</h2>
            <p>$${entrenamiento.precio}</p>
            <button class="comprar-boton" data-id=${entrenamiento.id}>Comprar</button>
        </div>
    `
}

document.body.append(contenedor);
console.log(contenedor);


//EVENTOS DEL BOTON COMPRAR ENTRENAMIENTOS

const botonesComprar = document.querySelectorAll('.comprar-boton');

function Compra() {
    // Tu código para manejar la compra aquí
    // Puedes acceder a los datos del entrenamiento relacionado usando el DOM
    const contenedor = this.closest('.box-container');
    const nombreEntrenamiento = contenedor.querySelector('h2').textContent;
    const precioEntrenamiento = contenedor.querySelector('p').textContent;
    
    // Ejemplo de lo que puedes hacer con los datos
    console.log(`Compraste ${nombreEntrenamiento} por ${precioEntrenamiento}`);
}

// Agrega el evento "click" a cada botón
botonesComprar.forEach(boton => {
    boton.addEventListener('click', Compra);
});
