// 1. Write a function min that takes two numbers and returns the smallest one of the pair.
function min(a,b){
return a < b ? a : b;
}

// 2. Write a function that takes the radius of a circle and outputs it’s approximate circumference (the formula for circumference is 2 *pi * radius, you may use 3.14 for pi).
function calculateCircumference(radius) {
  return 2 * 3.14 * radius;
}

// 3. Write a function searchString that takes a character and then returns how many times it appears in another string argument.
function searchString(char, str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
    return count;
  }