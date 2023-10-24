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

//MUESTRAS DE JS EN HTML:

//CALCULO DE IMC
const imcBox = document.querySelector(".imc-box")

{imcBox.innerHTML = `
    <div class= "box-imc">
        <p class="parrafo-imc"> Calcula tu IMC</p>
        <form class="box-form">
            <ul>
                <li>
                    <label class= "name-box" for="name">Nombre:</label>
                    <input type="text" id="name" name="user_name" placeholder="Nombre"/ required>
                </li>

                <li>
                    <label class="peso-box" for="peso">Peso (kg):</label>
                    <input type="text" id="peso" name="user_name" placeholder="90" required  />
                </li>
                <li>
                    <label class="altura-box" for="altura">Altura(mts):</label>
                    <input type="text" id="altura" name="user_name" placeholder="1.70" required" />
                </li>
                <button id="calcular-button">Calcular
            </ul>
            <h2 id="resultado">Tu resultado es: </h2>
        </form>   
    </div> 
`}

//-----------------------------------------------------------

//ENTRENAMIENTOS

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


//EVENTOS:

//CALCULAR IMC

const calcularButton = document.getElementById("calcular-button");

calcularButton.addEventListener("click", function() {
    const userName = document.getElementById("name").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    calcularIndice(userName, peso, altura);
});
document.getElementById('calcular-button').addEventListener('click', function(event) {
    event.preventDefault();
});

//-------------------------------------------------

//COMPRAR ENTRENAMIENTOS

const botonesComprar = document.querySelectorAll('.comprar-boton');

function compra() {

    const contenedor = this.closest('.box-container');
    const nombreEntrenamiento = contenedor.querySelector('h2').textContent;
    const precioEntrenamiento = contenedor.querySelector('p').textContent;
    

    alert(`Compraste el entrenamiento ${nombreEntrenamiento} por ${precioEntrenamiento}`);
}

botonesComprar.forEach(boton => {
    boton.addEventListener('click', compra);
});


//FUNCIONES:

//CALCULAR EL IMC:

function calcularIndice(userName, peso, altura) {
    // Verificar si el peso es un número entero y la altura es un número decimal
    if (!Number.isNaN(peso) && Number.isInteger(Number(peso)) && !Number.isNaN(altura) && !Number.isInteger(Number(altura))) {
        const resultado = `${userName} tu IMC es: ${(peso / (altura * altura)).toFixed(2)}`;
        // Muestra el resultado en el div con id "resultado"
        document.getElementById("resultado").textContent = resultado;
    } else {
        // Mostrar un mensaje de error si los valores no son válidos
        document.getElementById("resultado").textContent = "Por favor, ingresa valores válidos.";
    }
}