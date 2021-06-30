const sizeButton = document.querySelector('#size-button');
const rainbowButton = document.querySelector('#rainbow-button');
const sketchMain = document.querySelector('.sketch-main');
const clearButton = document.querySelector('#clear-button');
const originalButton = document.querySelector('#original-button');
const eraseButton = document.querySelector('#erase-button');

//used to set up grid; dimensions will be generated based on parameter(size x size)
function setGrid(size) {     
    sketchMain.style.gridTemplateColumns = `repeat(${size}, 1fr)`; 
    clearButton.addEventListener('click', function() {
        emptyGrid();
        setGrid(size);
    }); 

    for (let i = 0; i < (size ** 2); i++){
        const innerSketch = document.createElement('div');
        
        innerSketch.onmouseover = function(e) {
            e.target.style.backgroundColor = 'black';
        };
        rainbowButton.addEventListener('click', function() {
            drawRainbow(innerSketch);
        })
        originalButton.addEventListener('click', function() {
            draw(innerSketch, '000');
        });
        eraseButton.addEventListener('click', function() {
            draw(innerSketch, 'FFF');
        });
        sketchMain.appendChild(innerSketch);
    }      
}

//sets color to rainbow color
function drawRainbow(insketch) {
    insketch.onmouseover = function() {
        let randColor = Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = `#${randColor}`;    
    }
}

//sets color to either black or white
function draw(insketch, color) {
    insketch.onmouseover = function() {
        this.style.backgroundColor = `#${color}`;    
    }
}

//empty all child elements in the main div; .sketch-main
function emptyGrid() {
    while (sketchMain.firstChild) {
        sketchMain.removeChild(sketchMain.firstChild);
    }
}

//sets grid to size 16x16 by default
setGrid(16);

//prompts user to give a number to generate grid
sizeButton.onclick = function() {
    emptyGrid();
    userValue = prompt('Enter a positive integer');
    setGrid(userValue);
}
