AOS.init();

$(document).ready(function(){
  $(document).scroll(function () {
    var $header = $("header");
    $header.toggleClass('scrolled', $(this).scrollTop() > $header.height());
  });
  $('#hamburger-icon').click(function(){
    $(this).toggleClass('open');
    $('.overlay').toggleClass('active');
    $('.ul-links-mobile').toggleClass('active');
  });

  $('.slideshow').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
          
        }
      }
      
    ]
  });
});


