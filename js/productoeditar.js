// /////////////////obtener usuario y imagen a navbar///////
// let usuario_obtenido=localStorage.getItem('usuarioObtenido');
// console.log(JSON.parse(usuario_obtenido));
// usuario_obtenido=JSON.parse(usuario_obtenido);
// console.log(usuario_obtenido.usuario);

// document.getElementById('lista').children[0].textContent=usuario_obtenido.usuario;

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


// Procedimiento para traer los datos del registro a editar
// Ej: "id=9&nombre=bulbasaur"
let cadena = location.search; // Cadena con los símbolos & y =
console.log(cadena);

// Crear un objeto URLSearchParams con la cadena
// El objeto URLSearchParams en JavaScript es una
// interfaz que proporciona métodos y propiedades para
// trabajar con las cadenas de consulta (query strings) en URLs.
// Facilitando la obtención de parámetros y valores individuales
let datos = new URLSearchParams(cadena);

console.log(datos);

// Crear un objeto para almacenar los nombres de las variables y sus valores
let resultado = {};

// Iterar sobre los parámetros y guardar los nombres y valores en el objeto resultado
for (const [nombre, valor] of datos) {
    resultado[nombre] = valor;
}
// Imprimir el resultado
console.log(resultado); // Esto mostrará un objeto con las variables y sus valores

//Procedimiento para mostrar los datos a editar en el formulario de edición
// document.getElementById('id').value = resultado.id;
document.getElementById('precio').value = resultado.price;
document.getElementById('titulo').value = resultado.title;
document.getElementById('descripcion').value = resultado.description;
document.getElementById('categoria').value = resultado.category;
document.getElementById('imagen').value = resultado.image;
console.log(resultado.id);

const modificar = () => {
    // let idForm = document.getElementById('id').value;
    let idForm = resultado.id;

    let tituloForm = document.getElementById('titulo').value;
    let precioForm = document.getElementById('precio').value;
    let descripcionForm = document.getElementById('descripcion').value;
    let categoriaForm = document.getElementById('categoria').value;
    let imagenForm = document.getElementById('imagen').value;


    //creo una objeto

    let producto = {

        title: tituloForm,
        price: precioForm,
        description: descripcionForm,
        category: categoriaForm,
        image: imagenForm

    }

    // let url = "http://127.0.0.1:5000/update/" + idForm;
    let url = "https://spikecarp.pythonanywhere.com/update/" + idForm;
    var options = {
        body: JSON.stringify(producto),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        // el navegador seguirá automáticamente las redirecciones y
        // devolverá el recurso final al que se ha redirigido.
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado");
            alert("Registro Modificado");

            window.location.href = "administracionproductos.html";
        })
        .catch(err => {
            console.error(err);
            alert('Error al modificar')
        })


}