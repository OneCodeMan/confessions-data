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
    buttonSelectEl.innerHTML += '<div class="button"><button type="btn" class="btn btn-outline-dark" onClick="generateConfession(value)" value="' + label + '">' + label + ' ' + emojisMap[label] + ' </button></div>';
}

textContentEl.innerText = generateRandomElementFrom(confessions).text;
textContentEl.style.color = '#' + generateRandomElementFrom(textColoursLight);


function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

function generateConfession(label) {
    let categoryList = categorizedConfessionsDict[label];
    let randomConfession = generateRandomElementFrom(categoryList);
    let randomConfessionText = randomConfession.text;
    let randomTextColour = generateRandomElementFrom(textColoursLight);
    let randomFont = generateRandomElementFrom(fonts);
    // console.log(randomConfession);
    textContentEl.innerText = randomConfessionText;
    textContentEl.style.color = '#' + randomTextColour;
    textContentEl.style.fontFamily = randomFont;
    console.log(randomFont);
    animateCSS('.text', generateRandomElementFrom(animations));
}

function generateRandomElementFrom(array) {
    let index = array.length * Math.random() | 0;
    return array[index];
}

// function generateRandomIndexFromArray(array) {
//     return array.length * Math.random() | 0;
// }

