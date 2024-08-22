            //Code Jam Assignment

// 1. Create a function that reverses an array. Start small here and work your way up. Begin
// with an array of 5 numbers, and then try your program with a larger array to verify its
// success.

function reverseArray(arr){
    return arr.reverse()
}

let array5 =[1, 2 , 3 , 4 , 5];
console.log(array5);
console.log(reverseArray(array5));
let array10 = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 ,  9 , 10 ]
console.log(array10);
console.log(reverseArray(array10));


// 2. Create a function that filters out negative numbers. In this challenge, you’ll have a
// function that takes an array as an input and returns an array. But if all goes according
// to plan, it’ll remove the negative numbers. This is another example of a task that’ll be
// useful when combing through data and looking for clever ways to eliminate “bad
// data.”

function filter(arr){
    return arr.filter(number => number < 0);
}
let array3 = [ 1 , -1 , 2 , -2 , 3 , -3]
console.log(filter(array3))

// 3. Return the number of vowels in a string. Create a function that’ll return an integer of
// the number of vowels found in a string. This is a great way to practice determining the
// features of a dataset. If you use JavaScript later in your career, you’ll be well-prepared
// to determine what datasets (or just strings) consist of.
function countvowels(str){
    let count = 0;
    for(let i = 0; i=str.length; i++){
        let char = str[i];
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
            char === 'A'|| char === 'E' || char === 'I' || char === 'O' || char === 'U'){
                count++;
            }
    }
    return count;
}
let example = "hello world";
console.log(countvowels(example));



  
// 4. Check if a string is a . A palindrome is a word, phrase, number, or other
// sequences of characters that reads the same forward and backward (like the words
// “kayak,” “mom,” “radar,” and “refer”). Create a function that takes a string as input
// and returns a Boolean indicating whether the string is a palindrome. Test your
// function with different strings to ensure it works correctly.

function ispalindrome(str){
    str =  str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reversestr = '';
    for(let i = str.length -1; i>=0; i--){
        reversestr += str[i];
    }
    return str === reversestr;
}
console.log(ispalindrome("kayak"));
console.log(ispalindrome("mom"));
console.log(ispalindrome("radar"));
console.log(ispalindrome("refer"));
console.log(ispalindrome("Refer"));

// 5. Write a JavaScript program to check whether two given integer values are in the
// range 50 - 99 (inclusive). Return true if either of them falls within the range.

function isrange (num1,num2){
    const numrange1 = (num1 >=50 && num1<=99);
    const numrange2 = (num2 >=50 && num2 <=99);
    return numrange1 || numrange2 // kisi ak ki bhi condition true  ho tu chalade ga 
}

  console.log(isrange(55, 100)); 
  console.log(isrange(49, 50));  
  console.log(isrange(30, 45));  
  console.log(isrange(99, 100)); 

// 6. Write a JavaScript program to get the minimum value of an array, after mapping each
// element to a value using the provided function.

let Numbers  = [1, 2, 3, 4, 5];
let changing = Numbers.map( n => n * 2);
let minValue = Math.min(...changing);
console.log(minValue);

// 7. Write a JavaScript program to create an updated string of 4 copies of the last 3
// characters of a given original string. The string length must be 3 and above.

function repeatLastThreeChars(originalStr) {
    
    if (originalStr.length === 0) {
      return 'The string is empty.';
    }
    else if (originalStr.length < 3) {
      return 'String length must be at least 3 characters.';
    }
    else {
      const lastThreeChars = originalStr.slice(-3);

      const updatedStr = lastThreeChars.repeat(4);
      
      return updatedStr;
    }
  }
  
  console.log(repeatLastThreeChars("JavaScript")); 
  console.log(repeatLastThreeChars("Hi")); 
  console.log(repeatLastThreeChars("")); 
  console.log(repeatLastThreeChars("abc")); 
  

// 8. Write a JavaScript program to find the types of a given angle.
// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.
function findAngleType(angle) {
    if (angle < 0 || angle > 180) {
      return 'Invalid angle. The angle must be between 0 and 180 degrees.';
    }
    if (angle === 90) {
      return 'Right angle';
    } else if (angle === 180) {
      return 'Straight angle';
    } else if (angle > 0 && angle < 90) {
      return 'Acute angle';
    } else if (angle > 90 && angle < 180) {
      return 'Obtuse angle';
    } else {
      return 'Unknown angle type';
    }
  }
  
 
  console.log(findAngleType(45));  
  console.log(findAngleType(90)); 
  console.log(findAngleType(120)); 
  console.log(findAngleType(180)); 
  console.log(findAngleType(-10)); 
  console.log(findAngleType(200));
  
// 9. Write a JavaScript program to find the smallest round number not less than a given
// value. Note: A round number is informally considered to be an integer that ends with
// one or more zeros. So, 590 is rounder than 592, but 590 is less round than 600.

function findSmallestRoundNumber(value) {
    const integerValue = Math.ceil(value);
    return Math.ceil(integerValue / 10) * 10;
  }
  console.log(findSmallestRoundNumber(123));   
  console.log(findSmallestRoundNumber(590));   
  console.log(findSmallestRoundNumber(9500));  
  console.log(findSmallestRoundNumber(452));   
  
// 10. Write a JavaScript program to find the index of an array item in a for loop.

function findIndexOfItem(arr, itemToFind) {
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === itemToFind) {
        return i;
      }
    }
    return -1;
  }
  const array = [10, 20, 30, 40, 50];
  console.log(findIndexOfItem(array, 30)); // Output: 2
  console.log(findIndexOfItem(array, 100)); // Output: -1
  
