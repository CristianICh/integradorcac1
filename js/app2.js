
let carritolocal = localStorage.getItem("carritoArray");
let carrito = JSON.parse(carritolocal) || [];
const modalContainer = document.getElementById('modal-container')
console.log(carritolocal);


var id = localStorage.getItem("id");
console.log(id);
// let url = "http://127.0.0.1:5000/producto";
let url = "https://spikecarp.pythonanywhere.com/producto";

fetch(url + "/" + id)
    .then(res => res.json())

    .then(json => {

        mostrarProducto(json);
        /*carrito.push(json);*/
        console.log(carrito.length);
        console.log(carrito[1].nombre);


    });






mostrarProducto = (json) => {
    console.log(json);
    let card = ` 
    <div class="card">
         <img src="${json.image}">     
    </div>`;
    document.getElementById('img').innerHTML = card;
    document.getElementsByTagName('h5')[0].innerText = "$" + json.price;
    document.getElementsByTagName('h4')[0].innerText = json.title;
    console.log(document.getElementsByTagName('h4'));
    document.getElementById('h3-desc').innerText = json.description;



    /////////////////////////Cuotas///////////
    let trescoutas = json.price / 3;
    console.log(trescoutas.toFixed(2));

    document.getElementsByTagName('h6')[0].innerText = "3 Cuotas sin Interes de $ " + trescoutas.toFixed(2);
    console.log(document.getElementsByTagName('h6')[0].textContent);

    ///recargo del 15% en 12 cuotas
    let docecuotas = (((15 * json.price) / 100) + json.price) / 12;
    console.log(docecuotas);
    document.getElementsByTagName('h6')[1].innerText = "12 Cuotas fijas $ " + docecuotas.toFixed(2);

    /////////////////////////////////////////////////

    console.log(carrito);


    let agregar = document.getElementById('botonA');


    // const cantidad = (element) => element.id === json.id;
    // console.log(cantidad);
    agregar.addEventListener('click', () => {



        if (carrito.some((element) => element.id === json.id)) {
            console.log("si hay");

        } else {
            carrito.push({
                id: json.id,
                nombre: json.title,
                precio: json.price,
                imagen: json.image,

            })

            console.log("nohay");

        }

        console.log(carrito);
        console.log(carrito.length)

        localStorage.setItem('carritoArray', JSON.stringify(carrito));

    })





}





