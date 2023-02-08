const container = document.querySelector('.etch__main');
const resetBtn = document.querySelector('.reset');
const rainbowBtn = document.querySelector('.rainbow');

let isRainbow = false;

function createGrid() {
    for (i = 1; i <= 256; i ++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);
    }
}
function reset() {

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

resetBtn.addEventListener('click', function(){
    reset();
});

rainbowBtn.addEventListener('click', function(){
    reset();
    if(!isRainbow) {
    switchColor();
    rainbowBtn.style.backgroundColor = '#F1F7B8';
    } else if (isRainbow) {
        rainbowBtn.style.backgroundColor = 'white';
        switchColor();
    }
   
})


