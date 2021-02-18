let burger = document.querySelector(".burger_menu");
let sideBar = document.querySelector(".sidebar");
let closeSidebar = document.querySelector(".close_sidebar");

burger.addEventListener('click', function(){
    sideBar.classList.add('sidebar_open');
});

closeSidebar.addEventListener('click', function(){
    sideBar.classList.remove('sidebar_open');
});

sideBar.addEventListener('swiped-left', function(){
    sideBar.classList.remove('sidebar_open');
});