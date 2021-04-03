// create arrays
var characterNumeric = [0,1,2,3,4,5,6,7,8,9]
var characterLowercase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var characterUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var specialCharacter = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","\",","{","|","}","~"]


// Pushes possible outcomes into array
function generatePassword() {
  var passwordLength = prompt("Choose length characters.");
  console.log(passwordLength);

if

  var characterLowercase = confirm("lowercase?");
  console.log(characterLowercase);

  var characterUppercase = confirm("uppercase?");
  console.log(characterUppercase);

  var characterNumeric = confirm("numeric characters?");
  console.log(characterNumeric);

  var specialCharacter = confirm("special character?");
  console.log(specialCharacter);
}

// create new function to grab all password functions



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
