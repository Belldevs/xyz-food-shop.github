// Swiper
var swiper = new Swiper(".home", {
spaceBetween: 30,
centeredSlides:true,

navigation:{
nextEl:".swiper-button-next",
prevEl:".swiper-button-prev",
},
});

let menu =document.querySelector('#menu-icon');
let navbar=document.querySelector('#.nav-bar');

menu.onclick=()=>{
    menu.classlist.toggle('bx-x');
    nav-bar.classlist.toggle('active');
}
window.onscroll=()=>{
    menu.classlist.remove('bx-x');
    nav-bar.classlist.remove('active');
}