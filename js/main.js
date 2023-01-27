$(function(){

    $('.header__slider').slick({
        infinite: true, //чтобы слайдер был зациклен
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows-left" src="images/arrows-left.svg" alt="arrows-right">',
        nextArrow: '<img class="slider-arrows slider-arrows-right" src="images/arrows-right.svg" alt="arrows-right">',
        asNavFor: '.slider-dotshead' // связывающая строка
    }); 

    $('.slider-dotshead').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider', // связывающая строка
        responsive:[
          {
            breakpoint: 961,
            settings: 'unslick'
          },
        ]
    });

    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows-left" src="images/arrows-left.svg" alt="arrows-right">',
        nextArrow: '<img class="slider-arrows slider-arrows-right" src="images/arrows-right.svg" alt="arrows-right">',
        asNavFor: '.slider-map',
        responsive:[
          {
            breakpoint: 1210,
            settings:{
              slidesToShow: 3
            }
          },
          {
            breakpoint: 900,
            settings:{
              slidesToShow: 2
            }
          },
          {
            breakpoint: 720,
            settings:{
              slidesToShow: 1,
              centerMode: true
            }
          },
          {
            breakpoint: 426,
            settings:{
              slidesToShow: 1,
              centerMode: false
            }
          }
        ]
    });

    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true,
        responsive:[
          {
            breakpoint: 1103,
            settings:{
              slidesToShow: 3
            }
          },
          {
            breakpoint: 900,
            settings:{
              slidesToShow: 2,
              centerMode: true
            }
          },
          {
            breakpoint: 720,
            settings:{
              slidesToShow: 1,
              centerMode: true
            }
          }
        ]
    });

    $('.holder__slider, .shop__slider').slick({
        infinite: true, //чтобы слайдер был зациклен
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows-left" src="images/arrows-left.svg" alt="arrows-right">',
        nextArrow: '<img class="slider-arrows slider-arrows-right" src="images/arrows-right.svg" alt="arrows-right">',
    });



    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="images/plus.svg" alt="star.svg"></div><div class="quantity-button quantity-down"><img src="images/minus.svg" alt="star.svg"></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });




    $('.quantity-button').on('click', function(){
        let sum = $('.nights').val() * $('.sum').data('nights') + ($('.quests').val() - 1) * $('.sum').data('quests');
    $('.sum').html('$' + sum);
    });

    let sum = $('.nights').val() * $('.sum').data('nights') + ($('.quests').val() - 1) * $('.sum').data('quests');
    $('.sum').html('$' + sum);



    // $('.quantity-button').on('click', function(){

    //   var parents = $(this).parents('.holder-slider__info');
      
    //    let sum = $('.sum', parents).data('nights') * $('.nights', parents).val() + $('.sum', parents).data('guests') * $('.guests', parents).val();
      
    //    $('.sum', parents).html('$' + sum);
      
    //   });
      
      
    //   $('.quantity').each(function() {
      
    //   var parents = $(this).parents('.holder-slider__info');
      
    //   let sum = $('.sum', parents).data('nights') * $('.nights', parents).val() + $('.sum', parents).data('guests') * $('.guests', parents).val();
      
    //    $('.sum', parents).html('$' + sum);
      
    //   });



    $('.surfboard-box__circle').on('click', function(){
      $(this).toggleClass('active')
    });


    $('.menu-btn').on('click', function(){
      $('.menu').toggleClass('active');
  });

  new WOW().init();

});