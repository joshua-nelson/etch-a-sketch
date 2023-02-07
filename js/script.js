const container = document.querySelector('.etch__main');


function createGrid() {
    for (i = 1; i <= 256; i ++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);
    }
}
createGrid();
 

const grid = Array.from(document.querySelectorAll('div.grid'));
console.log(grid);
grid.forEach(element => {
    element.addEventListener('mouseenter', function(e) {
        e.target.classList.add('active');
    });
});