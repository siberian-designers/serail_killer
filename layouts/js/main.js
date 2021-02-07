let openFilter = document.querySelector(".filter");
let popupFilter = document.querySelector(".popup_container");
let closeFilter = document.querySelector("#close_filter");
let overlay = document.querySelector(".overlay");

openFilter.addEventListener('click', function(){
    popupFilter.classList.toggle('show');
    overlay.classList.toggle('show');
});

closeFilter.addEventListener('click', function(){
    popupFilter.classList.remove('show');
    overlay.classList.remove('show');
});

document.body.addEventListener('keyup', function(e){
    let key = e.keyCode;
    if(key === 27){
        popupFilter.classList.remove('show');
        overlay.classList.remove('show');
    };  
});

overlay.addEventListener('click', function() {
    popupFilter.classList.remove('show');
    overlay.classList.remove('show');
});