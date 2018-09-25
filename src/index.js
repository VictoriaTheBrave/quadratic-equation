module.exports = function solveEquation(equation) {
  const array = equation.split(' ');
  const a = array[0];
  const b = array[3] + array[4]; 
  const c = array[7] + array[8];
  const dRoot = Math.sqrt(Math.pow(b,2) - (4 * a * c));
	const x1 = Math.round(eval((- b + dRoot) / (2 * a)));
  const x2 = Math.round(eval((- b - dRoot) / (2 * a)));
  const result = [];
  result.push(x1, x2);
  result.sort(function(a, b){return a - b});
  return result;
}
