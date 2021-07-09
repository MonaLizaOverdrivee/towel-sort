
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix.map((itm, i) => (i + 1) % 2  ? itm : itm.reverse()).flat()
}
