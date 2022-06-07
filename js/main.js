$(function(){

  $('.range-slider__input').ionRangeSlider({
    type: "double",
    onStart: function (data) {
      $('.range-slider__up').text(data.from);
      $('.range-slider__to').text(data.to);
    },
    onChange: function (data) {
      $('.range-slider__up').text(data.from);
      $('.range-slider__to').text(data.to);
    },
  })

  $('.menu__btn, menu a').on('click', function() {
  $('.menu__list').toggleClass('menu__list--active');
});

  $('.filter__btn').on('click', function() {
  $('.shop__filters').toggleClass('shop__filters--active');
});

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    speed: 500,
    autoplay: true
  });

  $(window).scroll(function () {
  if ($(this).scrollTop()>1) {
    $('.header').addClass('fixed');
    $(`.header__inner`).addClass("sticky");
  } else {
    $('.header').removeClass('fixed');
    $(`.header__inner`).removeClass("sticky");
  }
});

});