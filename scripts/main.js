jQuery(document).ready(function(){
  var analogclock = new analogClock();
  var colorbackground = new colorBackground();
  window.setInterval(function(){
    analogclock.run();
    colorbackground.run();
    }, 1000);
});

function analogClock(){}
analogClock.prototype.run = function() {
	var date = new Date();
  var second = date.getSeconds()* 6;
  var minute = date.getMinutes()* 6 + second / 60;
  var hour = ((date.getHours() % 12) / 12) * 360 + 90 + minute / 12;
  jQuery('#hour').css("transform", "rotate(" + hour + "deg)");
  jQuery('#minute').css("transform", "rotate(" + minute + "deg)");
  jQuery('#second').css("transform", "rotate(" + second + "deg)");
};

function colorBackground(){}
colorBackground.prototype.run = function() {
  function checkTime(i) {
    if (i<10) {
      i = "0" + i;
    }
    return i;
  }
  var date = new Date();
  var h = checkTime(date.getHours());
  var m = checkTime(date.getMinutes());
  var s = checkTime(date.getSeconds());
  var twentyFour = 10.625;
  var sixty = 4.25;
  var c1 = Math.round(twentyFour*h).toString(16);
  var c2 = Math.round(sixty*m).toString(16);
  var c3 = Math.round(sixty*s).toString(16);

  while (c1.length != 2){
    c1 = "0"+c1;
  }
  while (c2.length != 2){
    c2 = "0"+c2;
  }
  while (c3.length != 2){
    c3 = "0"+c3;
  }
  $('body').css('background-color', "#" + c1 + c2 + c3);
};

$(function(){
  $('.clock-circle').css('position','absolute');
  $('.clock-circle').css('top', Math.max(0, (($(window).height() - $('.clock-circle').outerHeight()) / 2) + $(window).scrollTop()) + "px");
  $('.clock-circle').css('left', Math.max(0, (($(window).width() - $('.clock-circle').outerWidth()) / 2) + $(window).scrollLeft()) + "px");

  $(window).resize(function() {
    $('.clock-circle').css('position','absolute');
    $('.clock-circle').css('top', Math.max(0, (($(window).height() - $('.clock-circle').outerHeight()) / 2) + $(window).scrollTop()) + "px");
    $('.clock-circle').css('left', Math.max(0, (($(window).width() - $('.clock-circle').outerWidth()) / 2) + $(window).scrollLeft()) + "px");
  });
});

$(function(){
  var viewportWidth = $(window).width();
  var viewportHeight = $(window).height();

  $('body').css('height', viewportHeight + 'px');
  $('body').css('width', viewportWidth + 'px');

  $(window).resize(function() {
      var viewportWidth = $(window).width();
      var viewportHeight = $(window).height();

      $('body').css('height', viewportHeight + 'px');
      $('body').css('width', viewportWidth + 'px');
  });
});
