

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
    console.log(document.getElementsByTagName('h4'));
    document.getElementById('h3-desc').innerText=json.description;
    


    /////////////////////////Cuotas///////////
    let trescoutas= json.price/3;
    console.log(trescoutas.toFixed(2));

    document.getElementsByTagName('h6')[0].innerText="3 Cuotas sin Interes de $ "+trescoutas.toFixed(2);
    console.log(document.getElementsByTagName('h6')[0].textContent);

    ///recargo del 15% en 12 cuotas
    let docecuotas=(((15*json.price)/100)+json.price)/12;
    console.log(docecuotas);
    document.getElementsByTagName('h6')[1].innerText="12 Cuotas fijas $ "+docecuotas.toFixed(2)
}



