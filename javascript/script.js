
const magic_square = [];

// general index page stylings
document.getElementById('gridForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const gridSize = parseInt(document.getElementById('gridSize').value);
    const gridContainer = document.getElementById('gridContainer');
    gridContainer.innerHTML = ''; // Clear previous grid
    // Set up grid columns based on user input
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    // Create each cell with a number and random delay for staggered animation
    for (let i = 1; i <= gridSize * gridSize; i++) {
      const cell = document.createElement('div');
      cell.classList.add('grid-cell');
      cell.textContent = i;
      cell.style.animationDelay = `${Math.random() * 0.01}s`;
      gridContainer.appendChild(cell);
    }
  });

function make_random_square(size) {

    // empty the magic square
    magic_square.length = 0;

    // populate the random numbers into the magic square
    let temp = Array.from({length: size*size}, (_, i) => i);
    while (temp.length > 0) {
        let randomIndex = Math.floor(Math.random() * numbers.length);
        let randomNumber = temp.splice(randomIndex, 1)[0] + 1;
    }
    
}