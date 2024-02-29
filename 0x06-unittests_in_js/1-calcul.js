function calculateNumber(type, a, b) {
    let output;
    if (type === "SUM") {
      output = Math.round(a) + Math.round(b);
    } else if (type === "SUBTRACT") {
      result = Math.round(a) - Math.round(b);
    } else if (type === "DIVIDE") {
      if (Math.abs(Math.round(b)) === 0) {
        output = "Error";
      } else {
        result = Math.round(a) / Math.round(b);
      }
    }
    return output;
  }
  
  module.exports = calculateNumber;
