$(document).ready(function(){
  $('.fa-hamburger').click(function(){
  $(this).toggleClass('fa-times');
  $('nav').toggleClass('nav-toggle');
  });
  $('nav ul li a').click(function(){
   $('.fa-hamburger').removeClass('fa-times');
  $('nav').removeClass('nav-toggle');
  });
  $(window).on('scroll load',function(){
      if($(window).scrollTop() > 10){
        $('#header').addClass('header-active');
      }else{
        $('#header').removeClass('header-active');
      }
  });
});


      $('.home-slider').owlCarousel({
        loop:true,
        autoplay: true,
        margin:0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav:true,
        dots: false,
        autoplayHoverPause: false,
        items: 1,
        navText : ["<span class='fa fa-chevron-left'></span>","<span class='fa fa-chevron-right'></span>"],
        responsive:{
          0:{
            items:1
          },
          600:{
            items:1
          },
          1000:{
            items:1
          }
        }
      });
      var $owl = $('#carousel1');
      $owl.children().each(function( index ){
        $(this).attr('data-position', index)
      });
      $('.carousel-testimony').owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 45,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
      });
      
      $(document).on('click', '.owl-item>div', function(){
        var $speed = 1000;
        $owl.trigger('to.owl.carousel',[$(this).data('position'), $speed]);
      });
      // $('.carousel-testimony').owlCarousel({
      //   autoplay: true,
      //   smartSpeed: 1500,
      //   margin: 45,
      //   dots: true,
      //   loop: true,
      //   center: true,
      //   responsive: {
      //       0:{
      //           items:1
      //       },
      //       576:{
      //           items:1
      //       },
      //       768:{
      //           items:2
      //       },
      //       992:{
      //           items:3
      //       }
      //   }
      // });

        // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000
});

var spinner = function () {
  setTimeout(function () {
      if ($('#spinner').length > 0) {
          $('#spinner').removeClass('show');
      }
  }, 1);
};
spinner();
  /**
   * Events slider
   */
   new Swiper('.events-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });
