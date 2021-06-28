const button = document.querySelector('button');

function setGrid(size) {
    const sketchMain = document.querySelector('.sketch-main');
        
    for (let i = 0; i < (size ** 2); i++){
        const innerSketch = document.createElement('div')
        innerSketch.classList.add('inner-sketch')
        sketchMain.appendChild(innerSketch);
        sketchMain.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    }    
}

setGrid(8);




    