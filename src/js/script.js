//slider

let items = document.querySelectorAll('.slider .slider__item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .thumbnail__item');

let countItem = items.length;
let itemActive = 0;

next.onclick = function() {
    itemActive = itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}


prev.onclick = function() {
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showSlider();
}

let refreshInterval = setInterval(() => {
    next.click(0);
}, 3000)


function showSlider(){
    let itemActiveOld = document.querySelector('.slider .slider__item.active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .thumbnail__item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');


    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 4000)
}

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();
    })
});


//modal
$(document).ready(function () {
    $('[data-modal=form]').on('click', function () {
        $('.overlay, .form_modal, #form').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, .form_modal, .modal__mini, #form').fadeOut('slow');
    })
    $('.btn_form').on('click', function () {
        $('.form_modal, #form').fadeOut('slow');
        $('.overlay, .modal__mini').fadeIn('slow');
    })

    $(".form").submit(function(e) {
        e.preventDefault();
    });
});


