// javascript wizardry
jQuery(function($) {

  //navbar coloring
  $(document).ready(function(){
   var scroll_start = 0;
   var startchange = $('#about');
   var offset = startchange.offset();
    if (startchange.length){
     $(document).scroll(function() {
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            $('header ul li a').css('color', '#292b3c');
            $('header').css('border-bottom', '3px solid #292b3c');
         } else {
            $('header ul li a').css('color', '#fff');
            $('header').css('border-bottom', '3px solid #fff');
         }
     });
      }
  });

  //smooth scrolling
  $('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			var topbar = $('.top-bar').height();
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if ( this.hash != '#site-navigation' && $(window).width() > 1024 ) {
				if (target.length) {
				$('html,body').animate({
				scrollTop: target.offset().top - topbar + 40
				}, 800);
				return false;
				}
			} else {
				if (target.length) {
				$('html,body').animate({
				scrollTop: target.offset().top
				}, 800);
				return false;
				}
			}
		}
	});

  //rocket animation
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        // apply effects and animations
    }
  });

  //click fill animation
  var parent, ink, d, x, y;
  $('.planetary-container').click(function(e){
    parent = $(this).parent();
    //create .ink element if it doesn't exist
    if(parent.find(".ink").length == 0)
      parent.prepend("<span class='ink'></span>");

    ink = parent.find(".ink");
    //incase of quick double clicks stop the previous animation
    ink.removeClass("animate");

    //set size of .ink
    if(!ink.height() && !ink.width())
    {
      //use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
      d = Math.max(parent.outerWidth(), parent.outerHeight());
      ink.css({height: d, width: d});
    }

    //get click coordinates
    //logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
    x = e.pageX - parent.offset().left - ink.width()/2;
    y = e.pageY - parent.offset().top - ink.height()/2;

    //set the position and add class .animate
    ink.css({top: y+'px', left: x+'px'}).addClass("animate");
  })
  parent, ink, d, x, y = '';

  //click fill animation
  var parent, ink, d, x, y;
  $('.animation-container').click(function(e){
  	parent = $(this).parent();
  	//create .ink element if it doesn't exist
  	if(parent.find(".ink").length == 0)
  		parent.prepend("<span class='ink'></span>");

  	ink = parent.find(".ink");
  	//incase of quick double clicks stop the previous animation
  	ink.removeClass("animate");

  	//set size of .ink
  	if(!ink.height() && !ink.width())
  	{
  		//use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
  		d = Math.max(parent.outerWidth(), parent.outerHeight());
  		ink.css({height: d, width: d});
  	}

  	//get click coordinates
  	//logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
  	x = e.pageX - parent.offset().left - ink.width()/2;
  	y = e.pageY - parent.offset().top - ink.height()/2;

  	//set the position and add class .animate
  	ink.css({top: y+'px', left: x+'px'}).addClass("animate");
  })
  parent, ink, d, x, y = '';


});
