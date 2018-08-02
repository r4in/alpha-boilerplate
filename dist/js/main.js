// Portfolio Slider
$(document).ready(function() {
  $(".slider-tracks").slick({
    infinite: true,
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 30000,
    arrows: false,
    speed: 300,
    cssEase: "linear",
    adaptiveHeight: true
  });
});

$("#btn-prev").click(function(t) {
  t.preventDefault();
  $(".slider-tracks").slick("slickPrev");
});
$("#btn-next").click(function(t) {
  t.preventDefault();
  $(".slider-tracks").slick("slickNext");
});

// Testimonial Slider
$(document).ready(function() {
  $(".testimonial-slider").slick({
    infinite: true,
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    speed: 300,
    cssEase: "linear",
    adaptiveHeight: true
  });
});

$("#btn-prev").click(function(t) {
  t.preventDefault();
  $(".slider-tracks").slick("slickPrev");
});
$("#btn-next").click(function(t) {
  t.preventDefault();
  $(".slider-tracks").slick("slickNext");
});

// Gallery Slider
$(document).ready(function() {
  $(".gallery-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
});

$("#btn-prev").click(function(t) {
  t.preventDefault();
  $(".gallery-slider").slick("slickPrev");
});
$("#btn-next").click(function(t) {
  t.preventDefault();
  $(".gallery-slider").slick("slickNext");
});

// Feedback Slider
$(document).ready(function() {
  $(".feedback-slider1").slick({
    infinite: true,
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    speed: 300,
    cssEase: "linear",
    adaptiveHeight: true
  });
});

$("#btn-prev").click(function(t) {
  t.preventDefault();
  $(".slider-tracks").slick("slickPrev");
});
$("#btn-next").click(function(t) {
  t.preventDefault();
  $(".slider-tracks").slick("slickNext");
});

$(document).ready(function() {
  var sticky = new Sticky("#track-menu");
});

$("#btn1").click(function(t) {
  $("#btn1").addClass("active");
  $("#btn2").removeClass("active");
  $("#btn3").removeClass("active");
});

$("#btn2").click(function(t) {
  $("#btn2").addClass("active");
  $("#btn1").removeClass("active");
  $("#btn3").removeClass("active");
});

$("#btn3").click(function(t) {
  $("#btn3").addClass("active");
  $("#btn1").removeClass("active");
  $("#btn2").removeClass("active");
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000,
          function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);

            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });

$("#toggle").click(function() {
  $(this).toggleClass("active");
  $("#overlay").toggleClass("open");
});
