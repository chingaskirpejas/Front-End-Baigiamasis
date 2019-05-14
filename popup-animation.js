$(document).ready(function () {
    $('.close').click(function (){

    })
    $(".show").mouseover(function () {
      $(".appear").hide();
      $(".show").slideUp(1000);
    })
    $(".show").mouseleave(function () {
        $(".appear").slideDown(1000);
        $(".show").slideUp(1000);
    })
})
