const grid_container = document.getElementById("grid_container");


//function creates a 16x16 grid by creating new divs and manipulating the DOM
function createGrid() {

    //creates 16 column divs
    for (let i = 0; i < 16; i++) {
        const column = document.createElement("div");

        //creates a column of 16 divs showns as squares
        for (let j = 0; j < 16; j++) {
            const square = document.createElement('div');
            square.setAttribute("class", "square");
            column.appendChild(square);
        }

        column.setAttribute("class", "column");
        grid_container.appendChild(column); 
    }
}

createGrid();

//function that adds an event to each div and changes the color 
function changeColors() {

    const squares = document.querySelectorAll('div')

    //This script will allow multiple event listeners 
    squares.forEach(div => {
        div.addEventListener("mouseover", function() {
                div.style.backgroundColor = "black";
            });
        });

}

changeColors();