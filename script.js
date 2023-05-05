const gridContainer = document.querySelector('#grid-container');
const btnMultiColor = document.querySelector('#multicolor');
const btnBlackOnly = document.querySelector('#preto')



const larguraGridContainer = 500;
const alturaGridContainer = 500;
let tamanhoGridSquare;
let quantidadeGridSquares;


function random_bg_color() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + r + "," + g + "," + b + ")";
    return bgColor;
}

const slider = document.querySelector("#myRange");
const output = document.querySelector("#squareValue");

output.innerHTML = slider.value;
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value + "x" + this.value;
}

btnBlackOnly.addEventListener('click', function (tamanhoGridSquare){
    tamanhoGridSquare = Number(slider.value);

    quantidadeGridSquares = tamanhoGridSquare * tamanhoGridSquare;

    gridContainer.innerHTML = ""; /* limpa todo o conteúdo dentro do gridcontainer antes de adicionar os quadrados*/
    
    for (let i = 0; i<quantidadeGridSquares; i++){
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

btnMultiColor.addEventListener('click', function (tamanhoGridSquare){
    tamanhoGridSquare = Number(slider.value);

    quantidadeGridSquares = tamanhoGridSquare * tamanhoGridSquare;

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



