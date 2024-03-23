const pintarCarrito=()=>{
    
    modalContainer.style.display = "flex";
    modalContainer.innerHTML = "";

    const modalHeader = document.createElement('div');
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Productos seleccionados</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x cerrar";
    modalbutton.className = "modal-header-button";

    modalHeader.append(modalbutton);
    modalbutton.addEventListener('click', () => {
        modalContainer.style.display = "none";
    })

    carrito.forEach(product => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
        <img src="${product.imagen}">
        <h3>${product.nombre}</h3>
        <p>$${product.precio}</p>
        `;
        modalContainer.append(carritoContent);

        let eliminar = document.createElement("span");
        eliminar.className = "delete-product";
        let imgEliminar = document.createElement("img");
        imgEliminar.src = "imagenes/borrar.png"
        eliminar.append(imgEliminar);
       

        carritoContent.append(eliminar);
        eliminar.addEventListener("click",()=>{
            eliminarPoducto(product.id);
        })


    });
    const total = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio, 0)

    console.log(total);
    const totalFooter = document.createElement("div");
    totalFooter.className = "total-content";
    totalFooter.innerHTML = `total a pagar: $${total}`;
    modalContainer.append(totalFooter);

    console.log(carrito);
    console.log(carrito.length)
    // console.log(carrito[7].nombre)

}
let comprar = document.getElementById('botonC');
comprar.addEventListener('click',pintarCarrito);


//----------------funcion para eeliminar producto del carrito
const eliminarPoducto=(id)=>{
    const  idObtenido = carrito.find((element)=>element.id===id)

    console.log(id);
    console.log(idObtenido);
    const arreglo=carrito.filter(productoid =>productoid.id != id )
    console.log(arreglo);
    carrito=arreglo;
    localStorage.setItem('carritoArray', JSON.stringify(carrito));
    pintarCarrito();


}