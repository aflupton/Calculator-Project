

    // below this line is back-end logic //
    var add = function(add1, add2) {
      return add1 +  add2;
    };
    var subtract = function(add1, add2) {
      return add1 - add2;
    };
    var multiply = function(add1, add2) {
      return add1 * add2;
    };
    var divide = function(add1, add2) {
      return add1 / add2;
    };

    // below this line is front-end logic //
$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();

    var num1 = parseInt($("#add1").val());
    var num2 = parseInt($("#add2").val());
    var result = add(num1, num2);
    $("#output").text(result);


  });
});
