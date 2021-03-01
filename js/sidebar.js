let burger = document.querySelector(".burger_menu");
let sideBar = document.querySelector(".sidebar");
let closeSidebar = document.querySelector(".close_sidebar");
let body = document.querySelector("body");

burger.addEventListener('click', function(){
    sideBar.classList.add('sidebar_open');
    body.classList.add('overflow_h');
});

closeSidebar.addEventListener('click', function(){
    sideBar.classList.remove('sidebar_open');
    body.classList.remove('overflow_h');
});

sideBar.addEventListener('swiped-left', function(){
    sideBar.classList.remove('sidebar_open');
    body.classList.remove('overflow_h');
});