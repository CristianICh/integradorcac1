let url = "https://fakestoreapi.com/products";

fetch(url)
    .then(res => res.json())
    .then(json => mostrarProductos(json));


