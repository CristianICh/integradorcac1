const { createApp } = Vue

createApp({
    data() {
        return {
            // url: "http://127.0.0.1:5000/productos",
            url: "https://spikecarp.pythonanywhere.com/productos",
            productos: [],
            error: false,
            cargando: true
        }
    },
    // Se llama después de que la instancia haya 
    // terminado de procesar todas las opciones relacionadas con el estado.
    created() {
        this.fetchData(this.url)  // Invocando al método
    },
    methods: {
        fetchData(url) {
            // Acá se consume la Api  /productos
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.productos = data;
                    console.log(productos);
                    this.cargando = false
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                });
        },
        // el id se necesita para buscar en la DB y eliminarlo
        eliminar(id) {
            // const url = 'http://localhost:5000/borrar/' + id;
            const url = 'https://spikecarp.pythonanywhere.com/borrar/' + id;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
                    alert("Eliminado correctamente")
                    location.reload();
                })
        }


    },




}).mount('#app')