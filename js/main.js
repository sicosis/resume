$(document).ready(function () {

  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
      moreInfo = $('#moreInfo'),
      isClosed = false;

  //click on hambuerger buttn
  trigger.click(function () {
    hamburger_cross();      
  });

  // click on button moreInfo
  moreInfo.click(function() {
    hamburger_cross();
  });

  // click on overlay to close menu
  overlay.click(function() {
    hamburger_cross();
    $('#wrapper').toggleClass('toggled');
  });

  $('[data-toggle="offcanvas"]').click(function () {
    $('#wrapper').toggleClass('toggled');
  });

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('body').on('click', '.page-scroll a', function(event) {
    event.preventDefault();
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    hamburger_cross();
    $('#wrapper').toggleClass('toggled');
  });

  $('.media').click(function(){
    var id = $(this).children('div').attr('id');
    if (id == 'deluxe'){
      window.open('http://deluxeproducciones.cl');
    }else if( id == 'agricultores_sanclemente'){
      window.open('http://angel.apical.cl/agricultores_sanclemente/');
    }
  });

  function hamburger_cross() {
    if (isClosed == true) {          
      overlay.hide();
      trigger.removeClass('is-open');
      trigger.addClass('is-closed');
      isClosed = false;
    } else {   
      overlay.show();
      trigger.removeClass('is-closed');
      trigger.addClass('is-open');
      isClosed = true;
    }
  }
  
});