const btnColor = document.querySelectorAll('.choose');
const choosenColor = document.querySelector('.color-row')

// get 4 random colors

const colors = ["blue", "yellow", "orange", "green", "purple", "red"]
let finishRow = randomFinishRow();

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

}