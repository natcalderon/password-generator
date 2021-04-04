// create arrays

var lowercase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numeric = [0,1,2,3,4,5,6,7,8,9]
var character = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","\",","{","|","}","~"]

var results = [];

// Pushes possible outcomes into array
function generatePassword() {
  var pwLength = prompt("How many characters do you want your password to have?");
  console.log(length);


  if (pwLength < 8 || pwLength > 128) {
   length = alert("Must be between 8 and 128");
   return;
  }
  if (isNaN(pwLength) === true ) {
  alert("Must be a number")
  return;
  
  } else {
  lower = confirm("lowercase?");
  upper = confirm("uppercase?");
  num = confirm("numeric characters?");
  char = confirm("special character?");
  }


if (lower) {
  results = results.concat(lowercase)
}
if (upper) {
  results = results.concat(uppercase)
}
if (num) {
  results = results.concat(numeric)
}
if (char) {
  results = results.concat(character)
}
console.log(results);

var password = [];

for (var i = 0; i < pwLength; i++) {
  var choices = results[Math.floor(Math.random() * results.length)];
  password.push(choices);
}

return password.join("");


}


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
