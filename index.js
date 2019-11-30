$(document).ready(function() {
  /* Toggle Navigation Menu */
  $(".fa-bars").on("click", function(e) {
    $(".fa-bars").toggleClass("fa-times");
    $(".mobile-side-menu").toggleClass("mobile-side-menu-active");
    e.preventDefault();
  });

  setInterval(function() {
    var docHeight = $(window).height();
    var footerHeight = $("#footer").height();
    var footerTop = $("#footer").position().top + footerHeight;
    var marginTop = docHeight - footerTop + 10;

    if (footerTop < docHeight) $("#footer").css("margin-top", marginTop + "px");
    // padding of 30 on footer
    else $("#footer").css("margin-top", "0px");
    // console.log("docheight: " + docHeight + "\n" + "footerheight: " + footerHeight + "\n" + "footertop: " + footerTop + "\n" + "new docheight: " + $(window).height() + "\n" + "margintop: " + marginTop);
  }, 0);
});
