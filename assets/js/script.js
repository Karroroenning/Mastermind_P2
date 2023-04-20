const btnColor = document.querySelectorAll('.choose');
const choosenColor = document.querySelector('.color-row')
const hintsSelector = document.querySelector('.hints');

// get 4 random colors

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

if(selectedColors.length === 5) {
    
    for(const selColor of selectedColors) {
    let hintsDiv = document.createElement('div');
    hintsDiv.classList.add('hints-item');
    hintsDiv.classList.add(selColor);
    hintsSelector.appendChild(div);
  }

  const hintArray = calculateHints(selectedColors);

  for(const hint of hintArray) {
    const help = document.createElement('div');
    if(hint === 'full') {
        help.classList.add('full');
    }
    else {
        help.classList.add('half');
    }
    hintsSelector.appendChild(help);
  }



  selectedColors.length = 0;
  choosenColor.innerHTML = "";
 }
}

function calculateHints(colors) {
    const hints = [];
    const dublicateCheck = [];

    colors.forEach((color, game) => {
        if(finishRow[game] === color) {
            hints.push("full");
            dublicateCheck.push(color);
        }

    })

    colors.forEach((color, game) => {
        if(dublicateCheck.includes(color) && finishRow.includes(color)) {
            hints.push("half");
        }
    })

    return hints;
}