const gridContainer = document.querySelector('#grid-container');
const btnSquarePerSide = document.querySelector('#btn-square-per-side');


const larguraGridContainer = 640;
const alturaGridContainer = 640;
let tamanhoGridSquare;
let quantidadeGridSquares;

btnSquarePerSide.addEventListener('click', function (tamanhoGridSquare){
    tamanhoGridSquare = Number(prompt("Digite o tamanho dos lados do quadrado"));
    quantidadeGridSquares = ((larguraGridContainer / tamanhoGridSquare))*((alturaGridContainer  / tamanhoGridSquare));

    for (i = 0; i<quantidadeGridSquares; i++){
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridContainer.appendChild(gridSquare);
        gridSquare.style.width = tamanhoGridSquare + "px";
        gridSquare.style.height = tamanhoGridSquare + "px";
    
        gridSquare.addEventListener('mouseover', (e) => {
            e.target.style.background = "black";
        });
    }
      
});




/*
quantidadeGridSquares = (larguraGridContainer) / tamanhoGridSquare) * 
                        (alturaGridContainer  / tamanhoGridSquare);

*/