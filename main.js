// Homework Exercises
// 1. For each of these values, what type will the TypeScript compiler infer?
var a = 118;
// A: number
var b = 'Thieves';
// A: string
var c = [true, false, false];
// A: boolean[]
//let d = {age: number};
// A:  doesnt compile
var e = [3];
// A: number[]
var f;
// A: any
var g = [];
// A: any[]
// 2. What are the compilation errors in each of the following code snippets?
var song = {
    title: 'Lose Yourself'
};
// A:
var prices = [100, 200, 300];
prices[0] = 100;
// A:prices is an array of numbers, so you can't assign a string to it like '100'
function myFunc(a, b) {
    return a + b;
}
// A: myFunc is a function that takes two numbers and returns a number, so you can't return empty curly braces
