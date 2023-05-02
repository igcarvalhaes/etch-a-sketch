const gridContainer = document.querySelector('#grid-container');

for (i = 0; i<800; i++){
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    gridContainer.appendChild(gridSquare);
}