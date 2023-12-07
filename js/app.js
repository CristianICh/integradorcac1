// let url = "https://fakestoreapi.com/products";
// let url = "http://127.0.0.1:5000/productos" ;

let url = "https://spikecarp.pythonanywhere.com/productos"


fetch(url+"/decendiente")
    .then(res => res.json())
    .then(json => mostrarProductos(json));



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


//********************Mostrar Producto**************************/
const mostrarProductos = (json) => {
    console.log(json);

    let card = "";

    for (let i = 0; i < json.length; i++) {
        // card+=`<img src="${json[i].image}">`
        card += ` 
        <div class="card">
        <a href="descripcionproducto.html">
             <img src="${json[i].image}" id="${json[i].id}">
             </a>
         <div class="desc">
             <h4>${json[i].title}</h4>
             <h5>$${json[i].price}</h5>
         </div>
        </div> 
        `

    }
    document.getElementById('img').innerHTML = card;
}


//////////////////*************************Encontrar Id */
var link = document.getElementById('img');
var idencontrado;

function encontrarId(e) {
    console.log(e.target.id);
    idencontrado = e.target.id;
    console.log(idencontrado);
    localStorage.setItem("id", idencontrado)


}
link.addEventListener('click', encontrarId);

