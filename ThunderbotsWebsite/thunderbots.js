//not sure if I have to title these js files with anything lol

$(function(){
  if($(window).scrollTop() > 0){
    $("#menu").removeClass("menu-top");
    $("#menu").addClass("menu-follow");
  }
  else {
    $("#menu").removeClass("menu-follow");
    $("#menu").addClass("menu-top");
  }

  $(window).scroll(function(){
    console.log($(window).scrollTop());
    if($(window).scrollTop() > 0){
      $("#menu").removeClass("menu-top");
      $("#menu").addClass("menu-follow");
    }
    else {
      $("#menu").removeClass("menu-follow");
      $("#menu").addClass("menu-top");
    }
  })
})