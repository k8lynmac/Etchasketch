const grid_container = document.getElementById("grid_container");
const width = 16;
createGrid(width);
changeColors();
getDimensions();


//function creates a 16x16 grid by creating new divs and manipulating the DOM
function createGrid(width) {

    //creates 16 divs shown as columns
    for (let i = 0; i < width; i++) {
        const column = document.createElement("div");

        //creates a column of 16 divs showns as squares
        for (let j = 0; j < width; j++) {
            const square = document.createElement('div');
            square.setAttribute("class", "square");
            column.appendChild(square);
        }

        column.setAttribute("class", "column");
        let height = parseInt(600/width);
        column.style.flexBasis = `${height}px`;
        grid_container.appendChild(column); 
    }
}

//function that adds an event to each div and changes the color 
function changeColors() {

    const squares = document.querySelectorAll('.square')

    //This script will allow multiple event listeners 
    squares.forEach(sq => {
        sq.addEventListener("mouseover", function() {
                sq.style.backgroundColor = "palegreen";
            });
        });
}

//This function will prompt the user to enter a number of squares per size and return that value
function getDimensions() {
    const response = document.querySelectorAll(".response");
    let width = 0;
    
    //This script will allow multiple event listeners 
    response.forEach(btn => {
        btn.addEventListener('click', function() {
                do {
                    width = prompt("Enter the number of squares per side (<100) for your new grid.");
                } while (width > 100);
                removeChildren();
                createGrid(width);
                changeColors();
            });
        });
    }

function removeChildren() {
    while (grid_container.hasChildNodes()) {
        grid_container.removeChild(grid_container.firstChild);
    }
}   
    

 