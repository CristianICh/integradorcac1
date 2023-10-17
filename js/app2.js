

var id = localStorage.getItem("id");
console.log(id);
let url = "https://fakestoreapi.com/products";
fetch(url + "/" + id)
    .then(res => res.json())
    
    .then(json => mostrarProducto(json))
    


mostrarProducto=(json)=>{
    console.log(json);
    let card = ` 
    <div class="card">
         <img src="${json.image}">     
    </div>`;   
    document.getElementById('img').innerHTML = card;
    document.getElementsByTagName('h5')[0].innerText="$"+json.price;
    document.getElementsByTagName('h4')[0].innerText=json.title;
    document.getElementById('h3-desc').innerText=json.description;
}



