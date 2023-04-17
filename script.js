const grid_container = document.getElementById("grid_container");
const width = 16;
createGrid(width);
getDimensions();

//function creates a widthxwidth grid by creating new divs and manipulating the DOM
function createGrid(width) {
    let area = width*width;
    for (let i = 0; i < area; i++) {
        const square = document.createElement("div");
        grid_container.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
        grid_container.style.gridTemplateRows = `repeat(${width}, 1fr)`;
        square.setAttribute("class", "square");
        grid_container.appendChild(square); 
        changeColors();
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
            });
        });
 }

function removeChildren() {
    while (grid_container.hasChildNodes()) {
        grid_container.removeChild(grid_container.firstChild);
    }
}   