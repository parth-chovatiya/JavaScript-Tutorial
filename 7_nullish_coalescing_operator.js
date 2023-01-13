let a, b = false, c;

let result_1 = a ?? b ?? c ?? "Unkown"
let result_2 = a || b || c || "Unkown"

console.log(result_1)
console.log(result_2)

// Difference b/w ?? and ||
// ?? will return first defined value
// || will return first truthy value

// Due to safety reasons, JavaScript forbids using ?? together with && and || operators, unless the precedence is explicitly specified with parentheses.
// let x = 1 && 2 ?? 3; // Syntax error
// let x = (1 && 2) ?? 3; // Works

let num_1 = null
let x = num_1 ??= 3 // x = num_1 ?? 3

let num_2 = 4
let y = num_2 ??= 6 // y = num_2 ?? 6