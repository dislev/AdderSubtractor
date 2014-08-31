$(document).ready(function() {
  $(':button').click(function() {
    $('#results.p').empty();

    var x = Number($('#value_x').val());
    var y = Number($('#value_y').val());
    
    if (ADDER_SUBTRACTOR.model.validateInput(x,y)) {
      var operation = $(this).attr('value');
      displayResult(x, y, operation);
    }
    else {
      $('#results p').text("Please Enter a Valid Number");
    }

    });

  function displayResult(x, y, operation) {
    var operationWord = (operation == "+" ? "plus" : "minus");
    var result = ADDER_SUBTRACTOR.model.calculation(x,y,operation);
    $('#results p').text(x + " " + operationWord + " " + y + " is " + result);
  }


});