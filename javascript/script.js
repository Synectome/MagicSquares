
const magic_square = [];

// general index page stylings
document.getElementById('gridForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const gridSize = parseInt(document.getElementById('gridSize').value);
    const gridContainer = document.getElementById('gridContainer');
    console.log("testtesttest");
    const random_square = make_random_square(gridSize);
    console.log(random_square);
    gridContainer.innerHTML = ''; // Clear previous grid
    // Set up grid columns based on user input
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    // Create each cell with a number and random delay for staggered animation
    for (let i = 1; i <= gridSize * gridSize; i++) {
      const cell = document.createElement('div');
      cell.classList.add('grid-cell');
      cell.textContent = random_square[i%gridSize][Math.floor(i/gridSize)];
      cell.style.animationDelay = `${Math.random() * 0.01}s`;
      gridContainer.appendChild(cell);
    }
  });

function make_random_square(size) {
    let random_square = []

    // empty the magic square, initialize the rows
    random_square.length = 0;
    for (let i = 0; i < size; i++) {
        random_square.push([]);
    }

    // populate the random numbers into the magic square
    let temp = Array.from({length: size*size}, (_, i) => i);
    console.log(temp);

    while (temp.length > 0) {
        console.log(temp.length);
        let randomIndex = Math.floor(Math.random() * temp.length);
        let randomNumber = temp.splice(randomIndex, 1)[0] + 1;
        // the square index = temp.length-1
        let rowIndex = Math.floor(temp.length / size);
        let colIndex = temp.length % size;
        console.log(rowIndex);
        random_square[rowIndex].push(randomNumber);
    }
    
    return random_square;
}