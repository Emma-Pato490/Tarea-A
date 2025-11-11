function uno() {
    let radio = parseFloat(prompt("Ingresar radio del círculo"));
    let area = Math.PI * (radio**2);
    alert(`El area del circulo es : ${area.toFixed(2)}`);
}

function dos() {
    let radio = parseFloat(prompt("Ingresar radio de la esfera"));
    let volumen = (4/3) * (Math.PI) * (radio**3);
    alert(`El volumen de la esfera es de: ${volumen.toFixed(2)}`);
}

function tres() {
    let radio = parseFloat (prompt("Ingresar radio del cono"));
    let altura = parseFloat(prompt("Ingresar altura del cono"));
    let volumen= (1/3) * (Math.PI) * (radio**2) * (altura);
    alert (`El volumen del cono es: ${volumen.toFixed(2)}`);
}
function cuatro() {
    let base = parseFloat(prompt("Ingresar base"));
    let altura = parseFloat(prompt("Ingresar altura"));
    let area = base * altura;
    alert (`El area del rectangulo es de ${area.toFixed(2)}`);
}

function cinco() {
    let minutos = parseFloat(prompt("Ingresar minutos a convertir"));
    let segundos = minutos * 60;
    alert (`${minutos} minutos convertidos a segundos son: ${segundos}segundos`);
}

function seis () {
    let celsius = parseFloat(prompt("Ingresa la temperatura en Grados Centigrados"));
    let fahrenheit = (celsius * 9/5 ) + 32;
    alert (`${celsius.toFixed(2)} celsius convertidos equivalen a ${fahrenheit.toFixed(2)}`);
}

function siete() {
    let precioM = parseFloat(prompt("Ingresar el precio por metro de tela"));
    let metrosT = parseFloat(prompt("Ingresar cantidad de metros comprados "));
    let monto = precioM * metrosT;
    alert (`El monto a pagar es de ${monto.toFixed}`);
}

function ocho() {
    let monto = parseFloat(prompt("Ingresar el monto base"));
    let boni = parseInt(prompt("Inresar cantidad de hijos"));
    monto += boni * 80 ;
    alert (` El monto final a pagar mas el bono por criatura es de :${monto.toFixed(2)}`);
}

function nueve() {
    let saldo = parseFloat(prompt("Ingresar monto ahorrado:"));
    let saldof = saldo + (saldo * 0.015);
    alert(`El saldo más interés es de: ${saldof.toFixed(2)}`);

}


function diez() {
    let horas = parseFloat(prompt("Ingresar horas trabajadas:"));
    let subtotal = horas * 20;
    let descuento = subtotal * 0.05;
    let montotal = subtotal - descuento;

    alert(`Subtotal: ${subtotal.toFixed(2)}`);
    alert(`Descuento (5%): ${descuento.toFixed(2)}`);
    alert(`El monto final que se le dará al docente es de: $${montotal.toFixed(2)}`);

}

function once () {
    let moninicial = parseFloat(prompt("monto inicial del la tarjeta:"));
    let monfinal = parseFloat(prompt("monto final de la tarjeta:"));
    let monconsumido = moninicial - monfinal;
    let costllamada = monconsumido *1.30;
    alert (`Costo total de la llamada: ${costllamada.toFixed(2)}`);
}

function doce () {
    let lecinicial= parseFloat(prompt("Ingresar lectura inicial"));
    let lecfinal = parseFloat(prompt("Ingresar lectura final "));
    let lectotal = (lecfinal - lecinicial) * (0.015);
    lectotal += (lectotal) + (lectotal * 0.10);
    alert (`El monto total a pagar es de ${lectotal.toFixed(2)}`);
}
