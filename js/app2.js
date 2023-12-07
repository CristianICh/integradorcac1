

var id = localStorage.getItem("id");
console.log(id);
// let url = "http://127.0.0.1:5000/producto";
let url = "https://spikecarp.pythonanywhere.com/producto";
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



