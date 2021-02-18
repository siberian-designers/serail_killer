let searchBar = document.querySelector(".search_bar");
let clearSearch = document.querySelector(".x_circle_icon");
let elasticResults = document.querySelector(".elastic_search_container");
let overlay = document.querySelector(".overlay");

searchBar.addEventListener('click', function(){
    elasticResults.classList.add('show_display');
    overlay.classList.add('show');
});

overlay.addEventListener('click', function() {
    overlay.classList.remove('show');
    elasticResults.classList.remove('show_display');
});