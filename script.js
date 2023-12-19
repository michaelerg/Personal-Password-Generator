// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

//const charOptions = [];

//min 8 characters, but less 128 characters
//condition that check if its in range
//store prompt as Number, convert string to number
//if out of range call the function again

//confirm which characters will be used by the user?
//if they choose false for all character sets then call the function again and tell them "minimum chose one character set"

//you can store genpassword as string and then concat
//concat()
// Function to prompt user for password options
function getPasswordOptions() {
  //prompt for password lenght
  var passwordLength = parseInt(
    prompt("How many characters do you want your password to be")
  );

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Has to be within range try again");
    return null;
  }

  var hasUppercase = confirm(
    "Do you want upper case characters in your password?"
  );
  var hasSpecial = confirm("Do you want special characters in your password?");
  var hasNumber = confirm("Do you want number characters in your password?");
  var hasLowercase = confirm(
    "Do you want lower case characters in your password?"
  );

  if (
    hasUppercase === false &&
    hasSpecial === false &&
    hasNumber === false &&
    hasLowercase === false
  ) {
    alert("You need to at least choose one character set");
    return null;
  }

  //options object holds these keys which hold their own values
  var options = {
    passwordLength,
    hasUppercase,
    hasLowercase,
    hasSpecial,
    hasNumber,
  };

  return options;
  // put getpasswordoptions function into generate passowrd
  //if invalid response

  // true /false
  // if true  put in random character
}

// Function for getting a random element from an array
function getRandom(arr) {
  //for (let i=0; i<passwordLength; i++) {
  let index = Math.floor(Math.random() * arr.length);
  var char = arr[index];
  console.log(char);

  // the first characters of the password selecting from the character sets chosen by user }
  return char;
  //pass all char array in here
  //variable to hold password and its index when generate
  //
  //for loop that loops the number of times tat matches the lenght the use chose
  //gen random numb
  //numb is used for index for a character in the 'mega-array'
  //mega-array[gen index] is the characyer we pull
  //add the character to password
  //once the loop is finished return the password
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  var allChar = [];
  let gauranteedCharacters = [];
  let sampleChar = [];
  if (options.hasLowercase === true) {
    allChar = allChar.concat(lowerCasedCharacters);
    let singleChar = getRandom(lowerCasedCharacters);
    gauranteedCharacters.push(singleChar);
  }
  if (options.hasUppercase === true) {
    allChar = allChar.concat(upperCasedCharacters);
    let singleChar = getRandom(upperCasedCharacters);
    gauranteedCharacters.push(singleChar);
  }
  if (options.hasNumber === true) {
    allChar = allChar.concat(numericCharacters);
    let singleChar = getRandom(numericCharacters);
    gauranteedCharacters.push(singleChar);
  }
  if (options.hasSpecial === true) {
    allChar = allChar.concat(specialCharacters);
    let singleChar = getRandom(specialCharacters);
    gauranteedCharacters.push(singleChar);
  }
  console.log(options.passwordLength, gauranteedCharacters.length);
  for (
    let i = 0;
    i < +options.passwordLength - gauranteedCharacters.length;
    i++
  ) {
    let finalChars = getRandom(allChar);
    console.log(finalChars, i);
    sampleChar.push(finalChars);
  }
  console.log(gauranteedCharacters);
  console.log(sampleChar);
  finalArea = gauranteedCharacters.concat(sampleChar);
  return finalArea.join("");
  
}
//till password length
//give me random getrandom

// Generate a password when the button is clicked
// Present a series of prompts for password criteria
// Length of password
// At least 8 characters but no more than 128.
// Character types
// Lowercase
// Uppercase
// Numeric
// Special characters ($@%&*, etc)
// Code should validate for each input and at least one character type should be selected
// Once prompts are answered then the password should be generated and displayed in an alert or written to the page

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
