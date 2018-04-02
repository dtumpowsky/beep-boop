//
//
//
//
// function identify(identity) {
//   if (identity===0) {
//     identity="Beep";
//   } else if (identity===1) {
//     identity="Beep";
//   } else {
//   }
// }
//
//
//
// $(document).ready(function() {
//   $("form#hal").submit(function(event) {
//     event.preventDefault();
//
//   var number = $("input#userInt").val();
//   var numberInt = parseInt(number);
//   var numberArr = [numberInt];
//
//
//
//   // var answer = identify(number);
//
//   $("#result").text(identify(numberInt));
// console.log(identify(numberInt))
//   });
// });
// var numberArr = []
// var arrLength;
// var newArr = [" "]
// function sub(integer1, integer2) {
//   integer1 - integer2;
// }



$(document).ready(function() {
  $("form#hal").submit(function(event) {
  event.preventDefault();

  var number = $("input#userInt").val();
  var numberInt = parseInt(number);
  var newArr = []
  var userName = $("input#userNameInput").val();



  for (var i = 0; i <= numberInt; i++) {
    newArr.push(i);
  }

console.log(newArr)
  $("#result").text(newArr);

  // for (i=0; i<numberArr.length; i--) {
  //     newArr[i] = numberArr.unshift(numberInt--)
  //     if (newArr[i] == 0) {
  //       break;
  //     }
  //   }






  });
});
