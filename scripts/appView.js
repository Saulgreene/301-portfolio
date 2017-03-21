'use strict';

var appView = {};

//Function to handle navigation through the different parts of the site.
appView.handleNavigation = function(){
  $('.main-nav').on('click', '.nav-links', function(){ //Grabs the nav-links class under the main-nav class and assigns an event handler for a click.
    $('.content-sections').hide(); //Hides all sections except top
    $('#' + $('this').data('content')).fadeIn(); //Not sure why this part of the function is not working. Everything hides correctly, but nothing reappears.
  });
};

appView.handleNavigation();

$('.hamburger').on('click', function() {
  $('.main-nav').show();
});
