var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper2 = new Swiper('.swiper2', {
  slidesPerView: 5,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

$(window).scroll(function(event){
  var scroll = $(window).scrollTop();

  if (scroll >= 1) {
    $("#top").addClass("show");
    $("#sidebar_top").addClass("sidebartop");
    $(".butonup").addClass("buton__top");
  } else {
    $("#top").removeClass("show");
    $("#sidebar_top").removeClass("sidebartop");
    $(".butonup").removeClass("buton__top");
  }
});

$('a[href="#top"]').on('click',function(){
    $('html, body').animate({scrollTop: 0}, 'slow');
    return false;
});