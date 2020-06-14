$(document).ready(function () {
  $(".sm_menu_bar").click(function () {
    $("#top_menu").slideToggle(500);
  });
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
