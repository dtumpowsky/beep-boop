var numberArr = []
var arrLength;
var newArr = [" "]
function sub(integer1, integer2) {
  integer1 - integer2;
}


$(document).ready(function() {
  $("form#hal").submit(function(event) {
  event.preventDefault();

  var number = $("input#userInt").val();
  var numberInt = parseInt(number);
  var numberArr = [numberInt];


    function counting(counter) {
      for (i=0; i<numberArr.length; i++) {
        if (newArr[i].length === numberInt) {
          break;
        } else {
          newArr.unshift(sub(numberInt, 1));
        }
      }
    }


    // for (i=0; i<=numberArr.length; i++) {
    //   if (numberInt /= numberArr.length) {
    //     function(numberInt - 1)
    //   } else {


        // (newArr[i]).splice(numberInt-);
    //   }
    // }
    //   if (numberArr.length != numberInt) {
    //     numberArr.pop(numberInt--)
    //   } else {}

    console.log(counting(newArr));







  $("#result").text(number);


  });
});
