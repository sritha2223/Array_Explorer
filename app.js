let numbers = [];

function getArray() {
    const input = document.getElementById("arrayInput").value;
    numbers = input.split(",")
        .map(num => parseFloat(num.trim()))
        .filter(num => !isNaN(num));  
    return numbers.slice();  // Use a copy
}

function displayResult(text) {
    document.getElementById("result").innerText = text;
}

function sortArray() {
    getArray();
    displayResult("Ascending Sorted: " + numbers.sort((a, b) => a - b));
}

function findEven() {
    getArray();
    displayResult("Evens: " + numbers.filter(num => num % 2 === 0));
}

function findOdd() {
    getArray();
    displayResult("Odds: " + numbers.filter(num => num % 2 !== 0));  
}

function findPrime() {
    getArray();
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    displayResult("Primes: " + numbers.filter(isPrime));
}

function findReverse() {
    let arr = getArray();
    let start = 0, end = arr.length - 1;
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    displayResult("Reverse: " + arr);
}
function findMax(){
    let arr = getArray();
    let max = Math.max(...arr);
    displayResult("Maximum: "+ max);
}
function findMin(){
    let arr = getArray();
    let min = Math.min(...arr);
    displayResult("Minimum: "+ min);
}
function findSum() {
    getArray();
    let sum =0;
    for(let i=0;i<numbers.length;i++){
        sum += numbers[i];
    }
    displayResult("Sum: " + sum);
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
    displayResult("Duplicates: " + duplicates.join(", "));
}
function removeDuplicates() {
    let arr = getArray();
    let unique = [...new Set(arr)];  
    displayResult("Array without duplicates: " + unique.join(", "));
}
function findMedian() {
    let arr = getArray().sort((a, b) => a - b);  // Sort the array

    if (arr.length === 0) {
        displayResult("No input provided.");
        return;
    }

    let mid = Math.floor(arr.length / 2);

    let median;
    if (arr.length % 2 === 0) {
        median = (arr[mid - 1] + arr[mid]) / 2;
    } else {
        median = arr[mid];
    }

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
        if (frequency[num] > maxFreq) {
            maxFreq = frequency[num];
        }
    }

    for (let num in frequency) {
        if (frequency[num] === maxFreq) {
            modes.push(Number(num));
        }
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
    let arr = getArray();

    if (arr.length === 0) {
        displayResult("No input provided.");
        return;
    }

    let result = arr.map(num => {
        if (num < 0 || !Number.isInteger(num)) return `NaN`; // skip negative or decimal
        let fact = 1;
        for (let i = 2; i <= num; i++) {
            fact *= i;
        }
        return fact;
    });

    displayResult("Factorials: " + result.join(", "));
}
function filterGreater() {
    let arr = getArray();
    let threshold = parseFloat(document.getElementById("filterInput").value);

    if (isNaN(threshold)) {
        displayResult("Please enter a valid number.");
        return;
    }

    let filtered = arr.filter(num => num > threshold);
    displayResult("Filtered: " + filtered.join(", "));
}
