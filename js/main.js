$(function(){
  $('.signin').on('click', function(){
    $('.modal').fadeIn('slow');
  });
  $('.close').on('click', function(eventObject){
    eventObject.stopPropagation();
    $('.modal').fadeOut('slow');
  });
  $('.submit').on('click', function(eventObject){
    eventObject.stopPropagation();
    $('.getstarted input').addClass('error');
  });
  $('.getstarted input').on('click', function(eventObject){
    eventObject.stopPropagation();
    $(this).removeAttr('class');
  });
  // $('.getstarted input').hover(function(){
  //   $(this).removeAttr('class');
  // }, function(){
  //   $(this).addClass('error');
  // });

  $('.modal').on('click', function(eventObject){
    // eventObject.stopPropagation();
    $(this).fadeOut('slow');
  });
});
