let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
    console.log (elementoHTML);
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto === numeroDeUsuario);
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos' }!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acerto al primer intento
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'el numero secreto es menor')
        } else {
            if (numeroDeUsuario < numeroSecreto) {
                asignarTextoElemento('p', 'el numero secreto es mayor')
            }
            intentos++;
            limpiarCaja();
        }
    }
    return;
}

function limpiarCaja() {
   document.querySelector('#valorUsuario').value ='';
}

function generarNumeroAleatorio() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento ('p','el juego ha terminado');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroAleatorio();
        } else {
            listaNumerosSorteados.push(numeroGenerado)
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroAleatorio()
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja 
    limpiarCaja();
    //indicar condiciones iniciales
    condicionesIniciales();
    //deshabilitar boton
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
