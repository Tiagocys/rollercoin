var hamburguer = document.querySelector('.hamburguer');
var menu = document.querySelector('.menuHidden');
var x = document.querySelector('.x');

hamburguer.onclick = function(){
    menu.style.display = 'block';
};

x.onclick = function(){
    menu.style.display = 'none';
};
