console.log('It works!');

/* Todo */
/* Selecciono el container */
const container = document.querySelector('#mainContainer');


// Hacer la cuadrícula
for (let step = 0; step < 256; step++) {
    // Runs 15 times, with values of step 0 through 16
    const div = document.createElement('div');
    // Darle estílos  la cuadrícula acomodar la cuadrícula en el rectángulo
    div.style.border = '1px solid grey';
    div.style.width = '38px';
    div.style.height = '38px';
    div.classList.add('etch');
    // metemos el div en el container
    container.appendChild(div);
    console.log(`Hecho el div número ${step}`);
}

// Hacer que el mouse cambie el estilo de un cuadro al pasar por encima - ¿cuándo haga clic o solo pasando el cursor?
const divs = document.querySelectorAll('.etch');

divs.forEach((div) => {
    div.addEventListener('mouseenter', function(e) {
        console.count(e.currentTarget);
        e.currentTarget.style.backgroundColor = 'white';
        /* console.log(this);
        this.style.backgroundColor = 'green'; */
    });
});


// botón que limpie el grid
const clearButton = document.querySelector('#clear');

clearButton.addEventListener('click', () => {
    // Cuando damos click en el botón limpia los divs
    divs.forEach((div) => {
        div.style.backgroundColor = 'transparent';
    });
});