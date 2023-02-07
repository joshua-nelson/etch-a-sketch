const container = document.querySelector('.etch__main');
const resetBtn = document.querySelector('.reset');

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
        }
        
    } );
}

createGrid();

const grid = Array.from(document.querySelectorAll('div.grid'));
grid.forEach(element => {
    element.addEventListener('mouseenter', function(e) {
        e.target.classList.add('active');
    });
});

resetBtn.addEventListener('click', function(){
    reset();
});


