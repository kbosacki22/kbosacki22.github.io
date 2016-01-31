$(function() {
  var sayHello = function() {window.alert ("Hello!");}

$('a.click-me').on('click', function(event) 
  {event.preventDefault();
alert('hey there!');
});
