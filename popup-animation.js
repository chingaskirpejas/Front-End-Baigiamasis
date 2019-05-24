$(document).ready(function () {
    $(".show").mouseover(function () {
      // $(".appear").hide(10);
      $(".show").slideUp(1000);
      $(".appear").slideDown(1000);
      $(".show").slideUp(1000);
    });
    $(".x").click(function () {
      $(".appear").slideUp(1000);
      $(".show").slideDown(1000);
    });
//     $('.arrow'.click(function(){
//         // if ($('.slide').css('display') == 'block'){
//         //     $(".appear").slideUp(1000);
//         //     $(".show").slideDown(1000);
//         // }else {
//         //     alert('lol');
//         // }
//         alert("lol");
//     });
});
