// html elements

let navbar = document.getElementById('nav-url-container');
let navToggleIcon = document.getElementById('nav-toggle-icon');


function toggleNavigation(){
    if(navbar.classList.contains('flex_hidden')){
        navbar.classList.remove('flex_hidden');
        navbar.classList.add('flex_show');
        navToggleIcon.classList.add('bx-x');
    }
    else{
        navbar.classList.remove('flex_show')
        navbar.classList.add('flex_hidden')
        navToggleIcon.classList.remove('bx-x');
    }

}