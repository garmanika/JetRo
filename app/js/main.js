$(function(){

  $('.slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/prev.svg" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/next.svg" alt=""></button>',
    asNavFor: '.slider__min',
    responsive: [
      {
        breakpoint: 950,
        settings: {
       arrows:false
        }
      },
          ]
  });
  $('.slider__min').slick({
    arrows: false,
    asNavFor: '.slider__inner',
    slidesToShow: 6,
    slidesToScroll: 6,
    centerMode: false,
    focusOnSelect: true,
    centerPadding: '50px',
    variableWidth: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          centerMode: true,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 5
         
        }
      }
          ]
  });
  $('.header__menu-btn').on('click', function(){
    $('.header__navigation > ul').slideToggle();
  });

  $('.works__inner').slick({
    slidesToShow: 4,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
          ]
  });
  $('.blog-slider').slick({
    slidesToShow: 1,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/prev.svg" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/next.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 950,
        settings: {
          arrows: false,
        }
      },
          ]
  });
  $('.plugin__inner').slick({
    slidesToShow: 1,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  });
    



  var mixer = mixitup('.portfolio__inner-box');
  });
  

    
    
