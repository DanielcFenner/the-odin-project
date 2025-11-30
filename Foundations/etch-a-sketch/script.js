const ETCH_CONTAINER = document.getElementById('etch-container');

function createGrid(size) {
    ETCH_CONTAINER.innerHTML = ''; // Clear existing grid
    let cellSize = 600/size;
    console.log('Cell size: ' + cellSize);
    for (let i = 0; i < size*size; i++) {
        const cell = document.createElement('div');
        cell.style.opacity = '0%';
        cell.style.height = '' + cellSize + 'px';
        cell.style.width = '' + cellSize + 'px';
        cell.style.boxSizing = 'border-box';
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'var(--iris-12)';
            cell.style.opacity = parseFloat(cell.style.opacity) + 0.25;
        });
        ETCH_CONTAINER.appendChild(cell);
    }
}

createGrid(16); // Default grid size 16x16


const gridSizeButton = document.getElementById('grid-size');
gridSizeButton.addEventListener('click', () => {
    let newSize = prompt('Enter new grid size (max 100):');
    newSize = parseInt(newSize);
    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert('Invalid size. Please enter a number between 1 and 100.');
    } else {
        createGrid(newSize);
    }
});


function resetGrid() {
    const cells = ETCH_CONTAINER.querySelectorAll('div');
    cells.forEach(cell => {
        cell.style.backgroundColor = '';
        cell.style.opacity = '0%';
    });
}

const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', resetGrid);