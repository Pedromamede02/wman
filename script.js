let menu = document.getElementById("menu");
let navbar = document.getElementById("navbar");
menu.addEventListener('click',()=>{
    menu.classList.toggle("active");
    navbar.classList.toggle("active")
})

