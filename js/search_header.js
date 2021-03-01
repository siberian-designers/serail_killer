let searchBar = document.querySelector(".search_bar");
let clearSearch = document.querySelector(".x_circle_icon");
let elasticResults = document.querySelector(".elastic_search_container");
let overlay = document.querySelector(".overlay");
let deleteSearch = document.querySelector(".x_circle_icon");

document.addEventListener("DOMContentLoaded", () => {
    if(searchBar.value != ''){
        deleteSearch.classList.add('show');
    } else{
        deleteSearch.classList.remove('show');
    };
  });

searchBar.addEventListener('click', function(){
    elasticResults.classList.add('show_display');
    overlay.classList.add('show');
});

searchBar.addEventListener('keyup', function(){
    if(searchBar.value != ''){
        deleteSearch.classList.add('show');
    } else{
        deleteSearch.classList.remove('show');
    };
});

deleteSearch.addEventListener('click', function(){
    searchBar.value = '';
    deleteSearch.classList.remove('show');
});

overlay.addEventListener('click', function() {
    overlay.classList.remove('show');
    elasticResults.classList.remove('show_display');
});