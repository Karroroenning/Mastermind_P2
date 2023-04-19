let btnColor = document.querySelectorAll('.choose');
let choosenColor = document.querySelector('.color-row')

// get 4 random colors

let colors = ["blue", "yellow", "orange", "green", "purple", "red"]
let finishRow = randomFinishRow();

function randomFinishRow() {
    let newRow = [...new Array(4)].map(color => {
        let random = Math.floor(Math.random() * Math.floor(colors.length));
        return colors[random];
    })
    console.log(newRow);
    return newRow;
}

// Choose color in the right div

btnColor.forEach(btn => {
    let color = btn.classList[1]
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