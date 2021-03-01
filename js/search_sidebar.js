let searchSidebar = document.querySelector(".search_sidebar");
let backIcon = document.querySelector(".back_icon");
let openSearchSidebar = document.querySelector(".search_icon")
let sidebarSearchBar = document.querySelector(".sidebar_search_bar");
let deleteSearchSidebar = document.querySelector(".sidebar_x_circle_icon");

openSearchSidebar.addEventListener('click', function () {
    searchSidebar.classList.add("open_search_sidebar")
    body.classList.add('overflow_h');
})

backIcon.addEventListener('click', function () {
    searchSidebar.classList.remove("open_search_sidebar")
    body.classList.remove('overflow_h');
})

document.addEventListener("DOMContentLoaded", () => {
    if(sidebarSearchBar.value != ''){
        deleteSearchSidebar.classList.add('show');
    } else{
        deleteSearchSidebar.classList.remove('show');
    };
  });

deleteSearchSidebar.addEventListener('click', function(){
    sidebarSearchBar.value = '';
    deleteSearchSidebar.classList.remove('show');
});

sidebarSearchBar.addEventListener('keyup', function(){
    if(sidebarSearchBar.value != ''){
        deleteSearchSidebar.classList.add('show');
    } else{
        deleteSearchSidebar.classList.remove('show');
    };
});