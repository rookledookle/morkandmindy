$(document).ready(function(){
  console.log('ready');
  var next1 = $('#sg-next-1');
  var input = $('#input-box');
  next1.click(function(){
    console.log('next clicked');
    $('.mindy-text-1').children('.active').addClass('done').removeClass('active');
    $('.mindy-text-1').children('.hide').first().removeClass('hide').addClass('active');
    if ($('.mindy-text-1').children('.hide').first().hasClass('dy')) {
      console.log('dy coming up');
    }
    if ($('.mindy-text-1').children('.active').first().hasClass('dy')) {
      console.log(input.val());
      line = $('.mindy-text-1').children('.active').first()[0].children[0];
      line.innerText = input.val().toUpperCase();
    }
    if ($('.mindy-text-1').children('.hide').length === 0){
      console.log('last');
      $('.instagram-feed').removeClass('hide');
      $('.mindy-text-1').addClass('hide');
      $('.mindy-text-2').removeClass('hide');
    }
  });
  var next2 = $('#sg-next-2');
  next2.click(function(){
    console.log('next2 clicked');
    $('.mindy-text-2').children('.active').addClass('done').removeClass('active');
    $('.mindy-text-2').children('.hide').first().removeClass('hide').addClass('active');
    var map;
    if (input.val().toLowerCase() === 'singapore') {
      function initialize() {
        console.log('new map');
        var mapOptions = {
          zoom: 13,
          center: new google.maps.LatLng(1.3000, 103.8000)
        };
        map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
      }
      initialize();
    };
    if ($('.mindy-text-2').children('.hide').length === 0){
      console.log('last');
      $('.instagram-feed').addClass('hide');
      $('.mindy-text-2').addClass('hide');
      $('.mindy-text-3').removeClass('hide');
    }
  });
})







