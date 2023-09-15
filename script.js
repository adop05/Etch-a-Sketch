let color = 'black';
let click = false;
createBoard(16)

document.querySelector('body').addEventListener('click', function(e){
    if(e.target.tagName != 'BUTTON'){
        click = !click
        let draw = document.querySelector('.draw')
        if (click){
            draw.textContent = "You can draw"
        }
        else {
            draw.textContent = 'You cannot draw'
        }
    }
})

let popUpBtn = document.querySelector('.selectSize')

popUpBtn.addEventListener('click', function (){
    let size = getSize();
    createBoard(size);
})

function createBoard(size){
    const grid = document.querySelector('.grid')
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++){
        const gridElement = document.createElement('div')
        gridElement.classList.add('grid-element')
        gridElement.addEventListener('mouseover', colorDiv);
        grid.appendChild(gridElement)
    }

}

function getSize() {
    let input = prompt('Input size of the board')
    let message = document.querySelector('.message')
    if (input === ''){
        message.textContent = 'Plese provide a number'
    }
    else if (input <= 0 || input > 100){
        message.textContent = 'Provide a number between 1 and 100'
    }
    else {
        message.textContent = 'Now you can play'
        return input;
    }
}

function colorDiv() {
    if (click){
        if (color == 'random'){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%`
        }
        else {
            this.style.backgroundColor = 'black'
        }
    }    
}

function setColor(colorChoice) {
    color = colorChoice
}

function clearBoard(){
    let divs = document.querySelectorAll('div')
    divs.forEach((div) => div.style.backgroundColor = 'white')
}