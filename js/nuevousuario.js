// /////////////////obtener usuario y imagen a navbar///////
// let usuario_obtenido=localStorage.getItem('usuarioObtenido');
// console.log(JSON.parse(usuario_obtenido));
// usuario_obtenido=JSON.parse(usuario_obtenido);
// console.log(usuario_obtenido.usuario);

// document.getElementById('lista').children[0].textContent="¡Hola: "+usuario_obtenido.usuario+"! ";

// let img=document.getElementById('lista').children[1].children[0].children[0].src;
// console.log(img);

// switch (usuario_obtenido.sexo) {
//     case "masculino":
//         document.getElementById('lista').children[1].children[0].children[0].src="../imagenes/admin/hombre.png";
//         break;

//         case "femenino":
//         document.getElementById('lista').children[1].children[0].children[0].src="../imagenes/admin/perfil.png";
//         break;
//     default:
//         break;
// }


// ////////////////////////////////////////////////////////////

//obtener valores de inputs
let nombreNuevo = document.getElementById('nombre');
let usuarioNuevo = document.getElementById('usuario');
let contraseñaNuevo = document.getElementById('contraseña');
let sexoNuevo = document.getElementById('sexo');



//validacion del select para no grabar vacio

function nuevoUsuario() {

 
    if (sexoNuevo.value=="") {
        alert("Selecione Sexo para continuar")        
    }else{
        nuevo();
    }
}

function nuevo() {
    let usuario = {
        nombre: nombreNuevo.value,
        usuario: usuarioNuevo.value,
        contraseña: contraseñaNuevo.value,
        sexo: sexoNuevo.value
        

    }

    console.log(usuario);

    // let url = "http://127.0.0.1:5000/registrousuario";
    let url = "https://spikecarp.pythonanywhere.com/registrousuario";

    var options = {
        body: JSON.stringify(usuario),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    console.log(options);

    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            // Devuelve el href (URL) de la página actual
            window.location.href = "adminitracionusuario.html";

        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar")
            console.error(err);
        })


}