

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
  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var num3 = parseInt($("#sub1").val());
    var num4 = parseInt($("#sub2").val());
    var result2 = subtract(num3, num4);

    $("#output2").text(result2);
  });
  $("form#multiply").submit(function(event) {
    event.preventDefault();
    var num3 = parseInt($("#mult1").val());
    var num4 = parseInt($("#mult2").val());
    var result2 = multiply(num3, num4);

    $("#output3").text(result2);
  });
  $("form#divide").submit(function(event) {
    event.preventDefault();
    var num3 = parseInt($("#div1").val());
    var num4 = parseInt($("#div2").val());
    var result2 = divide(num3, num4);

    $("#output4").text(result2);
  });
});
