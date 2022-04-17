$(document).ready(function(){
    $('.dropdown').click(function(event){
        event.preventDefault
        $('.dropdown-open').toggle()
    });

   
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        speed:500,
        loop: true,
    
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

      });

      $('.top a').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
          scrollTop: 0
        }, 500);
       });
});