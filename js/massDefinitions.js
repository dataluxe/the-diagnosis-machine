/* SYMPTOMS */

const symptomIndex = [
    ["Energy", "../images/symptoms/energy.png"],
    ["Digestion", "../images/symptoms/digestion.png"],
    ["Mood", "../images/symptoms/mood.png"],
    ["Headaches", "../images/symptoms/headaches.png"],
    ["Foggy Brain", "../images/symptoms/foggybrain.png"],
    ["Bone Problems", "../images/symptoms/boneproblems.png"],
    ["Allergies", "../images/symptoms/allergies.png"],
    ["Sugar Cravings", "../images/symptoms/sugercravings.png"],
    ["Heart Trouble", "../images/symptoms/hearttrouble.png"],
    ["Recurring Flu / Colds", "../images/symptoms/recurringflu.png"],
    ["Romantic Health", "../images/symptoms/romantichealth.png"],
    ["General Nutrition", "../images/symptoms/generalnutrition.png"]
];

/* SUPPLEMENTS */

function Supplement (inpObj) {
    this.name = inpObj.name; //string
    this.link = inpObj.link; //string - external link
    this.picture = "./images/supplements/" + inpObj.name + ".jpg"; //image filename must equal supplement name
    this.description = inpObj.description; //string. Good reason to make these in external blocks
    this.price = inpObj.price;
    this.symptoms = inpObj.symptoms;
}

var supplementIndex = [];

const calciumComplex = new Supplement({
    name : "Calcium Complex",
    link : "",
    description : "",
    price: 29.95,
    symptoms: {
        "Energy" : 5,
        "Digestion" : 5,
        "Mood" : 2,
        "Headaches" : 5,
        "Foggy Brain" : 0,
        "Bone Problems" : 3,
        "Allergies" : 5,
        "Sugar Cravings" : 7,
        "Heart Trouble" : 8,
        "Recurring Flu / Colds" : 4,
        "Romantic Health" : 4,
        "General Nutrition": 6
    }
});
supplementIndex.push(calciumComplex);