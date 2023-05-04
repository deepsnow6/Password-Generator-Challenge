// Add event listener to generate button
var generateBtn = document.querySelector("#generate");

// Define variables for the character sets
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var special = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// Prompt the user for password criteria
function getPasswordCriteria() {
  var length = parseInt(prompt("Enter password length (8-128 characters):"));
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return null;
  }
  
  return {
    length: length,
    useLowercase: confirm("Include lowercase letters?"),
    useUppercase: confirm("Include uppercase letters?"),
    useNumeric: confirm("Include numbers?"),
    useSpecial: confirm("Include special characters?")
  };
}

// Generate a random password based on the selected criteria
function generatePassword() {
  var criteria = getPasswordCriteria();
  if (!criteria) {
    return ""; // User cancelled or entered invalid criteria
  }
  
  var charset = "";
  if (criteria.useLowercase) {
    charset += lowercase;
  }
  if (criteria.useUppercase) {
    charset += uppercase;
  }
  if (criteria.useNumeric) {
    charset += numeric;
  }
  if (criteria.useSpecial) {
    charset += special;
  }
  
  var password = "";
  for (var i = 0; i < criteria.length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

