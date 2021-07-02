//initialize variables
const sizeButton = document.querySelector('#size-button');
const rainbowButton = document.querySelector('#rainbow-button');
const sketchMain = document.querySelector('.sketch-main');
const clearButton = document.querySelector('#clear-button');
const originalButton = document.querySelector('#original-button');
const eraseButton = document.querySelector('#erase-button');
let color = 'black';

//creates grid when page is first loaded
function defaultGrid() {
    makeGrid(16);
    setGrid(16);
}

//uses grid display to create appropriate amount of rows and columns based on user input
function makeGrid(size) {
    sketchMain.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

//sets the color to assign to background color of created grid divs
function draw() {
    if (color === 'black') {
        this.style.backgroundColor = 'black';
    }
    else if (color === 'white') {
        this.style.backgroundColor = 'white';
    }
    else if (color === 'rainbow') {
        let randColor = Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = `#${randColor}`;
    }
}

//used to set up grid; dimensions will be generated based on parameter(size x size)
function setGrid(size) {     
    for (let i = 0; i < (size ** 2); i++) {
        const innerSketch = document.createElement('div');
        innerSketch.classList.add('inner-sketch');
        sketchMain.appendChild(innerSketch); 
    };
    //loops through sketchMain nodeList to enable mouseover event
    sketchMain.querySelectorAll('.inner-sketch').forEach(function(item) {
        item.onmouseover = draw;
    });
}

//clears grid
clearButton.addEventListener('click', function() {;
    let currentSize = sketchMain.childElementCount ** (1/2);
    emptyGrid();
    makeGrid(currentSize);
    setGrid(currentSize);
}); 

//empty all child elements in the main div; .sketch-main
function emptyGrid() {
    while (sketchMain.firstChild) {
        sketchMain.removeChild(sketchMain.firstChild);
    }
}

//sets grid to size 16x16 by default
defaultGrid();

//prompts user to give a number to generate grid
sizeButton.onclick = function() {
    do {
        userValue = parseInt(prompt('Enter a positive integer between 1 and 64'));
    }
    while (userValue < 1 || userValue > 64 || (userValue % 1) !== 0 || typeof(userValue) !== 'number');
    emptyGrid();
    makeGrid(userValue);
    setGrid(userValue);
}

//orginal button is clicked
originalButton.onclick = function() {
    color = 'black';
}

//erase button is clicked
eraseButton.onclick = function() {
    color = 'white';
}

//pride button is clicked
rainbowButton.onclick = function() {
    color = 'rainbow';
}
