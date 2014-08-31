window.ADDER_SUBTRACTOR = window.ADDER_SUBTRACTOR || {};

ADDER_SUBTRACTOR.model = function() {

  var validateInput = function(x, y) {
    if (x == NaN || y == NaN) {
      return false;
    }
    else {
      return true;
    }

  }

  var calculation = function(x, y, operation) {
    if (operation == "+") {
      return x + y;
    }
    else if (operation == "-") {
      return x - y;
    }
    else {
      return null;
    }
  }

return {
  validateInput: validateInput,
  calculation: calculation
};

}();