

//Define Generate Password function
function generatePassword() {

  //Establishing basic variables and characters
  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lower = upper.map(element => {
    return element.toLowerCase();
  });
  var special = ["!", "@", "#", "$", "%", "^", "&", "*"];
  var numerical = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  //Establishing variations of characters 
  var charUL = upper.concat(lower);
  var charUS = upper.concat(special);
  var charUN = upper.concat(numerical);
  var charLS = lower.concat(special);
  var charLN = lower.concat(numerical);
  var charSN = special.concat(numerical);
  var charULS = upper.concat(lower,special);
  var charULN = upper.concat(lower,numerical);
  var charUSN = upper.concat(special,numerical);
  var charLNS = lower.concat(numerical,special);
  var allChar = upper.concat(lower, special, numerical);

  //Prompt user for length choice 
  var lengthChoice = window.prompt("How many characters would you like your password to be? Please enter a number between 8 and 128.");
  //If user enters a number outside of 8-128, prompts to try again, if not, then will validate user's choice
  if (lengthChoice<8 || lengthChoice>128) {
    window.alert("Please try again and enter a number between 8 and 128.");
    return "Please click 'Generate Password' to try again.";
  } else if (lengthChoice>=8 && lengthChoice<=128) {
    window.alert ("You have selected a " + lengthChoice + " character(s) long password.")
  };

  //Prompt user for lowercase character option then validate user's choice
  var lowerChoice = window.confirm("Do you want to include lowercase characters?");
  if (lowerChoice) {
    window.alert("Your password will include lowercase characters.");
  } else if (!lowerChoice) {
    window.alert("Your password will not include lowercase characters.");
  };

  //Prompt user for uppercase charcter option then validate user's choice
  var upperChoice = window.confirm("Do you want to include uppercase characters?");
  if (upperChoice) {
    window.alert("Your password will include uppercase characters.");
  } else if (!upperChoice) {
    window.alert("Your password will not include uppercase characters.");
  };

  //Prompt user for numerical character option then validate user's choice
  var numericChoice = window.confirm("Do you want to include numerical characters?");
  if (numericChoice) {
    window.alert("Your password will include numerical characters.");
  } else if (!numericChoice) {
    window.alert("Your password will not include numerical characters.");
  };

  //Prompt user for special character option then validate user's choice
  var specialChoice = window.confirm("Do you want to include special characters?");
  if (specialChoice) {
    window.alert("Your password will include special characters.");
  } else if (!specialChoice) {
    window.alert("Your password will not include special characters.");
  };

  //If no criteria was selected, user will be prompted to try again
  if (!lowerChoice && !upperChoice && !numericChoice && !specialChoice) {
    window.alert("Please try again and select at least one criteria to generate a password.");
    return "Please click 'Generate Password' to try again.";
  };

  //Generate password based on selected criteria
  password = " "
  //if all four criterias were selected
  if (lowerChoice && upperChoice && numericChoice && specialChoice) {
    var finalChar = allChar

  //if only three criterias were selected
  } else if (lowerChoice && numericChoice && specialChoice && !upperChoice) {
    var finalChar = charLNS
  } else if (upperChoice && specialChoice && numericChoice && !lowerChoice) {
    var finalChar = charUSN;
  } else if (upperChoice && lowerChoice && numericChoice && !specialChoice) {
    var finalChar = charULN;
  } else if (upperChoice && lowerChoice && specialChoice && !numericChoice) {
    var finalChar = charULS;

  //if only two criterias were selected
  } else if (specialChoice && numericChoice && !upperChoice && !lowerChoice) {
    var finalChar = charSN;
  } else if (lowerChoice && numericChoice && !upperChoice && !specialChoice) {
    var finalChar = charLN;
  } else if (lowerChoice && specialChoice && !upperChoice && !numericChoice) {
    var finalChar = charLS;
  } else if (upperChoice && numericChoice && !specialChoice && !lowerChoice) {
    var finalChar = charUN;
  } else if (upperChoice && specialChoice && !lowerChoice && !numericChoice) {
    var finalChar = charUS;
  } else if (upperChoice && lowerChoice && !specialChoice && !numericChoice) {
    var finalChar = charUL;

  //if only one criteria was selected
  } else if (upperChoice && !lowerChoice && !specialChoice && !numericChoice) {
    var finalChar = upper;
  } else if (lowerChoice && !upperChoice && !specialChoice && !numericChoice) {
    var finalChar = lower;
  } else if (specialChoice && !upperChoice && !lowerChoice && !numericChoice) {
    var finalChar = special;
  } else if (numericChoice && !upperChoice && !lowerChoice && !specialChoice) {
    var finalChar = numerical;
  };

  //Generate random password
  for (var i=0; i <lengthChoice; i++) {
    var randomNumber = Math.floor(Math.random()*finalChar.length);
    password += finalChar[randomNumber];
  }

  //Display randomly generated password 
  return password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
