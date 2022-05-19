function comprobarLetras(){
    
    letraUsuario = letraUsuario.toUpperCase();
    for(var i = 0; i <= palabraAleatoria.length; i++){
      if(letraUsuario == palabraAleatoria[i]){
        palabrasMostrar[i] = letraUsuario;
        igual = true;
      }
    }   
  
    if(igual == false){
      intentos --;
      var repito = letraUsuario;
  
      for (var i = 0; i <= historial.length; i++){
          if (repito == historial[i]){
            repeticiones = true;
        }
             
      }
  
      if (repeticiones != true){
  
        historial.push(repito);
        console.log(intentos);
        console.log(historial);
         
      }
      
    }


}