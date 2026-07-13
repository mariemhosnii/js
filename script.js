// Reverse a string
function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

// Count the number of characters in a string
function countCharacters(str) {
  return str.length;
}

// Find the biggest number in an array
function findMaximum(numbers) {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

// Find the smallest number in an array
function findMinimum(numbers) {
  let min = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }

  return min;
}

// Calculate the sum of all numbers in an array
function sumArray(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

// Calculate the factorial of a number
function factorial(number) {
  let result = 1;

  for (let i = 1; i <= number; i++) {
    result *= i;
  }

  return result;
}

// Check if a number is prime
function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Generate Fibonacci sequence
function fibonacci(number) {
  let a = 0;
  let b = 1;
  let result = "";

  for (let i = 0; i < number; i++) {
    result += a + " ";

    let c = a + b;
    a = b;
    b = c;
  }

  return result;
}

// Filter numbers bigger than a given value
function filterArray(numbers, limit) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > limit) {
      result[result.length] = numbers[i];
    }
  }

  return result;
}

// Capitalize the first letter of each word
function capitalizeWords(sentence) {
  let result = "";
  let firstLetter = true;

  for (let i = 0; i < sentence.length; i++) {
    if (firstLetter == true) {
      result += sentence[i].toUpperCase();
      firstLetter = false;
    } else {
      result += sentence[i];
    }

    if (sentence[i] == " ") {
      firstLetter = true;
    }
  }

  return result;
}
