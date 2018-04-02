


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

  newArr.forEach(function(number, index) {
    if (number%3==0) {
      newArr[index] = "Sorry, " + userName + " I'm afraid I can't do that.";
    } else if ((number + '').indexOf('1') > -1) {
      newArr[index] = " Boop";
    } else if ((number + '').indexOf('0') > -1) {
      newArr[index] = " Beep";
    }
  });
  $("#result").text(newArr);







  });
});
