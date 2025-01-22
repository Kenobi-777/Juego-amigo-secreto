// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//crear variable para ingreso de nombres
let listaAmigos = [];
let nombreAmigo = 0;
let lista = listaAmigos;

//Funcion 
function agregaTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML += texto;
    return;
}

//captura el input
function agregarAmigo() {

    //valida solo ingreso de texto en el imput
        const input = document.getElementById('amigo');
        if(!input.checkValidity()) {
          alert('Solo puedes ingresar texto');
          limpiarCaja();
          focusInputIngreso();

        } else {
         
    //Agrega nombre al listado
    let nombreAmigo = document.getElementById('amigo').value;
    
    
    //Prueba de document.querySelector("#listaAmigos").innerHTML += "<li>"+nombreAmigo+"</li>"
     agregaTextoElemento('ul',`${"<li>"+nombreAmigo+"</li>"}`);   

    //Si el input esta vacio envia un mensaje de alerta 
    if (nombreAmigo =='') {

       alert('Por favor, ingrese un nombre valido') 
       focusInputIngreso()

    } else {
    
    //Si el input tiene un nombre lo agrega a lista    
    listaAmigos.push(nombreAmigo); 

    //Para probar en la consola
    console.log(listaAmigos);
    console.log(nombreAmigo);
    
     //Limpia el input y le devuleve el foco a este   
     limpiarCaja();
     focusInputIngreso();
     
    return;
    
    }
  }
}

//selecciona un nombre al azar de la lista
function seleccionarNombre(lista) {
  
    
    let aleatorio = Math.floor(Math.random() * lista.length);  
    return lista[aleatorio];
}
  
//funcion que muestra el nombre del amigo secreto
function sortearAmigo(){

//Envia un mensaje de alerta si no hya nombres en la lista     
if (listaAmigos==""){
   
    alert('Tú lista esta vacia, debes ingresar los nombres de tus amigos') 
    document.getElementById('resultado').innerHTML = '';
    focusInputIngreso();

} else {

//Selecciona el nombre de la lista y lo muestra    
    nombreSeleccionado =seleccionarNombre(lista);
    document.getElementById('resultado').innerHTML = 'Tú amigo secreto sorteado es ' + nombreSeleccionado;

//Borra la lista    
    for (let i = listaAmigos.length; i > 0; i--) {
        listaAmigos.pop();
   }

//Borra el contenido del elemento
    document.getElementById('listaAmigos').innerHTML = '';

    return;
}

}    

//funcion para limpiar input
function limpiarCaja () {

    document.getElementById('amigo').value = '';
    return;

}

//Funcion para focus del input
function focusInputIngreso (){

    document.getElementById("amigo").focus();
    return;

}

