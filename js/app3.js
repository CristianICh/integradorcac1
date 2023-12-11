var categoria2=document.getElementById('cat-id');
console.log(categoria2);

function categoria(e){
    console.log(e.target.title);

    localStorage.setItem('e',(e.target.title))
}
categoria2.addEventListener('click', categoria)

// let url = "https://fakestoreapi.com/products?limit=5";
// let url = "http://127.0.0.1:5000/productos/limite=5";
let url = "https://spikecarp.pythonanywhere.com/productos/limite=5";

fetch(url)
    .then(res => res.json())
    .then(json => mostrarProductos(json));


    //********************Mostrar Producto**************************/
const mostrarProductos = (json) => {
    console.log(json);

    let card = "";

    for (let i = 0; i < json.length; i++) {
        // card+=`<img src="${json[i].image}">`
        let coutas=(json[i].price/3).toFixed(2);
        card += ` 
        <div class="card">
        <a href="descripcionproducto.html">
             <img src="${json[i].image}" id="${json[i].id}" class="img-class">
             </a>
         <div class="desc">
             <h4>${json[i].title}</h4>
             <h5>$${json[i].price}</h5>
             <h6>3 cuotas sin interes de $ ${coutas}
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
