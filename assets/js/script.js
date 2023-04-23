let btnColor = document.querySelectorAll('.choose');
let choosenColor = document.querySelector('.color-row')

const colors = ["blue", "yellow", "orange", "green", "purple", "red"]
let finishRow = randomFinishRow();
const selectedColors = [];

function randomFinishRow() {
    const newRow = [...new Array(4)].map(color => {
        let random = Math.floor(Math.random() * Math.floor(colors.length));
        return colors[random];
    })
    console.log(newRow);
    return newRow;
}

// Choose color in the right div

btnColor.forEach(btn => {
    const color = btn.classList[1]
    btn.addEventListener("click", () => selectColor(color));
});

function selectColor(color) {
    console.log(color);

// Choosen color pop up in color-row

let div = document.createElement('div');
div.classList.add('choosen-color');
div.classList.add(color);
choosenColor.appendChild(div);
selectedColors.push(color);

}

function handleColorValidation(validation) {
    const won = validation.black == 4;
    const little_holes = attemptRows[attempt].getElementsByClassName('hint_holes');
    
    // Fill the hint holes
    const length = choosen-color.length;
    for (let i = 0; i < length; i++) {
        if (validation.black > 0) {
            hint_holes[i].className += " filled black";
            validation.black--;
            continue;
        } else if (validation.white > 0) {
            hint_holes[i].className += " filled white";
            validation.white--;
            continue;
        } else break;
    }
    // Next step
    if (!won && attempt + 1 < 10) {
        nextAttempt();
    } else if (won) {
        alert(' You are a champ! Good job.')
    } else if (attempt + 1 === 10) {
        // show lose
        alert('Sorry.... end of trying. Try again!')
    }
}

function setupAttemptRow() {
    setDropTargets();
    // Display check button
    const checkButton = attemptRows[attempt].getElementsByClassName('check_box')[0];
    checkButton.style.opacity = '1';
    checkButton.style.pointerEvents = 'auto';
}

function checkColors() {
    if (currentInput.indexOf(null) > -1) {
        // Not all holes are filled
        return;
    }
    const request = new XMLHttpRequest();
    const params = `colors=${currentInput}`;
}

