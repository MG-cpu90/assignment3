// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("textarea");
console.log(generateBtn);

// var specialCharacters = [ "!", """", "#", "$", "%", "&", ', (, ), *, +, ,, -, ., /, :, ;, <, =, >, ?, @, [, \, ], ^, _, `, {, |, }, ~, ", ];
var allCharacters = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
var upperAndLowercaseAlphabet = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var upperAndLowercaseAlphabetAndNumbers = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"];
var upperAndLowercaseAlphabetAndSpecialCharacters = ["abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
var uppercaseAlphabetAndNumbers = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"];
var uppercaseAlphabetAndSpecialCharacters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
var uppercaseAlphabetAndNumbersAndSpecialCharacters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
var lowercaseAlphabetAndNumbers = ["abcdefghijklmnopqrstuvwxyz0123456789"];
var lowercaseAlphabetAndSpecialCharacters = ["abcdefghijklmnopqrstuvwxyz !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
var lowerAlphabetAndNumbersAndSpecialCharacters = ["abcdefghijklmnopqrstuvwxyz0123456789 !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
var specialCharacters = [" !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
var lowercaseAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ];
var randomString = [""];
console.log(specialCharacters);
console.log(lowercaseAlphabet);
console.log(uppercaseAlphabet);
console.log(numbers);
// var lowercaseLetters = lowercaseAlphabet.split(" ");
// var uppercaseLetters = uppercaseAlphabet.split(" ");
// var numbersString = numbers.split(" ");
// var specialCharactersString = specialCharacters.split(" ");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write a function that generates a random password in the "text area" box
function writePassword(randomString) {

  var lowercaseLett = confirm("Do you want your password to contain lowercase letters?");
  var uppercaseLett = confirm("Do you want your password to contain uppercase letters?");
  var num = confirm("Do you want your password to contain numbers?");
  var specialChar = confirm("Do you want your password to contain special characters?");
  var passwordLength = prompt("How long do you want your password to be? Choose a password length of at least 8 characters and no more than 128 characters.");

// Write another function that checks if it's between 8 and 128 characters
// (passwordLength >= 8 || passowrdLength <= 128)
if (passwordLength < 8 || passwordLength > 128) {
  alert("Your password is not between 8 characters and 128 characters. Please try again.");
  var passwordLength = prompt("How long do you want your password to be? Choose a password length of at least 8 characters and no more than 128 characters.");
}

else if (lowercaseLett === false && uppercaseLett === false && num === false && specialChar === false) {
  alert("You must chose at least one password criteria.");
  var lowercaseLett = confirm("Do you want your password to contain lowercase letters?");
  var uppercaseLett = confirm("Do you want your password to contain uppercase letters?");
  var num = confirm("Do you want your password to contain numbers?");
  var specialChar = confirm("Do you want your password to contain special characters?");
}

  for (var i = 0; i < passwordLength; i++) {

    // n1 = specialCharacters.length; n2 = lowercaseAlphabet.length; n3 = uppercaseAlphabet.length; n4 = numbers.length;

    if (lowercaseLett === true || uppercaseLett === true || num === true || specialChar === true) {
      randomString += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
         }
         return randomString;
      }
  "textarea".insertAdjacentText(randomString);
}

// Log the function
console.log(writePassword);

// Call the function
// writePassword(randomString);

// var password = document.createTextNode(writePassword);
// var addTextHere = document.getElementById("addHere");

// var password = generatePassword();
// var passwordText = document.querySelector("#password");

// passwordText.value = password;


// to generate a random number between 1 and 10
// Math.floor((Math.random() * 9) + 1);
// console.log(Math.floor());


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
//  THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
//  THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
//  THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
//  THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
//  THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
//  THEN a password is generated that matches the selected criteria
// WHEN the password is generated
//  THEN the password is either displayed in an alert or written to the page