//*************************mostrar Categorias********************************** */
var categorias = document.getElementById('lista-categorias');
console.log(categorias);

function obtenerCategoria(e) {
    var categoria=e.target.title;
    console.log(categoria);
    if(categoria!=""){
        fetch(url+"/category/"+categoria)
        .then(res=>res.json())
        .then(json=>mostrarProductos(json))
    }else{
        window.location.reload();
    }
    
}
categorias.addEventListener('click', obtenerCategoria)

