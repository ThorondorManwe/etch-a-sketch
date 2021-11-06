console.log('It works!');

/* Todo */
/* Selecciono el container */
const container = document.querySelector('#mainContainer');
let hue = 0;


// Hacer la cuadrícula
function makeGrid(squares = 16) {
    const ladoDiv = 640/squares - 2;
    const stepGrid = squares ** 2;
    
    for (let step = 0; step < stepGrid; step++) {
        // Runs 15 times, with values of step 0 through 16
        const div = document.createElement('div');
        // Darle estílos  la cuadrícula acomodar la cuadrícula en el rectángulo
        div.style.border = '1px solid grey';
        div.style.width = `${ladoDiv}px`;
        div.style.height = `${ladoDiv}px`;
        div.classList.add('etch');
        // metemos el div en el container
        container.appendChild(div);
        /* console.log(`Hecho el div número ${step}`); */
        // llamar función para pintar divs
        changeDivs();
    }
}

// botón que limpie el grid
/* const clearButton = document.querySelector('#clear');

clearButton.addEventListener('click', () => {
    // Cuando damos click en el botón limpia los divs
    divs.forEach((div) => {
        div.style.backgroundColor = 'transparent';
    });
}); */

// send a pop up asking for the number of squares per side
function numberOfSquares() {
    const squares = prompt("Enter the number of squares per side for the new grid: ", "10");
    // Antes de hacer más divs hay que eliminar los que ya están
    const divs = document.querySelectorAll('.etch');
    divs.forEach((div) => {
        div.remove();
    });
    makeGrid(Number(squares))
}


function changeDivs() {
    // Hacer que el mouse cambie el estilo de un cuadro al pasar por encima - ¿cuándo haga clic o solo pasando el cursor?
    const divs = document.querySelectorAll('.etch');
    
    divs.forEach((div) => {
        div.addEventListener('mouseenter', function(e) {
            /* console.count(e.currentTarget); */
            hue += 1;
            e.currentTarget.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
            /* console.log(this);
            this.style.backgroundColor = 'green'; */
        });
    });
}

makeGrid();