// %s > String
// %d > int
// %j > Json


console.log("Un int: %d y un String: %s", 5, "hello");

// console.log(); == console.info(); <- alias
console.info("Hello, World.");

//console.error(); == console.warn("");
console.warn("Hello, warm (error)");

// assert => a failure message is displayed if the equality is not matched:
console.assert(42 == "42");
console.assert(5 === '5');// stdout > Assertion failed
console.assert(5 === 5);

console.trace("Trace here!");

