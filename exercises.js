///////////////////////////////////////////////////////////////////////////////

/////// Kata 6 - Persistent Bugger ///////

/*
function persistence(num) {
    let count = 0;
    num = num.toString();
  
    while (num.length > 1) {
      let product = 1;
      for (let i = 0; i < num.length; i++) {
        product *= num[i];
      }
      num = product.toString();
      count++;
    }
    return count;
  }
  console.log(persistence(39));
  
  */

///////////////////////////////////////////////////////////////////////////////

////// Kata 6 - Find the Odd Number //////

/* Given an array of integers, find the one that appears an odd number of times.
There will always be only one integer that appears an odd number of times.
Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd). 

function findOdd(A) {
  let pairs = {};

  for (let num of A) {
    if (pairs[num]) {
      pairs[num]++;
    } else {
      pairs[num] = 1;
    }
  }

  for (key in pairs) {
    if (pairs[key] % 2 !== 0) return +key;
  }
}

console.log(findOdd([7]));

//////////////////////////////////////////////////////////////////////////////////////
*/

////// Kata 6 - Break Camel Case //////
/*Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

function solution(string) {
  let str = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      str = str + " " + string[i];
    } else {
      str = str + string[i];
    }
  }
  return str;
}

console.log(solution("camelCasingTest"));

*/

///////////////////////////////////////////////////////////////////////////////

////// Kata 6 - Who likes it? //////

/*You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
  if (names.length < 1) return "no one likes this";
  for (let i = 0; i < names.length; i++) {
    if (names.length === 1) return `${names[i]} likes this`;
    else if (names.length === 2)
      return `${names[i]} and ${names[i + 1]} like this`;
    else if (names.length === 3)
      return `${names[i]}, ${names[i + 1]} and ${names[i + 2]} like this`;
    else
      return `${names[i]}, ${names[i + 1]} and ${
        names.length - 2
      } others like this`;
  }
}
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

*/

///////////////////////////////////////////////////////////////////////////////

////// Kata 6 - Counting Duplicates //////

/*Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example

"abcde" -> 0  # no characters repeats more than once
"aabbcde" -> 2  # 'a' and 'b'
"aabBcde" -> 2  # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1  # 'i' occurs six times
"Indivisibilities" -> 2  # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2  # 'a' and '1'
"ABBA" -> 2  # 'A' and 'B' each occur twice


unction duplicateCount(text) {
  let count = 0;
  let counter = {};

  for (letter of text.toLowerCase()) {
    counter[letter] = (counter[letter] || 0) + 1;
  }

  for (let key in counter) {
    if (counter[key] > 1) {
      count++;
    }
  }
  return count;
}

console.log(duplicateCount("AAbbscd"));

*/

/*
function spinWords(string) {
  let splitStr = string.split(" ");
  console.log(splitStr);

  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i].length >= 5) {
      let reversedStr = splitStr[i].split("").reverse().join("");
      splitStr[i] = reversedStr;
    }
  }

  return splitStr.join(" ");
}

console.log(spinWords("Hey fellow warriors"));
*/

///////////////////////////////////////////////////////////////////////////////

////// Kata 6 - Title Case //////

/*
A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

Arguments (Haskell)

First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
Second argument: the original string to be converted.
Arguments (Other languages)

First argument (required): the original string to be converted.
Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
Example

titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'


function titleCase(title, minorWords) {
  if (!title) {
    return "";
  }
  let newMinorWords;
  let newTitle = title.toLowerCase().split(" ");
  if (minorWords) {
    newMinorWords = minorWords.toLowerCase().split(" ");
  } else {
    newMinorWords = [];
  }

  let newArray = [];
  let firstLetter = newTitle[0].charAt(0).toUpperCase();
  let rest = newTitle[0].slice(1);
  let firstWord = `${firstLetter}${rest}`;

  newArray.push(firstWord);

  for (let i = 1; i < newTitle.length; i++) {
    if (newMinorWords.includes(newTitle[i])) {
      newArray.push(newTitle[i]);
    } else {
      newArray.push(
        `${newTitle[i].charAt(0).toUpperCase()}${newTitle[i].slice(1)}`
      );
    }
  }

  return newArray.join(" ");
}

*/
