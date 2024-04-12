/*Saludo*/
let nombre = prompt("¿Cúal es tu nombre?")
let ahora = new Date();
let hora = ahora.getHours();

function saludar() {
    if (hora >= 6 && hora < 13) {
        console.log("Buenos días " + nombre);
    }
    if (hora >= 13 && hora < 21) {
        console.log("Buenas tardes " + nombre);
    }
    if (hora >= 21 && hora < 6) {
        console.log("Buenas noches " + nombre);
    }
}
saludar();
/**/

/*Terminos y Condiciones*/
alert(nombre + ", debes aceptar los términos y condiciones de la página")
confirmar = confirm(nombre + ", ¿Confirmas que aceptas los términos y condiciones?")
/**/

/*Logeo*/
usuario = prompt("Crea un nombre de usuario")
contraseña = prompt("Crea una contraseña")

for (let i = 0; i <= 3; i++) {
    user = prompt("Ingresa tu nombre de usuario")
    code = prompt("Ingresa tu contraseña, " + user)
    if ((user == usuario)&&(contraseña == code)){
        console.log("Usuario correcto")
        break
    }else {
        console.warn("Usuario o contraseña invalido")
    }
}
/**/

/*Productos*/
const productos = ['LámparaIndustrial', 'MesaIndustrial', 'AlfombraVerde', 'SillónGris']

console.table(productos.length)
console.log(productos.join(', '))

const agregarProducto = () => {
    productos.push(productos)
}
agregarProducto()
/**/

/*Suma de dos productos*/
let resultadoSuma = 0;
function sumar(numeroA, numeroB) {
    resultadoSuma = numeroA + numeroB;
}
sumar(29.99, 58.95);
mostrarSuma = console.log(resultadoSuma + "$")

/**/

/*Multiplicar dos productos*/
let resultadoX = 0;
function multiplicar(numero) {
    resultadoX = numero * 2;
}
multiplicar(29.99);
mostrarX = console.log(resultadoX + "$")
/**/
