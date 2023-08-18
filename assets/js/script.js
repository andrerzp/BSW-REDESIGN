$(document).ready(function () {
  $("#sidebar-toggle, .sidebar-overlay").click(function () {
    $(".sidebar").toggleClass("sidebar-show");
    $(".sidebar-overlay").toggleClass("d-block");
  });

  $(".sidebar-items .submenu-items").click(function () {
    $(".sidebar-items .submenu-items").removeClass("active");
    $(this).toggleClass("active");
  });

  function clickMenu(goId, title) {
    $(goId).click(function (e) {
      e.preventDefault();

      $(".sidebar-items .items").removeClass("active");
      $(".sidebar-items .submenu a").removeClass("active");
      $(this).addClass("active");
    });
  }
});
