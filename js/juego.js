var palabras = ["GATO","PERICO","HTML","ALURA","ORACLE"];
var palabraAdivinar = [];
var palabrasMostrar = [];
var historial = [];
var intentos = 10;
var palabraAleatoria =[];
var letter;
var letraUsuario;
var igual;
var repeticiones;

var letras = document.querySelector('#letra');
var boton = document.querySelector('#boton');
var resultado = document.querySelector('.texto');
var cajaHistorial = document.querySelector(".history");

function invisible(elemento){
  var objeto = document.querySelector(elemento);
  objeto.style.visibility = 'hidden';

}

function visible(elemento){
  var objeto = document.querySelector(elemento);
  objeto.style.visibility = 'visible';

}

function prepararJuego(){

  palabraAleatoria = palabras[Math.floor(Math.random() * palabras.length)];
  palabraAdivinar = palabraAleatoria.split("");
  console.log(palabraAleatoria);

  for(let letra of palabraAdivinar){
    palabrasMostrar.push("_");
  }

  console.log(palabrasMostrar);
  dibujar();
 
  document.addEventListener("keypress", function onPress(event) {


    comprobacion();

    dibujar();

    acabarJuego();
      
  });

}

function dibujar(){
    resultado.textContent = palabrasMostrar.join(" ");
    resultado.classList.add("texto"); 
    cajaHistorial.textContent = historial.join(" ");
    
}

function comprobacion(){
  letraUsuario = event.key;
  
  igual = false;
  repeticiones = false;

  if(isNaN(letraUsuario) == true){

    comprobarLetras();

  }else{
    alert("No escribas numeros");
  }

  dibujarMuneco();

 }

function acabarJuego(){
  if(!palabrasMostrar.includes("_")){
    var ganado = document.querySelector(".ganado");
    ganado.textContent= "FELICIDADES, Has Ganado!";
  }
  if(intentos == 0){
    var perdido = document.querySelector(".perdedor");
    perdido.textContent= `Fin del juego, La palabra era ${palabraAleatoria}  `;
  }
  if(intentos == -1){  
    alert("Se reiniciar√° el juego");
    location.reload(true);
  }
  

}

function mu√Īeco(rectangulo,visible){
  var dibujo = document.querySelector(rectangulo);
  dibujo.style.visibility = visible;
 
}

function dibujarMuneco(){
  if(intentos == 9){
    mu√Īeco(".rectangulo0","visible");
  }

  if(intentos == 8){
    mu√Īeco(".rectangulo1","visible");
  }

  if(intentos == 7){
    mu√Īeco(".rectangulo2","visible");
  }

  if(intentos == 6){
    mu√Īeco(".rectangulo3","visible");
  }

  if(intentos == 5){
    mu√Īeco(".rectangulo4","visible");
  }
  if(intentos == 4){
    mu√Īeco(".rectangulo5","visible");
  }
  if(intentos == 3){
    mu√Īeco(".rectangulo6","visible");
  }
  if(intentos == 2){
    mu√Īeco(".rectangulo7","visible");
  }
  if(intentos == 1){
    mu√Īeco(".rectangulo8","visible");
  }
  if(intentos == 0){
    mu√Īeco(".rectangulo9","visible");
  }
}



