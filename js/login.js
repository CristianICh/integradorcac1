
let usuariologin = document.getElementById('usuario');
let passlogin = document.getElementById('pass');

function loguearse() {
    console.log(usuariologin.value, passlogin.value);

    let usuarioingresado = {
        usuario: usuariologin.value,
        pass: passlogin.value
    }
    console.log(usuarioingresado);


    // let url = "http://127.0.0.1:5000/login";
    let url = "https://spikecarp.pythonanywhere.com/login";

    var options = {
        body: JSON.stringify(usuarioingresado),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }

    fetch(url, options)
        .then(res => res.json())
        .then(json => {
            console.log(json)

            usuarioJson=JSON.stringify(json);
            console.log(usuarioJson);
            localStorage.setItem('usuarioObtenido',usuarioJson);
           


            window.location.href = "templates/bienvenidos.html";
        })
        .catch(err => {
            //this.errored = true
            alert("Error al loguearse")
            console.error(err);
        })








}
