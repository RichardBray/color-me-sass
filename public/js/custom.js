$(function(){ // document ready
 
  var stickyTop = $('.affix').offset().top; // returns number 
 
  $(window).scroll(function(){ // scroll event  
 
    var windowTop = $(window).scrollTop(); // returns number
 
    if (stickyTop < windowTop) {
      $('.affix').css({ position: 'fixed', top: 0 });
    }
    else {
      $('.affix').css('position','static');
    }
 
  });
 
});