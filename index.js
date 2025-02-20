// Bernados, Hugz Christian M.
// 2023-14033
// C-3L
// Exercise 03: Javascript Basics part 1


const user = storePassword("Hugz","Pass123","Pass12345");

console.log(user);


// function for storing the password to the object
function storePassword(name, pass1, pass2){
    // Set an object
    const newUser = {
        name: name
    }

    // Check the passwords
    if(validatePassword(pass1,pass2)){
        newUser.password = reversePassword(pass1);
    } else {
        newUser.password = pass1;
    }

    return newUser;
}

// function for validating 2 passwords
function validatePassword(pass1, pass2){
    // Test 1: If both passwords match
    if(pass1 == pass2){
        var str = pass1;
        var charCount = 0;
        var numFlag = false;
        var upperFlag = false;
        var lowerFlag = false;
        
        // Loop to count the number of characters and check if there is a number
        for(var i=0; i < str.length; i++){
            var isNumber = parseInt(str[i]);

            if(1 === isNumber){
                numFlag = true;
            }

            charCount += 1;
        }

        // Check if there is 1 lowercase or uppercase
        if(str.toLowerCase() != str){
            upperFlag = true;
        }
        if(str.toUpperCase() != str){
            lowerFlag = true;
        }

        // If all conditions are fulfilled, return true
        if(charCount >= 8 && upperFlag && lowerFlag && numFlag){
            return true;
        }
    } 

    return false;
}


// function for reversing the password
function reversePassword(pass){
    var newPassword = "";

    // Start with last index and concatenate each character
    for(var i = pass.length-1 ; i != -1 ; i--){
        newPassword += pass[i];
    }

    return newPassword;
}

