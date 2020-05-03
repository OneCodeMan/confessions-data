// unique labels:   ["None", "Sex", "Mental Health", "Money/Financial", "Medical", "Drugs", 
//                  "Race/Protected Groups", "Excretions", "Academics", "Death"]

let uniqueLabels = [...new Set(confessions.map(item => item.label))];
uniqueLabels.push('Random');

let categorizedConfessionsDict = {};
let textContentEl = document.getElementById('text-content');
let buttonSelectEl = document.getElementById('button-select');

for (label of uniqueLabels) {
    let labeledConfessions = label === 'Random' ? confessions : confessions.filter(item => item.label == label);
    categorizedConfessionsDict[label] = labeledConfessions;
    buttonSelectEl.innerHTML += '<div class="button"><button onClick="generateConfession(value)" value="' + label + '">' + label + '</button></div>';
}

textContentEl.innerText = confessions[generateRandomIndexFromArray(confessions)].text;

function generateConfession(label) {
    let categoryList = categorizedConfessionsDict[label];
    let randomConfession = categoryList[generateRandomIndexFromArray(categoryList)].text;
    textContentEl.innerText = randomConfession;
}

function generateRandomIndexFromArray(array) {
    return array.length * Math.random() | 0;
}

