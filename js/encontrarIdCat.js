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

