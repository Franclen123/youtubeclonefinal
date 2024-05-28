var menuIcon = document.querySelector(".menu");
var sidebar = document.querySelector(".shortcut");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
}

