for (let i = 0; i < 1; i++){
    alert('¿Queres saber tu Indice de Masa Corporal (IMC)?')
}

function saludarConNombre(nombre){
    alert('Hola ' + nombre);
}

let nombreUsuario = prompt('Hola! Ingresa tu nombre');
saludarConNombre(nombreUsuario);

let peso = parseInt(prompt (nombreUsuario + ' ,ingresa tu peso en kilos (ej: 70)'))
let altura = parseFloat(prompt('Ahora ingresa tu altura en metros (ej: 1.9)')) 
imc= (peso / (altura * altura)).toFixed(2);

alert(nombreUsuario + ' tu IMC es ' + imc)

if(imc < 18.5){
    alert('Tu peso es inferior al normal');
}else if(imc >= 18.5 && imc <= 24.9){
    alert('Tu peso es normal');
}else if (imc >= 25 && imc <= 29.9){
    alert('Usted tiene sobrepeso');
}else{
    alert('Usted tiene obesidad')
}

alert ('Vení a entrenar a Fit-Coach')