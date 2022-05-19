var agregarPalabra;

function guardarPalabra(){
    
    agregarPalabra = document.querySelector("#guardar").value.toLocaleUpperCase();
    if(agregarPalabra == ""){
        alert("No hay nada escrito");
    }
    else{
        palabras.push(agregarPalabra);
        console.log(palabras);
        visible("#ahorcado");
        invisible("#agregar");
        prepararJuego();
    }

}