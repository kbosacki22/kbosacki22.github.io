$(function() {

  $('a.click-me').on('click', function(event){
event.preventDefault();
var elementThatWasClicked = $(this);
console.log(elementThatWasClicked);
elementThatWasClicked.parent().remove();
}); 

});
