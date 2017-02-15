$(function(){
  $('.signin').on('click', function(){
    $('.modal').fadeIn('slow');
  });
  $('.close').on('click', function(){
    $('.modal').fadeOut('slow');
  });
  $('.submit').on('click', function(){
    $('.getstarted input').addClass('error');
  });
  $('.getstarted input').on('click', function(){
    $(this).removeAttr('class');
  });
  // $('.getstarted input').hover(function(){
  //   $(this).removeAttr('class');
  // }, function(){
  //   $(this).addClass('error');
  // });

  $('.modal').on('click', function(eventObject){
    eventObject.stopPropagation();
    $(this).fadeOut('slow');
  });
});
