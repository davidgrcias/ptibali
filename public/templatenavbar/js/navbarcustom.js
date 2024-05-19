$(window).on("scroll", function () {
  if ($(window).scrollTop() > 35) {
    $("header").addClass("fixed");
    //$('.page-header').addClass('hide-header');
  } else {
    $("header").removeClass("fixed");
    //$('.page-header').removeClass('hide-header');
  }
});
