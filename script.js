const gridContainer = document.querySelector('#grid-container');
const btnSquarePerSide = document.querySelector('#btn-square-per-side');


const larguraGridContainer = 500;
const alturaGridContainer = 500;
let tamanhoGridSquare;
let quantidadeGridSquares;


function random_bg_color() {
    // const colors = ["red", "yellow", "blue", "orange", "green", "violet", "black", "white", "gray", "tan" ,"brown"];
    // const choiceColors = (Math.floor(Math.random() * colors.length));
    // return colors[choiceColors];
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + r + "," + g + "," + b + ")";
    return bgColor;
}

btnSquarePerSide.addEventListener('click', function (tamanhoGridSquare){
    tamanhoGridSquare = Number(prompt("Digite o tamanho dos lados do quadrado."));
    if (tamanhoGridSquare >= 0 && tamanhoGridSquare <= 100) {
        quantidadeGridSquares = tamanhoGridSquare * tamanhoGridSquare;
    } else {
        alert("Digite um valor entre 0-100 para os quadrados!");
    }

    gridContainer.innerHTML = ""; /* limpa todo o conteúdo dentro do gridcontainer antes de adicionar os quadrados*/
    
    for (let i = 0; i<quantidadeGridSquares; i++){
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridContainer.appendChild(gridSquare);
        gridSquare.style.width = (larguraGridContainer/tamanhoGridSquare) + "px";
        gridSquare.style.height = (alturaGridContainer/tamanhoGridSquare) + "px";
    
        gridSquare.addEventListener('mouseover', (e) => {
            e.target.style.background = random_bg_color();
        });
    }
      
});

