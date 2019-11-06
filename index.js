$(document).ready(function() {
  /* Toggle Navigation Menu */
  $(".fa-bars").on("click", function(e) {
    $(".fa-bars").toggleClass("fa-times");
    $(".m-side-menu").toggleClass("m-side-menu-show");
    e.preventDefault();
  });
});
