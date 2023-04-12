//Create a 16x16 grid of square divs using JavaScript
//Grid squares inside another container div, which can go directly into the HTML file
//divs should appear as a grid; utilize flexbox 

const grid_container = document.getElementById("grid_container");


function createGrid() {

    for (let i = 0; i < 16; i++) {
        
        const column = document.createElement("div");

        //creates a column of 16 divs showns as squares
        for (let j = 0; j < 16; j++) {

            const square = document.createElement('div');
            square.setAttribute("class", "square");
            //adds a node to the end of the list of children of specified parent node
            column.appendChild(square);
        }
 
        column.setAttribute("class", "column");
        grid_container.appendChild(column); 

    }
}

createGrid();