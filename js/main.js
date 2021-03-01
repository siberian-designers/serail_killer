let openFilter = document.querySelector(".filter");
let popupFilter = document.querySelector(".popup_container");
let closeFilter = document.querySelector("#close_filter");
let closeFilterIcon = document.querySelector(".close_filter_icon");
let overlay = document.querySelector(".overlay");
let bottomSheet = document.querySelector(".bottom_sheet");
let openBottom = document.querySelector(".filter_mobile");
let touchBar = document.querySelector(".touch_bar_container");
let body = document.querySelector("body");

//filters + bottom sheet

openFilter.addEventListener('click', function(){
    popupFilter.classList.toggle('show');
    popupFilter.classList.toggle('open_bottom_sheet');
    overlay.classList.toggle('show');
    popupFilter.classList.toggle('open_bsh_full');
    elasticResults.classList.remove('show_display');
    
});

closeFilter.addEventListener('click', function(){
    popupFilter.classList.remove('show');
    overlay.classList.remove('show');
    popupFilter.classList.remove('open_bottom_sheet');
    popupFilter.classList.remove('open_bsh_full');
    closeFilterIcon.classList.remove('show_display');
    touchBar.classList.remove('hide_display');
});

closeFilterIcon.addEventListener('click', function(){
    popupFilter.classList.remove('show');
    overlay.classList.remove('show');
    popupFilter.classList.remove('open_bottom_sheet');
    popupFilter.classList.remove('open_bsh_full');
    closeFilterIcon.classList.remove('show_display');
    touchBar.classList.remove('hide_display');
    body.classList.remove('overflow_h');
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
    popupFilter.classList.remove('open_bottom_sheet');
    popupFilter.classList.remove('open_bsh_full');
    elasticResults.classList.remove('show_display');

});

openBottom.addEventListener('click', function () {
    popupFilter.classList.toggle('show');
    popupFilter.classList.toggle('open_bottom_sheet');
    overlay.classList.add('show');
    elasticResults.classList.remove('show_display');
    body.classList.add('overflow_h');
});


popupFilter.addEventListener('swiped-up', function(){
    popupFilter.classList.remove('open_bottom_sheet');
    popupFilter.classList.add('open_bsh_full');
    touchBar.classList.add('hide_display');
    closeFilterIcon.classList.add('show_display');
});

touchBar.addEventListener('swiped-down', function(){
  popupFilter.classList.remove('open_bsh_full');
  popupFilter.classList.remove('open_bottom_sheet');
  popupFilter.classList.toggle('show');
  closeFilterIcon.classList.remove('show_display');
  touchBar.classList.remove('hide_display');
  body.classList.remove('overflow_h');
});