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

supplementIndex.push(new Supplement({
    name : "B Stress Complex",
    link : "https://www.buyfoodresearch.com/products/b-stress-complex",
    picture : "./images/supplements/BStressComplex.png",
    description : "B Stress Complex is a 100% vegetarian Food supplement that is intended to supply 100% Food B vitamins. Unlike certain so called “whole food” B vitamin sources, it does not contain isolated USP niacinamide, pyridoxine hydrochloride, or any isolated “nutrients”. Studies have shown that FOOD B vitamins are between 38% and 294% better absorbed into the blood that compared with typical USP B vitamins.",
    price: 30.98,
    symptoms: {
        "Energy" : 9,
        "Digestion" : 3,
        "Mood" : 6,
        "Headaches" : 3,
        "Foggy Brain" : 5,
        "Bone Problems" : 1,
        "Allergies" : 2,
        "Sugar Cravings" : 2,
        "Heart Trouble" : 2,
        "Recurring Flu / Colds" : 0,
        "Romantic Health" : 0,
        "General Nutrition" : 4
    }
}));

supplementIndex.push(new Supplement({
    name : "Metabolic Thyro",
    link : "https://www.buyfoodresearch.com/products/metabolic-thyro",
    picture : "./images/supplements/MetabolicThyro.png",
    description : "Metabolic Thyro is a 100% Food supplement that is intended to supply nutrients, glandulars, and herbs needed to maintain and support optimal thyroid health. It contains both naturally-iodine containing kelp, plant source l-tyrosine, bovine glandulars, and herbs to support an optimally functioning thyroid.",
    price: 21.98,
    symptoms: {
        "Energy" : 9,
        "Digestion" : 1,
        "Mood" : 6,
        "Headaches" : 1,
        "Foggy Brain" : 4,
        "Bone Problems" : 1,
        "Allergies" : 0,
        "Sugar Cravings" : 0,
        "Heart Trouble" : 0,
        "Recurring Flu / Colds" : 1,
        "Romantic Health" : 3,
        "General Nutrition" : 1
    }
}));

supplementIndex.push(new Supplement({
    name : "Gall Bladder Support",
    link : "https://www.buyfoodresearch.com/products/gb-support",
    picture : "./images/supplements/GallBladderSupport.png",
    description : "Gall Bladder Support is a 100% Food supplement that is intended to supply nutrients, glandulars, and herbs needed to maintain and support optimal gall bladder and digestive health. Gall Bladder Support is intended to support the liver and digestive system’s abilities to cleanse themselves and to metabolize fats. Gall Bladder Support provides bile that will support the healthy metabolism and absorption of dietary fat when the gall bladder has been surgically removed. Collinsonia root has long been used as a tonic herb to support the digestive system.",
    price: 23.98,
    symptoms: {
        "Energy" : 0,
        "Digestion" : 7,
        "Mood" : 0,
        "Headaches" : 0,
        "Foggy Brain" : 0,
        "Bone Problems" : 0,
        "Allergies" : 1,
        "Sugar Cravings" : 1,
        "Heart Trouble" : 0,
        "Recurring Flu / Colds" : 0,
        "Romantic Health" : 0,
        "General Nutrition" : 1
    }
}));


supplementIndex.push(new Supplement({
    name : "Para-Dysbio-Zyme",
    link : "https://www.buyfoodresearch.com/products/para-dysbio-zyme",
    picture : "./images/supplements/ParaDysbioZyme.png",
    description : "Para-Dysbio-Zyme is a 100% vegetarian Food supplement that is intended to supply enzymes and herbs needed to maintain and support optimal digestive health. It provides herbs and various proteolytic enzymes to support the healthy functioning of the gastrointestinal system.",
    price: 23.98,
    symptoms: {
        "Energy" : 1,
        "Digestion" : 7,
        "Mood" : 1,
        "Headaches" : 1,
        "Foggy Brain" : 1,
        "Bone Problems" : 0,
        "Allergies" : 5,
        "Sugar Cravings" : 3,
        "Heart Trouble" : 0,
        "Recurring Flu / Colds" : 1,
        "Romantic Health" : 1,
        "General Nutrition" : 0
    }
}));


supplementIndex.push(new Supplement({
    name : "Kava Forte",
    link : "https://www.standardprocess.com/Products/MediHerb/Kava-Forte",
    picture : "./images/supplements/KavaForte.png",
    description : "This tablet contains Kava root extracted with 100% water, which provides an extract with a full spectrum of compounds including kavalactones. This product is standardized to contain 50 mg of kavalactones per tablet to ensure optimal strength and quality. The compounds in Kava Forte, particularly the kavalactones, work together to calm the nerves, ease the effects of mild tension and stress, promote relaxation and sleep and support muscle relaxation",
    price: 40.00,
    symptoms: {
        "Energy" : 2,
        "Digestion" : 0,
        "Mood" : 9,
        "Headaches" : 0,
        "Foggy Brain" : 1,
        "Bone Problems" : 0,
        "Allergies" : 0,
        "Sugar Cravings" : 0,
        "Heart Trouble" : 0,
        "Recurring Flu / Colds" : 0,
        "Romantic Health" : 2,
        "General Nutrition": 0
    }
}));


supplementIndex.push(new Supplement({
    name : "DopaTropic Powder",
    link : "http://www.bioticsresearch.com/node/2684",
    picture : "./images/supplements/DopaTropic.png",
    description : "DopaTropic® Powder contains a naturally occurring source of L-Dopa from the seed of the Mucuna pruriens plant. Dopamine functions to trigger numerous nerve impulses that affect muscle movement. Dopamine is also largely responsible for regulating physical movement, and emotion, and also effects the pleasure and motivation centers of the brain. Dopamine also assists neuronal transmission between neurons in the brain. Thus, the less dopamine there is, the less communication there is between the cells in the substantia nigra (midbrain). This area of the brain plays an important role in reward, addiction, and movement.",
    price: 37.98 ,
    symptoms: {
        "Energy" : 3,
        "Digestion" : 0,
        "Mood" : 7,
        "Headaches" : 2,
        "Foggy Brain" : 2,
        "Bone Problems" : 0,
        "Allergies" : 0,
        "Sugar Cravings" : 4,
        "Heart Trouble" : 0,
        "Recurring Flu / Colds" : 0,
        "Romantic Health" : 1,
        "General Nutrition": 0
    }
}));


supplementIndex.push(new Supplement({
    name : "Vira-Chron",
    link : "https://www.buyfoodresearch.com/products/vira-chron",
    picture : "./images/supplements/ViraChron.png",
    description : "Vira-Chron is a 100% vegetarian Food supplement that is intended to supply nutrients needed to maintain and support optimal immune system health. It contains a variety of Western and Eastern (Chinese) herbs that have historically, as well as recently, been used to support the immune system. It supports a healthy liver and healthy sinuses. It is also taken by some to support digestive system health when imbalances there are encountered.",
    price: 25.98,
    symptoms: {
        "Energy" : 1,
        "Digestion" : 0,
        "Mood" : 0,
        "Headaches" : 7,
        "Foggy Brain" : 5,
        "Bone Problems" : 0,
        "Allergies" : 1,
        "Sugar Cravings" : 0,
        "Heart Trouble" : 2,
        "Recurring Flu / Colds" : 6,
        "Romantic Health" : 0,
        "General Nutrition": 0
    }
}));


supplementIndex.push(new Supplement({
    name : "Porphyra-Zyme",
    link : "http://www.bioticsresearch.com/node/1562",
    picture : "./images/supplements/PorphyraZyme.png",
    description : "Porphyra-Zyme™ supplies botanical extracts and concentrates, providing naturally occurring chlorophyllin, galactoglycerides, chlorophyll, and other phytonutrients to support the normal, healthy elimination of toxic metals. Unlike traditional chlorophyll products, Porphyra-Zyme™ is a concentrated porphyrin supplement. Porphyrins have the ability to bind divalent metal ions due to the nitrogen atoms of the tetrapyrrole nucleus. The central ion in chlorophyll is magnesium, which is freed from chlorophyll under acidic conditions, permitting other metals to bind in its place. Toxic metals, such as mercury, lead and arsenic, are complexed first. Then excess amounts of other divalent metals, such as calcium, can be complexed by porphyrins. By increasing the porphyrin content, the heavy metal binding capability is also increased, thus providing clinicians with a natural, effective “chelating” tool.",
    price: 49.95,
    symptoms: {
        "Energy" : 2,
        "Digestion" : 2,
        "Mood" : 2 ,
        "Headaches" : 8,
        "Foggy Brain" : 6,
        "Bone Problems" : 2,
        "Allergies" : 2,
        "Sugar Cravings" : 0,
        "Heart Trouble" : 0,
        "Recurring Flu / Colds" : 3,
        "Romantic Health" : 2,
        "General Nutrition": 0
    }
}));


supplementIndex.push(new Supplement({
    name : "Serious Brain Enhancer",
    link : "https://www.buyfoodresearch.com/products/serious-brain-enhancer",
    picture : "./images/supplements/SeriousBrainEnhancer.png",
    description : "Serious Brain Enhancer is a 100% Food supplement that is intended to supply nutrients, glandulars, and herbs needed for optimal brain health. The brain is the master organ of the body and directly or indirectly controls nearly all processes in the body including movement, intellect, memory, and mood. Bovine brain tissue naturally contains substances such as phosphatidylserine. Serious Brain Enhancer also contains pituitary, medulla, and other bovine tissues, along with the antioxidants selenium and vitamin E. Serious Brain Enhancer also contains ribonucleic acid.",
    price: 28.98,
    symptoms: {
        "Energy" : 1,
        "Digestion" : 0,
        "Mood" : 5,
        "Headaches" : 5,
        "Foggy Brain" : 5,
        "Bone Problems" : 0,
        "Allergies" : 0,
        "Sugar Cravings" : 0,
        "Heart Trouble" : 0,
        "Recurring Flu / Colds" : 0,
        "Romantic Health" : 0,
        "General Nutrition": 0
    }
}));


supplementIndex.push(new Supplement({
    name : "Arctic Cod Liver Oil",
    link : "http://www.nordicnaturals.com/en/Products/Product_Details/514/?ProdID=1418",
    picture : "./images/supplements/ArcticCodLiverOil.png",
    description : "Arctic Cod Liver Oil™ (CLO) has always been derived from 100% wild Arctic cod—no other fish oils or synthetic additives are ever used. The hallmark of achievement for Nordic Naturals is the uniqueness of the Arctic Cod Liver Oil, which is vertically integrated from boat to bottle. By managing every step of the supply chain, we ensure the exceptional quality, safety, and sustainability of our products. Our flavored Arctic Cod Liver Oil liquids are perfect for customers who don’t like to swallow pills, and they’re so tasty it’s hard to believe they’re from fish.",
    price: 36.95,
    symptoms: {
        "Energy" : 2,
        "Digestion" : 0,
        "Mood" : 4,
        "Headaches" : 5,
        "Foggy Brain" : 4,
        "Bone Problems" : 3,
        "Allergies" : 0,
        "Sugar Cravings" : 1,
        "Heart Trouble" : 4,
        "Recurring Flu / Colds" : 2,
        "Romantic Health" : 2,
        "General Nutrition": 5
    }
}));


supplementIndex.push(new Supplement({
    name : "Bio Dent",
    link : "https://www.standardprocess.com/Products/Standard-Process/Bio-Dent",
    picture : "./images/supplements/BioDent.png",
    description : "Standard Process Bio-Dent is for the bone which is really a dynamic and multipurpose tissue. Bone is the storehouse for minerals such as calcium, phosphorus, and manganese, as well as for proteins, amino acids, and enzymes. Bio-Dent supplies these important nutritional compounds to help maintain bone health.",
    price: 84.60,
    symptoms: {
        "Energy" : 0,
        "Digestion" : 0,
        "Mood" : 0,
        "Headaches" : 0,
        "Foggy Brain" : 0,
        "Bone Problems" : 9,
        "Allergies" : 0,
        "Sugar Cravings" : 0,
        "Heart Trouble" : 0,
        "Recurring Flu / Colds" : 0,
        "Romantic Health" : 0,
        "General Nutrition": 1
    }
}));


supplementIndex.push(new Supplement({
    name : "Phosfood",
    link : "https://www.standardprocess.com/Products/Standard-Process/Phosfood-Liquid",
    picture : "./images/supplements/Phosfood.png",
    description : "Standard Process Phosfood supplies phosphorus from ortho-phosphoric acid. Phosphorus is an important nutrient supporting healthy calcium metabolism, circulatory and sympathetic nervous system function, and proper pH balance.",
    price: 24.00,
    symptoms: {
        "Energy" : 2,
        "Digestion" : 2,
        "Mood" : 0,
        "Headaches" : 0,
        "Foggy Brain" : 0,
        "Bone Problems" : 7,
        "Allergies" : 3,
        "Sugar Cravings" : 2,
        "Heart Trouble" : 4,
        "Recurring Flu / Colds" : 1,
        "Romantic Health" : 1,
        "General Nutrition": 3
    }
}));


supplementIndex.push(new Supplement({
    name : "Cal-Amo",
    link : "https://www.standardprocess.com/Products/Standard-Process/Cal-Amo",
    picture : "./images/supplements/CalAmo.png",
    description : "Cal-Amo supports normal cellular pH.* Contains compounds that are useful in supporting proper acid/alkaline balance Supports respiratory function*",
    price: 39.92,
    symptoms: {
        "Energy" : 1,
        "Digestion" : 5,
        "Mood" : 0,
        "Headaches" : 1,
        "Foggy Brain" : 1,
        "Bone Problems" : 5,
        "Allergies" : 8,
        "Sugar Cravings" : 0,
        "Heart Trouble" : 2,
        "Recurring Flu / Colds" : 5,
        "Romantic Health" : 0,
        "General Nutrition": 1
    }
}));


supplementIndex.push(new Supplement({
    name : "A.D.P",
    link : "http://www.bioticsresearch.com/node/1653",
    picture : "./images/supplements/ADP.png",
    description : "A.D.P.® is a proven effective, patented formula. Utilizing micro-emulsification and delayed release technologies, A.D.P.® delivers standardized oil of oregano throughout the digestive tract, where it functions to impact undesirable intestinal organisms.",
    price: 41.99,
    symptoms: {
        "Energy" : 1,
        "Digestion" : 6,
        "Mood" : 0,
        "Headaches" : 3,
        "Foggy Brain" : 3,
        "Bone Problems" : 0,
        "Allergies" : 7,
        "Sugar Cravings" : 1,
        "Heart Trouble" : 0,
        "Recurring Flu / Colds" : 4,
        "Romantic Health" : 0,
        "General Nutrition": 0
    }
}));


supplementIndex.push(new Supplement({
    name : "Gluco-Sugar-Balance",
    link : "https://www.buyfoodresearch.com/products/gluco-sugar-balance",
    picture : "./images/supplements/GlucoSugarBalance.png",
    description : "Gluco-Sugar-Balance is a 100% vegetarian Food intended to help support a healthy balance of glucose in the body. It contains minerals, such as chromium GTF and vanadium, as well as herbs to nutritionally support the body’s blood sugar systems.",
    price: 23.98,
    symptoms: {
        "Energy" : 4,
        "Digestion" : 0,
        "Mood" : 3,
        "Headaches" : 2,
        "Foggy Brain" : 3,
        "Bone Problems" : 0,
        "Allergies" : 0,
        "Sugar Cravings" : 7,
        "Heart Trouble" : 0,
        "Recurring Flu / Colds" : 0,
        "Romantic Health" : 0,
        "General Nutrition": 0
    }
}));


supplementIndex.push(new Supplement({
    name : "Gymnema",
    link : "https://www.standardprocess.com/Products/MediHerb/Gymnema",
    picture : "./images/supplements/Gymnema.png",
    description : "Gymnema contains a complex mixture of saponins (gymnemic acids) and other compounds. This product is standardized to contain 100 mg per tablet of gymnemic acids to ensure optimal strength and quality. The substances in Gymnema work together to: help reduce sweet cravings help suppress/inhibit sweet taste sensation",
    price: 91.60,
    symptoms: {
        "Energy" : 2,
        "Digestion" : 0,
        "Mood" : 1,
        "Headaches" : 0,
        "Foggy Brain" : 0,
        "Bone Problems" : 0,
        "Allergies" : 0,
        "Sugar Cravings" : 6,
        "Heart Trouble" : 0,
        "Recurring Flu / Colds" : 0,
        "Romantic Health" : 0,
        "General Nutrition": 0
    }
}));


supplementIndex.push(new Supplement({
    name : "Simply Cardio",
    link : "https://www.buyfoodresearch.com/products/simply-cardio",
    picture : "./images/supplements/SimplyCardio.png",
    description : "Simply Cardio is a 100% Food supplement that is intended to supply nutrients needed to maintain and support optimal heart muscle health. The heart pumps blood containing oxygen and other nutrients throughout the body. Bovine heart tissue naturally contains vital heart nutrients like co-enzyme Q10.",
    price: 26.98,
    symptoms: {
        "Energy" : 0,
        "Digestion" : 0,
        "Mood" : 0,
        "Headaches" : 0,
        "Foggy Brain" : 0,
        "Bone Problems" : 0,
        "Allergies" : 0,
        "Sugar Cravings" : 0,
        "Heart Trouble" : 7,
        "Recurring Flu / Colds" : 0,
        "Romantic Health" : 0,
        "General Nutrition": 1
    }
}));


supplementIndex.push(new Supplement({
    name : "Cardio-Plus",
    link : "https://www.standardprocess.com/Products/Standard-Process/Cardio-Plus",
    picture : "./images/supplements/CardioPlus.png",
    description : "Standard Process Cardio is a special combination product containing bovine heart PMG extract and naturally occurring Coenzyme Q10. It has been well established in scientific literature that these nutrients are important for healthy cardiovascular function.",
    price: 57.00,
    symptoms: {
        "Energy" : 1,
        "Digestion" : 0,
        "Mood" : 0,
        "Headaches" : 0,
        "Foggy Brain" : 0,
        "Bone Problems" : 0,
        "Allergies" : 0,
        "Sugar Cravings" : 0,
        "Heart Trouble" : 7,
        "Recurring Flu / Colds" : 0,
        "Romantic Health" : 0,
        "General Nutrition": 0
    }
}));


supplementIndex.push(new Supplement({
    name : "Astragalus Complex",
    link : "https://www.standardprocess.com/Products/MediHerb/Astragalus-Complex",
    picture : "./images/supplements/AstragalusComplex.png",
    description : "Astragalus Complex is a strong tonic blend containing Astragalus, Echinacea purpurea root and Eleuthero. This combination of herbs contains many compounds including triterpenoid saponins, flavonoids, sterols, caffeic acid derivatives (especially cichoric acid), alkylamides, and a diverse group of constituents called eleutherosides. The Eleuthero component of this tablet is standardized to contain 600 mcg of syringaresinol diglucosides (eleutherosides) per tablet to ensure optimal strength and quality.",
    price: 95.00,
    symptoms: {
        "Energy" : 1,
        "Digestion" : 0,
        "Mood" : 0,
        "Headaches" : 2,
        "Foggy Brain" : 1,
        "Bone Problems" : 0,
        "Allergies" : 2,
        "Sugar Cravings" : 0,
        "Heart Trouble" : 0,
        "Recurring Flu / Colds" : 7,
        "Romantic Health" : 0,
        "General Nutrition": 0
    }
}));


supplementIndex.push(new Supplement({
    name : "Cellular Vitality",
    link : "https://www.standardprocess.com/Products/Standard-Process/Cellular-Vitality",
    picture : "./images/supplements/CellularVitality.png",
    description : "Cellular Vitality supports the body as a whole, with specific emphasis on cellular processes. Contains american ginseng, which acts as a body tonic for the byproducts of everyday stress, coenzyme Q10, an enzyme that is essential for creation of energy within the mitochondria of cells and that helps protect cells from free radicals, and Cordyceps sinensis, a mushroom powder long prized in traditional Chinese medicine with a variety of bioactive compounds that contribute to fatigue management and the maintenance of healthy blood sugar levels already within normal range.",
    price: 44.50,
    symptoms: {
        "Energy" : 4,
        "Digestion" : 0,
        "Mood" : 3,
        "Headaches" : 2,
        "Foggy Brain" : 3,
        "Bone Problems" : 1,
        "Allergies" : 0,
        "Sugar Cravings" : 4,
        "Heart Trouble" : 1,
        "Recurring Flu / Colds" : 1,
        "Romantic Health" : 1,
        "General Nutrition": 2
    }
}));


supplementIndex.push(new Supplement({
    name : "Cruciferous Complete",
    link : "https://www.standardprocess.com/Products/Standard-Process/Cruciferous-Complete",
    picture : "./images/supplements/CruciferousComplete.png",
    description : "Cruciferous Complete supports cellular health. It supports healthy liver function, provides antioxidant activity, and supports calcium absorption, blood clotting, and healthy liver function via Vitamin K. Our research shows some compounds in kale and Brussels sprouts promote the liver's natural phase one and two detoxification processes in cell and animal models.",
    price: 27.00,
    symptoms: {
        "Energy" : 3,
        "Digestion" : 0,
        "Mood" : 4,
        "Headaches" : 2,
        "Foggy Brain" : 2,
        "Bone Problems" : 1,
        "Allergies" : 1,
        "Sugar Cravings" : 1,
        "Heart Trouble" : 0,
        "Recurring Flu / Colds" : 0,
        "Romantic Health" : 7,
        "General Nutrition": 3
    }
}));


supplementIndex.push(new Supplement({
    name : "Symplex M",
    link : "https://www.standardprocess.com/Products/Standard-Process/Symplex-M",
    picture : "./images/supplements/SymplexM.png",
    description : "Symplex M supports the healthy function of the testes and the adrenal, pituitary, and thyroid glands. It provides uniquely derived nucleoprotein-mineral extracts that support cellular health. For women's health, check out Symplex F!",
    price: 63.00,
    symptoms: {
        "Energy" : 2,
        "Digestion" : 0,
        "Mood" : 2,
        "Headaches" : 0,
        "Foggy Brain" : 1,
        "Bone Problems" : 1,
        "Allergies" : 0,
        "Sugar Cravings" : 0,
        "Heart Trouble" : 0,
        "Recurring Flu / Colds" : 0,
        "Romantic Health" : 8,
        "General Nutrition": 0
    }
}));


supplementIndex.push(new Supplement({
    name : "Vitamin-Mineral",
    link : "https://www.buyfoodresearch.com/products/vitamin-mineral",
    picture : "./images/supplements/VitaminMineral.png",
    description : "Vitamin-Mineral is a 100% vegetarian Food supplement that is the best multi-vitamin, multi-mineral product available anywhere. Unlike some other claimed “whole food” multi-formulas, it does not contain ANY isolate USP nutrients, plus it contains the RDI amount of the more costly food nutrients such as chromium GTF.",
    price: 101.98,
    symptoms: {
        "Energy" : 2,
        "Digestion" : 2,
        "Mood" : 2,
        "Headaches" : 1,
        "Foggy Brain" : 2,
        "Bone Problems" : 4,
        "Allergies" : 1,
        "Sugar Cravings" : 2,
        "Heart Trouble" : 2,
        "Recurring Flu / Colds" : 3,
        "Romantic Health" : 2,
        "General Nutrition": 9
    }
}));


supplementIndex.push(new Supplement({
    name : "Vitamin & Mineral Shake",
    link : "https://www.buyfoodresearch.com/products/vitamin-mineral-shake",
    picture : "./images/supplements/VitaminMineralShake.png",
    description : "Vitamin & Mineral Shake is a 100% vegetarian Food supplement that is intended to supply nutrients needed to provide high quality 100% Food vitamins and 100% Food minerals in a green powder form that can be mixed into liquid shake.",
    price: 102.98,
    symptoms: {
        "Energy" : 2,
        "Digestion" : 3,
        "Mood" : 2,
        "Headaches" : 1,
        "Foggy Brain" : 2,
        "Bone Problems" : 3,
        "Allergies" : 1,
        "Sugar Cravings" : 5,
        "Heart Trouble" : 1,
        "Recurring Flu / Colds" : 2,
        "Romantic Health" : 1,
        "General Nutrition": 8
    }
}));


supplementIndex.push(new Supplement({
    name : "Plant-Derived Colloidal Minerals (PDCM)",
    link : "http://www.diversehealthservices.com/search/PDCM-72%2B_PT321.html",
    picture : "./images/supplements/PDCM.png",
    description : "PDCM72+® plant derived organic colloidal minerals are sub-micron sized particles containing a natural negative electrical charge with two important benefits: first, when absorbed by the body, organic colloids act like a magnet helping pull broken-down cells and toxins into the bloodstream to be eliminated, and second PDCM organic colloidal minerals greatly enhance the transport and availability of other nutrients from foods, vitamins and other supplements. Its 98% absorption rate is 10 times greater than metallic minerals, Even the best laboratory-chelated mineral absorption rate is not greater than 40%.",
    price: 75.00,
    symptoms: {
        "Energy" : 1,
        "Digestion" : 1,
        "Mood" : 1,
        "Headaches" : 1,
        "Foggy Brain" : 1,
        "Bone Problems" : 1,
        "Allergies" : 1,
        "Sugar Cravings" : 4,
        "Heart Trouble" : 1,
        "Recurring Flu / Colds" : 1,
        "Romantic Health" : 1,
        "General Nutrition": 7
    }
}));


supplementIndex.push(new Supplement({
    name : "C Complex",
    link : "https://www.buyfoodresearch.com/products/c-complex",
    picture : "./images/supplements/CComplex.png",
    description : "C Complex is a 100% vegetarian Food supplement that is intended to supply 100% Food Vitamin C. Unlike some other so-called “whole food” vitamins, it does not contain any isolated ascorbic acid. Royal Lee claimed that ascorbic acid was not Vitamin C. Food Vitamin C is an antioxidant and has long been recognized as an important nutrient for supporting cardiovascular, immune, musculoskeletal, endocrine, and other systems. Studies have shown that FOOD Vitamin C has at least 17 times the antioxidant effect of USP ascorbic acid and is superior for optimal human health.",
    price: 67.98,
    symptoms: {
        "Energy" : 1,
        "Digestion" : 1,
        "Mood" : 1,
        "Headaches" : 4,
        "Foggy Brain" : 2,
        "Bone Problems" : 1,
        "Allergies" : 3,
        "Sugar Cravings" : 1,
        "Heart Trouble" : 2,
        "Recurring Flu / Colds" : 6,
        "Romantic Health" : 1,
        "General Nutrition": 6
    }
}));


supplementIndex.push(new Supplement({
    name : "Iodoral",
    link : "http://www.optimox.com/iodoral",
    picture : "./images/supplements/Iodoral.png",
    description : "Iodoral is a tablet form of Lugol solution. One 12.5 mg tablet of Iodoral supplies an amount of total elemental iodine comparable to the average daily intake of this essential element by mainland Japanese. Iodine is an essential element. Although its main function is in the production of thyroid hormones by the thyroid gland, other organs in the body have a need for iodine in order to function normally.",
    price: 50.00,
    symptoms: {
        "Energy" : 5,
        "Digestion" : 3,
        "Mood" : 4,
        "Headaches" : 4,
        "Foggy Brain" : 3,
        "Bone Problems" : 3,
        "Allergies" : 3,
        "Sugar Cravings" : 3,
        "Heart Trouble" : 1,
        "Recurring Flu / Colds" : 4,
        "Romantic Health" : 5,
        "General Nutrition": 5
    }
}));


supplementIndex.push(new Supplement({
    name : "Zinc Complex",
    link : "https://www.buyfoodresearch.com/products/zinc-complex",
    picture : "",
    description : "Zinc Complex is a 100% vegetarian Food supplement that is intended to supply nutrients needed to provide high quality 100% Food organic zinc (as opposed to inorganic mineral salt forms). Zinc serves a catalytic role in enzymes from all six classes of enzymes and more than 300 Zn metalloenzymes have been identified. Zinc deficiency in humans can cause alopecia, impotence, skin problems, immune deficiencies, increased susceptibility to infection/sore throats, night blindness, impaired taste, delayed wound healing, impaired appetite, photophobia (hypersensitivity to light), difficulty in dark adaptation, growth retardation, male infertility (low sperm counts), liver enlargement, and spleen enlargement.",
    price: 18.98,
    symptoms: {
        "Energy" : 3,
        "Digestion" : 5,
        "Mood" : 2,
        "Headaches" : 3,
        "Foggy Brain" : 3,
        "Bone Problems" : 4,
        "Allergies" : 4,
        "Sugar Cravings" : 4,
        "Heart Trouble" : 2,
        "Recurring Flu / Colds" : 4,
        "Romantic Health" : 3,
        "General Nutrition": 7
    }
}));


supplementIndex.push(new Supplement({
    name : "IPS",
    link : "http://www.bioticsresearch.com/node/1520",
    picture : "",
    description : "IPS® is a comprehensive Intestinal Permeability Support supplement, consisting of a proprietary blend of botanical compounds and amino acids, along with other synergistic constituents. It provides support for healthy gut function, specifically as it relates to permeability and intestinal mucosa integrity. It includes L-Glutamine, which is the preferred fuel for intestinal tissues, promoting repair and intestinal healing. L-Glutamine has also been demonstrated to be a functional component in the repair of ulcers, as well as a contributor to the healing of leaky gut conditions.",
    price: 57.98,
    symptoms: {
        "Energy" : 0,
        "Digestion" : 7,
        "Mood" : 1,
        "Headaches" : 1,
        "Foggy Brain" : 1,
        "Bone Problems" : 0,
        "Allergies" : 6,
        "Sugar Cravings" : 2,
        "Heart Trouble" : 0,
        "Recurring Flu / Colds" : 1,
        "Romantic Health" : 0,
        "General Nutrition": 0
    }
}));


supplementIndex.push(new Supplement({
    name : "Li-Zyme Forte",
    link : "http://www.bioticsresearch.com/node/1532",
    picture : "",
    description : "Li-Zyme Forte™ supplies the trace mineral lithium as a whole food, phytochemically bound vegetable culture source. It may be used where a higher concentration of lithium is indicated. Typical dietary intakes of lithium range from 200 to 600 mcg per day, however certain population groups consume levels that are significantly higher. While not considered an essential trace mineral, animal studies have documented detrimental effects of lithium deficiency. Each tablet supplies 150mcg of plant sourced lithium.",
    price: 29.98,
    symptoms: {
        "Energy" : 3,
        "Digestion" : 0,
        "Mood" : 4,
        "Headaches" : 1,
        "Foggy Brain" : 4,
        "Bone Problems" : 1,
        "Allergies" : 0,
        "Sugar Cravings" : 1,
        "Heart Trouble" : 0,
        "Recurring Flu / Colds" : 0,
        "Romantic Health" : 0,
        "General Nutrition": 3
    }
}));