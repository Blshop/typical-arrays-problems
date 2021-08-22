
exports.min = function min(array) {
  try { if (array[0] == undefined) { return 0 } }
  catch (error) {
    return 0
  }
  return array.reduce((a, b) => Math.min(a, b));
}

exports.max = function max(array) {
  try { if (array[0] == undefined) { return 0 } }
  catch (error) {
    return 0
  }
  return array.reduce((a, b) => Math.max(a, b));
}

exports.avg = function avg(array) {
  try { if (array[0] == undefined) { return 0 } }
  catch (error) {
    return 0
  }
  return array.reduce((a, b) => a + b) / array.length;
}
