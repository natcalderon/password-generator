// create arrays

var lowercase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numeric = [0,1,2,3,4,5,6,7,8,9]
var character = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","\",","{","|","}","~"]

var results;

// Pushes possible outcomes into array
function generatePassword() {
  var length = prompt("How many characters do you want your password to have?");
  console.log(length);

if (length < 8 || length > 128) {
  length = prompt("Must be between 8 and 128");

} else {
  lowercase = confirm("lowercase?");
    console.log(lowercase);

  uppercase = confirm("uppercase?");
   console.log(uppercase);

  numeric = confirm("numeric characters?");
    console.log(numeric);

  character = confirm("special character?");
    console.log(character); 
  };

// if for 4 confirm 
if (lowercase && uppercase && numeric && character) {
  results = lowercase.concat(uppercase, numeric, character);
}

// else if for 3 confirm
else if (lowercase && uppercase && numeric) {
  results = lowercase.concat(uppercase,numeric);
}
else if (uppercase && numeric && special) {
  results = uppercase.concat(numeric, special);
}
else if (uppercase && lowercase && special) {
  results = uppercase.concat(lowercase,speical);
}
else if (numeric && special && lowercase) {
  results = numeric.concat(special, lowercase);
}

// else if for 2 confirm
else if (uppercase && numeric) {
  results = uppercase.concat(numeric);
}
else if (numeric && special) {
  results = numeric.concat(special);
}
else if (special && lowercase) {
  results = special.concat(lowercase);
}
else if (uppercase && lowercase) {
  results = uppercase.concat(lowercase);
}
else if (numeric && lowercase) {
  results = numeric.concat(lowercase);
}
else if (uppercase && special) {
  results = uppercase.concat(special);
}

// else if for 1 confirm
else if (uppercase) {
  results = uppercase;
}
else if (lowercase) {
  results = lowercase;
}
else if (numeric) {
  results = lowercase;
}
else if (special) {
  results = special;
}
}

// create new function to grab all password functions

function passwordResults ()



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
