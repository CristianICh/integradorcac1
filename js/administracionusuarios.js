/////////////////obtener usuario y imagen a navbar///////
let usuario_obtenido=localStorage.getItem('usuarioObtenido');
console.log(JSON.parse(usuario_obtenido));
usuario_obtenido=JSON.parse(usuario_obtenido);
console.log(usuario_obtenido.usuario);

document.getElementById('lista').children[0].textContent="¡Hola: "+usuario_obtenido.usuario+"!";

let img=document.getElementById('lista').children[1].children[0].children[0].src;
console.log(img);

switch (usuario_obtenido.sexo) {
    case "masculino":
        document.getElementById('lista').children[1].children[0].children[0].src="../imagenes/admin/hombre.png";
        break;

        case "femenino":
        document.getElementById('lista').children[1].children[0].children[0].src="../imagenes/admin/perfil.png";
        break;
    default:
        break;
}


////////////////////////////////////////////////////////////

///HEADER//
let dropdown =document.getElementById('dropdownn');
let lenguaje =document.querySelector('.lenguaje');
console.log(dropdown);
lenguaje.addEventListener('click',()=>{
    dropdown.classList.toggle("open")

});

////////////////////////Dashboard//////////
const toggle=document.querySelector('.togglee');


const menuDashboard=document.querySelector('.menu-dashboard');
const menuDashboard1=document.getElementById('menuDashboard');
console.log(menuDashboard1);
const iconoMenu= document.getElementsByClassName('bx-menu');
console.log(iconoMenu);
const iconoMenu1=toggle.querySelector('i')
console.log(iconoMenu1);
const iconoMenu2=document.getElementById('toggle-img');
console.log(iconoMenu2);
const enlacesMenu=document.querySelectorAll('.enlace')
console.log(enlacesMenu);
const enlaces=document.getElementById('menu');
console.log(enlaces);
const enlacespanel=document.getElementsByClassName('enlace')
console.log(enlacespanel);


toggle.addEventListener("click", () => {

    //abre y cierra el toggle
    menuDashboard1.classList.toggle("open");    

    
})

for (let enlace  of enlacespanel){
    enlace.addEventListener("click",(e)=>{
        // menuDashboard.classList.toggle("open");
        console.log(enlace.children[1].textContent);

        switch (enlace.children[1].textContent) {
            case "Usuarios":

                window.location.href="adminitracionusuario.html"
                
                break;
            case "Productos":

                window.location.href="administracionproductos.html"
                
                break;
        
        
            default:
                break;
        }

    })
    
}



///////////////////////////////////////










