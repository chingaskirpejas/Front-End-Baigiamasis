$(document).ready(function () {
    $(".show").mouseover(function () {
      $(".show").hide();
      $(".appear").slideDown(1000);
    });
    $(".x").click(function () {
      $(".appear").slideUp(1000);
      $(".show").slideDown(1000);
    });
});