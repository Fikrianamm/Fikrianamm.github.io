const hamburger = document.querySelector('.hamburger');
const doctitle = document.title;
const menu = document.querySelector('.menu');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('is-active')
    menu.classList.toggle('menu-active')
});

window.addEventListener('blur',()=>{
    document.title = "Come Back :(";
});

window.addEventListener('focus',()=>{
    document.title = doctitle;
});

window.addEventListener('scroll',()=>{
    hamburger.classList.remove('is-active')
    menu.classList.remove('menu-active')
});
