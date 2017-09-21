/**
 * Created by Main on 9/4/2017.
 */
/**
 * Created by Main on 9/4/2017.
 */

getUserSetHeader = function(){

    var lsUser = JSON.parse(localStorage.getItem("currentUser"));

    var unElement = document.getElementById("navbar-username");
    var soElement = document.getElementById("navbar-signout");

    if (lsUser === null) { //If there's no user, grey-out the user and Sign-Out fields, remove any event that may exist on SignOut.
        unElement.className += "navbar-disabled";
        soElement.className += "navbar-disabled";
        soElement.removeEventListener("click", signOut)
    } else {
        unElement.innerText =lsUser.name;
        soElement.addEventListener("click", signOut);
    }

};

setHeader = function(){
    document.getElementById("navbar-username").innerText = (currentUser.name || "-Error! No currentUser-");
};

signOut = function() {
    window.location = "index.html";
};

window.addEventListener("load", function(){
    getUserSetHeader();
});