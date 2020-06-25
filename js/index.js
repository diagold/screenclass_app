$(document).ready(function () {
  if ($(window).width() < 768) {
  $(".sm_menu_bar").click(function () {
    $("#top_menu").slideToggle(500);
    $("html, body").toggleClass("body-overflow");
  });
}
});

// Add shadow on scroll after 60px
$(window).scroll(function(e){
   if ($(this).scrollTop() > 60){
       $('header').addClass('scrolled');
   } else {
       $('header').removeClass('scrolled');
   }
});

$("#test_slid").owlCarousel({
  loop: true,
  pagination: true,
  nav: true,
  navText: [
    '<i class="fas fa-angle-left"></i>',
    '<i class="fas fa-angle-right"></i>',
  ],
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  autoplaySpeed: 3500,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});


var owl = $(".owl-carousel");
owl.owlCarousel();
// Go to the next item
$(".next").click(function () {
  owl.trigger("next.owl.carousel");
});
// Go to the previous item
$(".prev").click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger("prev.owl.carousel", [500]);
});

$(function () {
  $(".acc__title").click(function (j) {
    var dropDown = $(this).closest(".acc__card").find(".acc__panel");
    $(this).closest(".acc").find(".acc__panel").not(dropDown).slideUp();

    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).closest(".acc").find(".acc__title.active").removeClass("active");
      $(this).addClass("active");
    }

    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });
});
 