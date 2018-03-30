var numberArr = []
var arrLength;

$(document).ready(function() {
  $("form#hal").submit(function(event) {
  event.preventDefault();

  var number = $("input#userInt").val();
  var numberInt = parseInt(number);
  var numberArr = [numberInt];
  console.log(numberArr)
  console.log(numberArr.length)



  for (i=0, i<numberArr.length, i++) {
    number
    if (numberInt = numberArr.length) {
      arrLength = 
    } else {
      .pop(numberInt--)
    }
  }




  $("#result").text(number);


  });
});
