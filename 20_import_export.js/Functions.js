const Sum = (...arr) => arr.reduce((sum, element) => sum + element, 0);

const Multiply = (...arr) => arr.reduce((mul, element) => mul * element, 1);

module.exports = { Sum, Multiply };
