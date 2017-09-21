/**
 * Created by Main on 9/4/2017.
 */

    //Import CurrentUser. name, password must be populated, all other fields must be 'reset'

currentUser = function(){

    var lsUser = JSON.parse(localStorage.getItem("currentUser"));

    if (lsUser === null) {
        window.alert("!!!CRITICAL - currentUser is null!\n\n'currentUser' should be populated, with a name and password intact upon entry to this page.\n\nInvestigate and repair!");
        window.location="index.html"
    } else if (!lsUser.name || !lsUser.password){
        window.alert("!!!CRITICAL - currentUser name or password is null or empty!\n\nName and password intact upon entry to this page.\n\nInvestigate and repair!");
        window.location="index.html"
    } else {
        lsUser.selectedSymptoms = [];
        lsUser.returnedSupplements = [];
        lsUser.checkoutTotal = [];
        return lsUser;
    }

}();

setHeader = function(){
    document.getElementById("navbar-username").innerText = (currentUser.name || "-Error! No currentUser-");
};

signOut = function() {
    window.location = "index.html";
};

symptomTileClick = function(e){

    var target = e.target;

    if (target !== this) { //https://stackoverflow.com/questions/9183381/how-to-have-click-event-only-fire-on-parent-div-not-children
        console.log("symptomTileClick 'this' check failed - (child clicked). Doing nothing and immediately exiting function.");
        return;
    }

    var symptom = e.target.querySelector("div > b").innerText;
    var indexOf = currentUser.selectedSymptoms.indexOf(symptom);
    var proceedButton = document.getElementById("proceed-button") ? document.getElementById("proceed-button") : document.getElementById("proceed-enabled");

    if (indexOf !== -1) { //...eliminate the entry if it already exists, remove style...
        currentUser.selectedSymptoms.splice(indexOf, 1);
        target.classList.remove("symptom-selected");
    } else if (indexOf === -1) { // ...if the entry is new....

        if (currentUser.selectedSymptoms.length === 3) //...leave if ss array is already full....
        {
            return;
        }

        currentUser.selectedSymptoms.push(symptom); //...add symptom to array and styles to cell if not.
        target.classList.add("symptom-selected");
    }

    if (currentUser.selectedSymptoms.length < 3) {
        proceedButton.id = "proceed-button";
        proceedButton.removeEventListener("click", calculateResults);// If less than three symptoms, disable 'Proceed' button.//
    } else if (currentUser.selectedSymptoms.length === 3) { // If three symptoms, do nothing...
        proceedButton.id = "proceed-enabled";
        proceedButton.addEventListener("click", calculateResults);
    } else {
        console.log("!!! CRITICAL: unhandled case in symptomTileClick proceed-button If block! Investigate and repair!")
    }

};

calculateResults = function() {

    var symptoms = currentUser.selectedSymptoms;

    for (var i = 0; i < symptoms.length; i++) { //Check loop - exits calculateResults if given symptom matches to no entries in symptomIndex.
        if (symptomIndex.findIndex(e => e[0] === symptoms[i]) === -1) {
            console.log("!!! CRITICAL: Mismatch between page symptoms and names in supplementIndex: " + symptoms[i] + ". Investigate and repair!!");
            return false;
        }
    }

    var suppSuggestTemp = [];

    for (i = 0; i < supplementIndex.length; i++) { //For each entry in supplementIndex

        var effectSum = 0; //...initialize the symptom effectiveness sum for the analysis of *this* supplement

        symptoms.forEach(function(e){ //...for each symptom...
            effectSum += (supplementIndex[i].symptoms[e] || 0); //...Add the effectiveness rating of this supplement's entry to this supplement: only three symptoms will be matched, so OR reduced the other undefineds to 0.
        });

        suppSuggestTemp.push([supplementIndex[i].name, effectSum]); /*Push the symptom name, effectSum to the temp array.*/

    }

    suppSuggestTemp.sort(function(a, b){return b[1]-a[1]}); //Sort results by effectsum, descending
    suppSuggestTemp = suppSuggestTemp.slice(0,3); //Take the top three entries

    for (i = 0; i < symptoms.length; i++) {
        currentUser.returnedSupplements.push(supplementIndex.find(function(e){return suppSuggestTemp[i][0] === e.name}));
        currentUser.checkoutTotal += currentUser.returnedSupplements[i].price;
    }

    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    window.location="results.html";

};

window.addEventListener("load", function(){
    setHeader();
    var cells = document.getElementsByClassName("symptom-cell");
    for (var i=0; i<cells.length; i++) {
        cells[i].addEventListener('click', symptomTileClick);
    }
    document.getElementById("navbar-signout").addEventListener("click", signOut);
});

/*
Grab bulk variables from massDefinitions.
currentUser - retrieve from localStorage; Name, Password must be populated...Other fields must be blanked out. || Error if null, undefined, or malpopulated.

On window.load();

[Dom Alteration] <Username> = currentUser.name
[Event Handler] Clicking the "Sign Out" button will save currentUser into userIndex array, return to index.html.
[Event Handler]
        User clicks symptoms tiles to select the tile's symptom.
        Selected tiles change color to indicate that they're selected.
        Selected tiles clicked again will de-select them.
        If three tiles are 'selected', further attempts to select a tile will fail.
        Whilst three tiles are selected, the 'Proceed' button will be lit-up.
[Event Handler]
        When the proceed button is pressed, the heart of TDM's processing will occur:
        Place the "Symptom" page's tiles' html "Symptom Name" headings of the selected tiles are in the currentUser.selectedSymptoms string array.
        (Check) Check all three strings in currentUser.selectedSymptoms against the first value in each cell of the 'Symptom' array. Any failure here should be logged, and the datasets repaired.
        Create a temporary array called 'suppSuggestTemp'.

        Iterate over each Supplement in the supplementIndex array - within each supplement:
            Sum the 'effectiveness rating' values of the keys matching the three selected symptoms in currentUser.selectedSymptoms.
            Take the supplement.name, and the sum produced in the last step, and push those two values as an array pair to suppSuggestTemp[]
        Once the iteration in the past step is complete, sort suppSuggestTemp by the 'effectiveness rating' sum, descending.
        Clip the array to the top three results. Ties may be selected arbitrarily.
        Iterate over the supplements array once again, write the three supplement objects into the current user's user.returnedSupplements array, matching suppSuggestTemp.name to supplement.name
        Iterate over the user.ReturnedSupplements array, summing the supplements objects' price, and writing that value to user.checkoutTotal.
        Save currentUser to localStorage.
        Site proceeds to 'Results' page.
 */