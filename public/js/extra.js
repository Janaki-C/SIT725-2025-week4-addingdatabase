// jquery
$(document).ready(function(){
    $('.modal').modal();
  });
      
$(document).ready(function () {
  $(".colorButton-1").css("color", "red")
});

// Drop down feature in navbar
$('.dropdown-trigger').dropdown();

// Carousel 
$(document).ready(function(){
  $('.carousel').carousel();
});

// Parallax
$(document).ready(function(){
  $('.parallax').parallax();
});

// Taptarget
$(document).ready(function(){
  $('.tap-target').tapTarget();
});

// Collapsible
$(document).ready(function(){
  $('.collapsible').collapsible();
});
      
// Collor changing button

$(document).ready(function() {
  $('.colorButton').click(function() {
    $(this).css('background-color', 'red'); // Changes the button colour to red
  });
});
$(document).ready(function() {
  $('.colorButton').click(function() {
    $(this).css('background-color', 'green'); // Changes the button colour to green
  });
});
$(document).ready(function() {
  $('.colorButton1').click(function() {
    $(this).css('background-color', 'blue'); // Changes the button colour to blue
  });
});

// Floating action button
$(document).ready(function(){
  $('.fixed-action-btn').floatingActionButton();
});