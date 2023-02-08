const container = document.querySelector('.etch__main');
const resetBtn = document.querySelector('.reset');

Boolean 

function createGrid() {
    for (i = 1; i <= 256; i ++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);
    }
}
function reset() {
    console.log(grid);
    grid.forEach(e => {
        if (e.classList.contains('active')) {
            e.classList.remove('active');
            
        } else {
            e.style.backgroundColor = "#DDDDDD";
        }
        
    } );
}

function randomInteger(max) {
    
    return Math.floor(Math.random() * (max + 1) );

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
        //e.target.classList.add('active');
        const rgb = randomRgb()
        e.target.style.backgroundColor = `rgb(${rgb[0]},${rgb[1]}, ${rgb[2]})`;
    });
});

resetBtn.addEventListener('click', function(){
    reset();
});


