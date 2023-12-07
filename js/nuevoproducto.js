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

/////////////////////////////////////////////////////////////////
//obtener valores de inputs
let tituloNuevo = document.getElementById('titulo');
let precioNuevo = document.getElementById('precio');
let descripcionNuevo = document.getElementById('descripcion');
let imagenNuevo = document.getElementById('imagen');
let categoriaNuevo = document.getElementById('categoria');

//validacion del select para no grabar vacio
function nuevoProducto() {
    if (categoriaNuevo.value=="") {
        alert("Selecione una Categoria para continuar")        
    }else{
        nuevo();
    }
}

function nuevo() {
    let producto = {
        title: tituloNuevo.value,
        price: precioNuevo.value,
        description: descripcionNuevo.value,
        category: categoriaNuevo.value,
        image: imagenNuevo.value

    }

    console.log(producto);

    // let url = "http://127.0.0.1:5000/registro";
    let url = "https://spikecarp.pythonanywhere.com/registro";

    var options = {
        body: JSON.stringify(producto),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    console.log(options);

    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            // Devuelve el href (URL) de la página actual
            window.location.href = "administracionproductos.html";

        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar")
            console.error(err);
        })


}