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
/* $(document).ready(function () {
    $('[data-modal=form]').on('click', function () {
        $('.overlay, .form_modal, #form').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, .form_modal, .modal__mini, #form').fadeOut('slow');
    });
   $('#btn').on('click', function () {
        $('.form_modal, #form').fadeOut('slow');
        $('.overlay, .modal__mini').fadeIn('slow');
    })



        $('form').submit(function(e) {
          e.preventDefault();

          if (!$(this).valid()) {
            return;
          };

          $.ajax({
              type: "POST",
              url: "mailer/smart.php",
              data: $(this).serialize()
          }).done(function() {
              $(this).find("input").val("");
              $('.form_modal, #form').fadeOut('slow');
              $('.overlay, .modal__mini').fadeIn('slow');
  
              $('form').trigger('reset');
          });
          return false;
      });
    

    $('#modal-form, #contact-form').validate({
        rules: {
          name: "required",
          checkbox: "required",
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          name: "Please, enter your name.",
          checkbox: "Please, it's required.",
          email: {
            required: "I need your email address, to contact you.",
            email: "Your email address must be in the format of name@domain.com"
          }
        }
      });
  }); */
/* 
      $('#contact-form').validate({
        rules: {
          name: "required",
          checkbox: "required",
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          name: "Please, enter your name.",
          checkbox: "Please, it's required.",
          email: {
            required: "I need your email address, to contact you.",
            email: "Your email address must be in the format of name@domain.com"
          }
        }
      }); */

    

