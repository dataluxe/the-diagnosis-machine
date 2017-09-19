/**
 * Created by Main on 9/4/2017.
 */

currentUser = function(){
    if (localStorage.getItem("currentUser") === null) {
        window.alert("!!!CRITICAL - currentUser is null!\n\n'currentUser' should be populated, with name, password, returnedSupplements, and checkoutTotal intact upon entry to this page.\n\nInvestigate and repair!")
    } else {
        return JSON.parse(localStorage.getItem("currentUser"));
    }
}();

setHeader = function(){
    document.getElementById("navbar-username").innerText = (currentUser.name || "-Error! No currentUser-");
};

signOut = function() {
    window.location = "index.html";
};

retry = function() {
    window.location = "symptoms.html"
};

printSupplementPanels = function() {

    var supps = currentUser.returnedSupplements;
    var panels = document.getElementsByClassName("supplement-panel");

    for(var i = 0; i < supps.length; i++) {

        var supp = supps[i];
        var panel = panels[i];

        panel.querySelector("p.supp-heading").innerText = supp.name;//p .supp-heading innerText
        panel.querySelector("img.supp-image").src = supp.picture.toString();//img src
        panel.querySelector("p.supp-desc").innerText = supp.description;//p .supp-desc innerText
        panel.querySelector("p.supp-info").innerText = "USD $ " + supp.price;//p .supp-info innerText
        panel.querySelector("a").href = supp.link;//p a href

    }
};


window.addEventListener("load", function(){
    setHeader();
    document.getElementById("navbar-signout").addEventListener("click", signOut);
    printSupplementPanels();
    document.getElementById("restart-img").addEventListener("click", retry);
});