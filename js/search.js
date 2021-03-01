let searchBar = document.querySelector(".search_bar");
let clearSearch = document.querySelector(".x_circle_icon");
let elasticResults = document.querySelector(".elastic_search_container");

searchBar.addEventListener('click', function(){
    elasticResults.classList.add('show_display');
    overlay.classList.add('show');
    popupFilter.classList.remove('show');
    popupFilter.classList.remove('open_bsh_full');
    popupFilter.classList.remove('open_bottom_sheet');
    closeFilterIcon.classList.remove('show_display');
    touchBar.classList.remove('hide_display');
});

searchBar.addEventListener('keyup', function(e){
    let key = e.keyCode;
    if(key === 13){
        window.location.href = 'search_result.html';
    };  
});