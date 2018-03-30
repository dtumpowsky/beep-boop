var numberArr = []
var arrLength;
var newArr = []

$(document).ready(function() {
  $("form#hal").submit(function(event) {
  event.preventDefault();

  var number = $("input#userInt").val();
  var numberInt = parseInt(number);
  var numberArr = [numberInt];
  console.log(numberArr)
  console.log(numberArr.length)



  // function counting(counter) {
    for (i=0; i<numberArr.length; i--) {
      newArr[i] = numberArr.unshift(numberInt--)
      if (newArr[i] == 0) {
        break;
      }

    //   if (numberArr.length != numberInt) {
    //     numberArr.pop(numberInt--)
    //   } else {}
    console.log(newArr)
   }


console.log(counting(numberInt))


  $("#result").text(number);


  });
});
