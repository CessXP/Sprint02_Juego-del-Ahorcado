var btn1 = document.querySelector(".inicio_juego");
var btn2 = document.querySelector(".agregar_palabra");
var btn3 = document.querySelector(".nuevo_juego");
var btn4 = document.querySelector(".desistir");
var btn5 = document.querySelector(".nuevo_palabra");
var btn6 = document.querySelector(".cancelar");

btn1.addEventListener('click',function(){
    invisible(".boton_container");
    visible("#ahorcado")
  
    prepararJuego();
  
  });
  
btn2.addEventListener('click',function(){
    invisible(".boton_container");
    visible("#agregar");
  });
  
  
btn3.addEventListener('click', function(){
    location.reload(true);
  });
  
  
btn4.addEventListener('click', function(){
    palabraAleatoria = palabraAleatoria.split("").join(" ");
    resultado.textContent = palabraAleatoria;
    muñeco(".rectangulo0","visible");
    muñeco(".rectangulo1","visible");
    muñeco(".rectangulo2","visible");
    muñeco(".rectangulo3","visible");
    muñeco(".rectangulo4","visible");
    muñeco(".rectangulo5","visible");
    muñeco(".rectangulo6","visible");
    muñeco(".rectangulo7","visible");
    muñeco(".rectangulo8","visible");
    muñeco(".rectangulo9","visible");
    
  
  });

   
btn5.addEventListener('click', function(){

    guardarPalabra();
    
  });

   
btn6.addEventListener('click', function(){
    visible(".boton_container");
    invisible("#agregar");
  });
  
  