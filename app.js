let numbers = [];

function getArray() {
    const input = document.getElementById("arrayInput").value;
    numbers = input.split(",")
        .map(num => parseFloat(num.trim()))
        .filter(num => !isNaN(num));
    return numbers.slice();  // Return copy
}

function displayResult(text) {
    document.getElementById("result").innerText = text;
}

function sortArray() {
    getArray();
    displayResult("Ascending Sorted: " + numbers.sort((a, b) => a - b));
}

function findReverse() {
    const arr = getArray();
    displayResult("Reverse: " + arr.reverse());
}

function findEven() {
    getArray();
    displayResult("Evens: " + numbers.filter(num => num % 2 === 0));
}

function findOdd() {
    getArray();
    displayResult("Odds: " + numbers.filter(num => num % 2 !== 0));
}

function findMax() {
    let arr = getArray();
    let max = Math.max(...arr);
    displayResult("Maximum: " + max);
}

function findMin() {
    let arr = getArray();
    let min = Math.min(...arr);
    displayResult("Minimum: " + min);
}

function findSum() {
    getArray();
    let sum = numbers.reduce((acc, val) => acc + val, 0);
    displayResult("Sum: " + sum);
}

function findAverage() {
    getArray();
    if (numbers.length === 0) {
        displayResult("Average: 0");
        return;
    }
    let sum = numbers.reduce((a, b) => a + b, 0);
    let avg = sum / numbers.length;
    displayResult("Average: " + avg.toFixed(2));
}

function findDuplicates() {
    let arr = getArray();
    let duplicates = arr.filter((item, index) => arr.indexOf(item) !== index)
                        .filter((item, index, self) => self.indexOf(item) === index);
    if (duplicates.length === 0) {
        displayResult("No duplicates found.");
    } else {
        displayResult("Duplicates: " + duplicates.join(", "));
    }
}

function removeDuplicates() {
    let arr = getArray();
    let unique = [...new Set(arr)];
    displayResult("Array without duplicates: " + unique.join(", "));
}

function findPrimes() {
    getArray();
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    // Filter primes
    let primes = numbers.filter(isPrime);

    // Remove duplicates
    let uniquePrimes = [...new Set(primes)];

    displayResult("Primes: " + uniquePrimes.join(", "));
}


function findMedian() {
    let arr = getArray().sort((a, b) => a - b);
    if (arr.length === 0) {
        displayResult("No input provided.");
        return;
    }
    let mid = Math.floor(arr.length / 2);
    let median = (arr.length % 2 === 0)
        ? (arr[mid - 1] + arr[mid]) / 2
        : arr[mid];
    displayResult("Median: " + median);
}

function findMode() {
    let arr = getArray();
    if (arr.length === 0) {
        displayResult("No input provided.");
        return;
    }
    let frequency = {};
    let maxFreq = 0;
    let modes = [];
    for (let num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxFreq) maxFreq = frequency[num];
    }
    for (let num in frequency) {
        if (frequency[num] === maxFreq) modes.push(Number(num));
    }
    if (modes.length === arr.length) {
        displayResult("No mode found. All elements appear only once.");
    } else {
        displayResult("Mode: " + modes.join(", "));
    }
}

function findSquareNumbers() {
    let arr = getArray();
    let squares = arr.filter(num => Number.isInteger(Math.sqrt(num)));
    if (squares.length === 0) {
        displayResult("No square numbers found.");
    } else {
        displayResult("Square numbers: " + squares.join(", "));
    }
}

function findFactorial() {
    let arr = getArray().filter(n => n >= 0 && Number.isInteger(n));
    if (arr.length === 0) {
        displayResult("No valid input for factorial.");
        return;
    }
    let result = arr.map(num => {
        let fact = 1;
        for (let i = 2; i <= num; i++) fact *= i;
        return `${num}! = ${fact}`;
    });
    displayResult("Factorials:\n" + result.join("\n"));
}

function filterGreater() {
    let arr = getArray();
    let threshold = parseFloat(document.getElementById("filterInput").value);
    if (isNaN(threshold)) {
        displayResult("Please enter a valid number.");
        return;
    }
    let filtered = arr.filter(num => num > threshold);
    displayResult("Filtered > " + threshold + ": " + filtered.join(", "));
}
