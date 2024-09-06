// String Manipulation Functions
function reverseString(s) {
    return s.split('').reverse().join('');
}

function countCharacters(s) {
    return s.length;
}

function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Array Functions
function findMaximum(arr) {
    return Math.max(...arr);
}

function findMinimum(arr) {
    return Math.min(...arr);
}

function sumOfArray(arr) {
    return arr.reduce((sum, value) => sum + value, 0);
}

function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Mathematical Functions
function factorial(n) {
    if (n === 0) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function fibonacci(n) {
    let sequence = [0, 1];
    while (sequence.length < n) {
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    }
    return sequence;
}

