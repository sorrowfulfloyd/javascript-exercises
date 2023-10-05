// Refactored fibonacci function
const fibonacci = function (fibo) {
    if (fibo < 0) return "OOPS";

    // Initialize variables to keep track of fibonacci sequence
    let currentFibonacci = 1;
    let previousFibonacci = 1;

    // Create an array to store fibonacci sequence
    const fibonacciArray = [1, 1];

    // Generate fibonacci sequence up to the given input
    for (let i = 2; i < fibo; i++) {
        // Calculate the next fibonacci number
        const nextFibonacci = currentFibonacci + previousFibonacci;

        // Store the next fibonacci number in the array
        fibonacciArray.push(nextFibonacci);

        // Update the previous and current fibonacci numbers
        previousFibonacci = currentFibonacci;
        currentFibonacci = nextFibonacci;
    }

    // Return the requested fibonacci number
    return fibonacciArray[fibo - 1];
};

// Do not edit below this line
module.exports = fibonacci;
