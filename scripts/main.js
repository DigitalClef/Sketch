const button = document.querySelector('button');
const sketchMain = document.querySelector('.sketch-main');
let randColor = Math.floor(Math.random()*16777215).toString(16);
console.log(randColor);

//used to set up grid; dimensions will be generated based on parameter(size x size)
function setGridandColor(size) {    
    for (let i = 0; i < (size ** 2); i++){
        const innerSketch = document.createElement('div')
        innerSketch.classList.add('inner-sketch')
        sketchMain.appendChild(innerSketch);
        sketchMain.style.gridTemplateColumns = `repeat(${size}, 1fr)`;  
        
        innerSketch.onmouseover = function() {
            this.style.backgroundColor = `#${randColor}`;
        }
    }   
    
}
//empty all child elements in the main div; .sketch-main
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//prompts user to give a number to generate grid
button.onclick = function() {
    removeAllChildNodes(sketchMain);
    userValue = prompt('Enter a positive integer');
    setGridandColor(userValue);
}






