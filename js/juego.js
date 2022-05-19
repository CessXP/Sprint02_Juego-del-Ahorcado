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
    alert("Se reiniciará el juego");
    location.reload(true);
  }
  

}

function muñeco(rectangulo,visible){
  var dibujo = document.querySelector(rectangulo);
  dibujo.style.visibility = visible;
 
}

function dibujarMuneco(){
  if(intentos == 9){
    muñeco(".rectangulo0","visible");
  }

  if(intentos == 8){
    muñeco(".rectangulo1","visible");
  }

  if(intentos == 7){
    muñeco(".rectangulo2","visible");
  }

  if(intentos == 6){
    muñeco(".rectangulo3","visible");
  }

  if(intentos == 5){
    muñeco(".rectangulo4","visible");
  }
  if(intentos == 4){
    muñeco(".rectangulo5","visible");
  }
  if(intentos == 3){
    muñeco(".rectangulo6","visible");
  }
  if(intentos == 2){
    muñeco(".rectangulo7","visible");
  }
  if(intentos == 1){
    muñeco(".rectangulo8","visible");
  }
  if(intentos == 0){
    muñeco(".rectangulo9","visible");
  }
}



