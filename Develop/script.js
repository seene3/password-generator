// Assignment code here
function getRandomLower() {
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  return lower[Math.floor(Math.random() * lower.length)];
}

function getRandomUpper() {
  var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return upper[Math.floor(Math.random() * upper.length)];
}

function getRandomNumber() {
  var number = '0123456789';
  return number[Math.floor(Math.random() * number.length)];
}

function getRandomSymbol() {
  var symbol = '!@#$%^&*?(){}[]=<>/';
  return symbol[Math.floor(Math.random() * symbol.length)];
}

function generatePassword() {
  const length = getPasswordLength();
  let password = '';
  for (var i = 0; i < length; i++) {
    var getType = Math.floor(Math.random() * 4)
    switch (getType) {
      case 1:
        password += getRandomLower();
        break;
      case 2:
        password += getRandomUpper();
        break;
      case 3:
        password += getRandomNumber();
        break;
      case 0:
        password += getRandomSymbol();
        break;
      default:
        console.log("error");
        break;
    }
  }
  if (password.length === length) {
  return password;
  }
}

var getPasswordLength = function() {
  var passwordLength = "";
  var parseLength;

  while (passwordLength == "" || passwordLength == null) {
    passwordLength = prompt("How long would you like your password to be between 8 and 128 characters?");
  }
  parseLength = parseInt(passwordLength);
  if (parseLength > 7 && parseLength < 129) {
    return parseLength;
  }
  else {
    window.alert("Please put in valid range");
    getPasswordLength();
  }
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
