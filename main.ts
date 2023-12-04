// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: number

let b = 'Thieves';
// A: string

let c = [true, false, false];
// A: boolean[]

let d = {age: number};
// A:  doesnt compile

let e = [3]
// A: number[]

let f;
// A: any

let g = []
// A: any[]



// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear?: number, // I add a ? to make it optional, other wise it will be undefined and not compile
} = {
    title: 'Lose Yourself'
};
// A:

let prices = [100, 200, 300];
prices[0] = 100;
// A:prices is an array of numbers, so you can't assign a string to it like '100'

function myFunc(a: number, b: number): number {
    return a + b;
}
// A: myFunc is a function that takes two numbers and returns a number, so you can't return empty curly braces