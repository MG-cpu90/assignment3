// Assignment Code
// Query selectors
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");
console.log(generateBtn);

// variables for all letters, numbers, and characters)
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var randomString = "";
var optionsVariable = "";
console.log(specialCharacters);
console.log(lowercaseAlphabet);
console.log(uppercaseAlphabet);
console.log(numbers);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write a function that generates a random password in the "text area" box
function writePassword() {

  event.preventDefault();

 // Clear the password – not working
  if (password.value = randomString) {
    password.value = "";
    console.log(password.value);
  }

  var lowercaseLett = confirm("Do you want your password to contain lowercase letters?");
  var uppercaseLett = confirm("Do you want your password to contain uppercase letters?");
  var num = confirm("Do you want your password to contain numbers?");
  var specialChar = confirm("Do you want your password to contain special characters?");
  var passwordLength = prompt("How long do you want your password to be? Choose a password length of at least 8 characters and no more than 128 characters.");

// Write another function that checks if it's between 8 and 128 characters
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

if (lowercaseLett) {
  optionsVariable += lowercaseAlphabet;
}

if (uppercaseLett) {
  optionsVariable += uppercaseAlphabet;
}

if (num) {
  optionsVariable += numbers;
}

if (specialChar) {
  optionsVariable += specialCharacters;
}

  for (var i = 0; i < passwordLength; i++) {

    // Generates a random password based on the criteria that have been selected
    // Continues to select a random character value from the string until it is the desired length
      randomString += optionsVariable.charAt(Math.floor(Math.random() * optionsVariable.length));
      console.log(randomString);
         }
         console.log(password);
  password.value = randomString;

  }

// Log the function
console.log(writePassword);

// Call the function
// writePassword();