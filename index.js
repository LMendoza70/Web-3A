// hola esto es un comentario de una linea 
/*esto es un comentario de 
multiples lineas*/
var x=5

var edad=0

function Saludo(){
    if(edad<18){
        alert("El contenido del sitio no es apto para menores de edad...")
    }else{
        alert("Bienvenido a bodegas Alianza...")
    }
}



function Captura(){
    edad=prompt("Captura la edad de la persona")
}