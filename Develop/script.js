var generateBtn = document.querySelector("#generate");
// Assignment code here
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = "0123456789";
var specialChars = "%*(^)@&~!#$";

// Write password to the #password input
function generatePassword() {
  var characters = Number(
    prompt(
      "Choose a length of at least 8 characters and no more than 128 characters."
    )
  ); //character length restrictor
  while (characters < 8 || characters > 128) {
    characters = Number(
      prompt(
        "Please choose a length of at least 8 characters and no more than 128 characters."
      )
    );
  }
  //prompts
  var lowercaseYes = confirm("Would you like to include lowercase letters?");
  var uppercaseYes = confirm("Would you like to include uppercase letters?");
  var numericYes = confirm("Would you like to include numbers?");
  var specialCharsYes = confirm(
    "Would you like to include special characters?"
  );
  //just do it right
  while (
    lowercaseYes === false &&
    uppercaseYes === false &&
    numericYes === false &&
    specialCharsYes === false
  ) {
    var doItRight = alert("You must choose at least one character type.");
    var lowercaseYes = confirm("Would you like to include lowercase letters?");
    var uppercaseYes = confirm("Would you like to include uppercase letters?");
    var numericYes = confirm("Would you like to include numbers?");
    var specialCharsYes = confirm(
      "Would you like to include special characters?"
    );
  }
  //vars for user prompt data
  var generatedPassword = "";
  var choices = "";
  var selected = "";

  //let a = 2;
  //console.log(a+=3); (5)
  //when choices is true, += will be added to the string

  if (lowercaseYes) {
    choices += lowercase;
  } //else?
  if (uppercaseYes) {
    choices += uppercase;
  }
  if (numericYes) {
    choices += numeric;
  }
  if (specialCharsYes) {
    choices += specialChars;
  }

  //characters tell loop how many times to run, charAt adding random character from modified choices data
  for (var i = 0; i < characters - selected.length; i++)
    generatedPassword += choices.charAt(
      Math.floor(Math.random() * choices.length)
    );
  generatedPassword += selected;

  return generatedPassword;
}
//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
