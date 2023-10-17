console.log(localStorage.getItem("e"));

let categoria = localStorage.getItem("e");


let url = "https://fakestoreapi.com/products";

var mostrarxcategoria=()=>{
    return fetch(url + "/category/" + categoria)
    .then(res => res.json())
    .then(json => mostrarProductos(json))
}


fetch(url + "/category/" + categoria)
    .then(res => res.json())
    .then(json => mostrarProductos(json))

var categorias = document.getElementById('lista-categorias');
console.log(categorias);

function obtenerCategoria(e,mostrarxcategoria) {
    var categoria = e.target.title;
    console.log(categoria);
    if (categoria != "") {
        fetch(url + "/category/" + categoria)
            .then(res => res.json())
            .then(json => mostrarProductos(json))
        
    } else {
        fetch(url)
        .then(res => res.json())
        .then(json => mostrarProductos(json))
    }

}
categorias.addEventListener('click', obtenerCategoria)


/********************************************** */
//********************Mostrar Producto**************************/
const mostrarProductos = (json) => {
    console.log(json);

    let card = "";

    for (let i = 0; i < json.length; i++) {
        // card+=`<img src="${json[i].image}">`
        card += ` 
        <div class="card">
        <a href="descripcionproducto.html">
             <img src="${json[i].image}" id="${json[i].id}" class="img-class">
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

/*************************************************** */
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

