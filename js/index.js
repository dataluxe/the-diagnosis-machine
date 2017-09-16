/**
 * Created by Main on 9/4/2017.
 */

function User (name, password) {
    this.name = name;
    this.password = password;
    this.selectedSymptoms = [];
    this.returnedSupplements = [];
    this.checkoutTotal = null;
}

var userIndex = (localStorage.getItem("userIndex") === null ? [] : JSON.parse(localStorage.getItem("userIndex")));
var currentUser;
var properRegex = /^[A-Za-z0-9]{1,20}$/;

/* Sign Up function here */

const signUp = function() {
    var unField = document.getElementById("username-field");
    var pwField = document.getElementById("password-field");
    var un = unField.value;
    var pw = pwField.value;
    var regexPass = (properRegex.test(un) && properRegex.test(pw));
    var unCheck = (function(){ /*function returns true if entered username is found, false if not. */
        for (var i = 0; i < userIndex.length; i++) {
            if (userIndex[i].name === un) {
                return true;
            } else {}
        }
        return false;
    })();

    if (!regexPass)
    {
        unField.value = "";
        pwField.value = "";
        window.alert("We cannot accept that username and/or password.\n\nPlease enter a string of letters ( [aA-zZ] and numbers [0-9] up to 20 characters long ) in both fields!");
    }

    else if ( regexPass && unCheck) {
        window.alert("User already exists! Please either Sign In as that user, or enter a different username.");
    }

    else if ( regexPass && !unCheck ) {
        currentUser = new User(un, pw);
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        userIndex.push(currentUser);
        localStorage.setItem("userIndex", JSON.stringify(userIndex));
        console.log("User Created, pushed to Array: " + currentUser.name + " | " + currentUser.password + "/n" +  userIndex);
        //window.location="symptoms.html"
    }

    else {
        console.log ("!!! CRITICAL: Unhandled 'if' case in function 'signUp()'. Investigate and repair!");
    }
};

/* Sign In function here */

const signIn = function() {
    var unField = document.getElementById("username-field");
    var pwField = document.getElementById("password-field");
    var un = unField.value;
    var pw = pwField.value;
    var regexPass = (properRegex.test(un) && properRegex.test(pw));
    var unCheck = (function () {/*Returns 'User' object at given index if entered username matches given User's name field, false if it matches to none.*/
        for (var i = 0; i < userIndex.length; i++) {
            if (userIndex[i].name === un) {
                return userIndex[i];
            } else {
            }
        }
        return false;
    })();

    if (!regexPass) {
        unField.value = "";
        pwField.value = "";
        window.alert("We cannot accept that username and/or password.\n\nPlease enter a string of letters ( [aA-zZ] and numbers [0-9], up to 20 characters long ) into both fields!");
    }

    else if (regexPass && !unCheck) {
        window.alert("User does not exist! Please either Sign Up as that user, or try to log in with a different username.");
    }

    else if (regexPass && unCheck) {
        var currentUser = unCheck;
        console.log("Existing user found, pulled from localStorage: " + currentUser.name + " | " + currentUser.password + " .");
        //window.location="symptoms.html"
    }

    else {
        console.log("!!! CRITICAL: Unhandled 'if' case in function 'signIn()'. Investigate and repair!");
    }
};

/* Cut out the middleman! *Anonymous* function to attach both listeners upon document.load here */

window.addEventListener("load", function(){
    document.getElementById("sign-in-button").addEventListener("click", signIn);
    document.getElementById("sign-up-button").addEventListener("click", signUp);
});

/**

 [//
 User enters their information and selects a button. Blank fields returns alert.
 1a) Sign Up: Checks userIndex: Already-existing user returns alert, clears fields.
 1b) Sign Up: Checks userIndex: New user creates new user object with provided name and password, installs into currentUser object, saves to userIndex, and proceeds to 'symptoms' page.
 2a) Sign In: Checks userIndex: Existing username but incorrect password returns Alert.
 2b) Sign In: Checks userIndex: Existing username with correct password writes existing user in localStorage into currentUser object, proceeds to 'symptoms' page.
 //] }

 **/

