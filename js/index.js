$(document).ready(function() {
  /* Toggle Navigation Menu */
  $(".fa-bars").on("click", function(e) {
    $(".fa-bars").toggleClass("fa-times");
    $(".mobile-side-menu").toggleClass("mobile-side-menu-active");
    e.preventDefault();
  });
});
