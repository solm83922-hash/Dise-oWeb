const btnMenu = document.querySelector('.btn-menu');
const icon = btnMenu.querySelector('i');
const menu = document.querySelector('.list-container');

let abierto = false;

btnMenu.addEventListener('click', () => {
    if (!abierto) {
        menu.style.left = "0%";
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        abierto = true;
    } else {
        menu.style.left = "-100%";
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        abierto = false;
    }
});

//Efectos Scroll
let prevScrollPos = window.pageYOffset;
window.onscroll = () =>{
//Mostrar y Ocultar Menú
let currentScrollPos = window.pageYOffset;
if (prevScrollPos > currentScrollPos) {
menuContent.style.top = '0px';
menuContent.style.transition = '0.5s';
}else{
menuContent.style.top = '-60px';
menuContent.style.transition = '0.5s';
}
prevScrollPos = currentScrollPos;
}
