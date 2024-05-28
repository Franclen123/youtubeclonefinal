var menuIcon = document.querySelector(".menu");
var sidebar = document.querySelector(".sidebar");

menuIcon.onClick = function(){
    shortcut.classList.toggle("small-sidebar"); 
    ContainerRule.classList.toggle("Large-container");
    
}