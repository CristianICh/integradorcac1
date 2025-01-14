function validarFormulario() {
    // Obtener los valores ingresados por el usuario y .trim() recorta
    // los posibles espacios en blanco al principio y al final.
    var nombre = document.getElementById("nombre").value.trim();
    var apellido = document.getElementById("apellido").value.trim();
    var email = document.getElementById("email").value.trim();
    var comentario = document.getElementById("comentario").value.trim();


    // Verificar si algún campo está en blanco
    if (nombre === "" || apellido === "" || email === "" || comentario === "") {
        alert("Por favor, completar todos los campos vacíos del formulario.")
        return false
    }
    // Verificar si el nombre contiene solo 
    //caracteres alfabéticos 
    //var variableTest =/^[a-zA-Z]+$/.test(variable)  
    var nombreTest = /^[a-zA-Z]+$/.test(nombre);
    if (nombreTest === false) {
        alert("Por favor,ingrese un nombre con letras del alfabeto.")
        return false
    }

    var apellidoTest = /^[a-zA-Z]+$/.test(apellido);
    if (apellidoTest === false) {
        alert("Por favor,ingrese un apellido con letras del alfabeto.")
        return false
    }

    var emailTest=/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(email);
     
    if(emailTest===false){
        alert("Por favor,ingrese un email valido.")
        return false

    }
    // Si todas las validaciones son exitosas, enviar el formulario
    alert("Se enviaron los datos correctamente.")
   



















}