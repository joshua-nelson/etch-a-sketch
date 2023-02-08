const container = document.querySelector('.etch__main');
const resetColorBtn = document.querySelector('.reset');
const rainbowBtn = document.querySelector('.rainbow');
const gridSizeBtn = document.querySelector('#gridSize');

let isRainbow = false;
let gridValue = 64;
let gridSize = Math.pow(gridValue, 2);
let gridArray;

function createGrid() {
    if(gridValue > 64) {
        gridValue = 64;
        alert("Grid value too high. Maximum is 64");
    } 

    for (i = 1; i <= gridSize; i ++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);
        
    }
 
    container.style.gridTemplateColumns = `repeat(${gridValue}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridValue}, 1fr)`;
    createGridEvents();
}

function resetGrid() {
    let gridList = Array.from(document.querySelectorAll('.grid')); 
    gridList.forEach(e => {
        e.remove();
    });
    createGrid();
}



function resetColor() {
    const grid = Array.from(document.querySelectorAll('div.grid'));
    grid.forEach(e => {

        e.classList.remove('active');
        e.style.backgroundColor = null;
       
    } );
}



function randomInteger(max) {
    
    return Math.floor(Math.random() * (max + 1) );

}

function switchColor() {
    isRainbow = !isRainbow;
}

function randomRgb() {
    r = randomInteger(255);
    g = randomInteger(255);
    b = randomInteger(255);

    return [r,g,b];
}

createGrid();

function createGridEvents() {
    const grid = Array.from(document.querySelectorAll('div.grid'));
    grid.forEach(element => {
        element.addEventListener('mouseenter', function(e) {
            const rgb = randomRgb()
    
            if(isRainbow) {
                e.target.style.backgroundColor = `rgb(${rgb[0]},${rgb[1]}, ${rgb[2]})`;
            } else if(!isRainbow) {
                e.target.classList.add('active');
            }
            
            
        });
    });
}



resetColorBtn.addEventListener('click', function(){
    resetColor();
});

rainbowBtn.addEventListener('click', function(){
    resetColor();
    if(!isRainbow) {
    switchColor();
    rainbowBtn.style.backgroundColor = '#F1F7B8';
    } else if (isRainbow) {
        rainbowBtn.style.backgroundColor = 'white';
        switchColor();
    }
   
})

gridSizeBtn.addEventListener('click', function(e){
    gridValue = prompt("Enter a value for the grid size.");
    resetGrid();
});


