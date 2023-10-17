//********************Mostrar Producto**************************/
const mostrarProductos = (json) => {
    console.log(json);

    let card = "";

    for (let i = 0; i < json.length; i++) {
        // card+=`<img src="${json[i].image}">`
        card += ` 
        <div class="card">
        <a href="producto.html">
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

