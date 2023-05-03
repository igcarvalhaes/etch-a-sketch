const gridContainer = document.querySelector('#grid-container');
const btnSquarePerSide = document.querySelector('#btn-square-per-side');


const larguraGridContainer = 500;
const alturaGridContainer = 500;
let tamanhoGridSquare;
let quantidadeGridSquares;

const colors = ["red", "yellow", "blue", "orange", "green", "violet", "black", "white", "gray", "tan" ,"brown"];
const choiceColors = (Math.floor(Math.random() * colors.length));
console.log(colors[choiceColors]);

btnSquarePerSide.addEventListener('click', function (tamanhoGridSquare){
    tamanhoGridSquare = Number(prompt("Digite o tamanho dos lados do quadrado"));
    quantidadeGridSquares = tamanhoGridSquare * tamanhoGridSquare;

    gridContainer.innerHTML = ""; /* limpa todo o conteúdo dentro do gridcontainer antes de adicionar os quadrados*/

    
    for (i = 0; i<quantidadeGridSquares; i++){
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridContainer.appendChild(gridSquare);
        gridSquare.style.width = (larguraGridContainer/tamanhoGridSquare) + "px";
        gridSquare.style.height = (alturaGridContainer/tamanhoGridSquare) + "px";
    
        gridSquare.addEventListener('mouseover', (e) => {
            e.target.style.background = "black";
        });
    }
      
});




/*
quantidadeGridSquares = (larguraGridContainer) / tamanhoGridSquare) * 
                        (alturaGridContainer  / tamanhoGridSquare);

*/