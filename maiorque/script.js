const isGreaterThan = new Function ('x, y', 'return x === y || x > y ? "True": "False"')

console.log(isGreaterThan(0, "0"))