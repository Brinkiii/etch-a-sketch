let container = document.getElementById("container");
let gridSize = document.getElementById("gridSize");
let clear = document.getElementById("clear")
let rainbow = document.getElementById("rainbow");
let black = document.getElementById("black");
let red = document.getElementById("red");
let green = document.getElementById("green");
let blue = document.getElementById("blue");
gridNumber = 16;

function createGrid() {
    for (let i = 0; i < gridNumber; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        row.style.flexBasis = `calc(100% / ${gridNumber})`;
        container.appendChild(row);

        for (let j = 0; j < gridNumber; j++) {
            let gridDiv = document.createElement("div");
            gridDiv.classList.add("grid-cell");
            gridDiv.style.flexBasis = `calc(100% / ${gridNumber})`;
            row.appendChild(gridDiv);

            gridDiv.addEventListener("mouseover", () => {
                gridDiv.style.backgroundColor = "#000000"
            });
            clear.addEventListener("click", () => {
                gridDiv.style.backgroundColor = "#FFFFFF"
            })
            rainbow.addEventListener("click", () => {
                gridDiv.addEventListener("mouseover", () => {
                    let newRandomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
                    gridDiv.style.backgroundColor = newRandomColor;
                });
            })
            black.addEventListener("click", () => {
                gridDiv.addEventListener("mouseover", () => {
                    gridDiv.style.backgroundColor = "#000000";
                });
            })
            red.addEventListener("click", () => {
                gridDiv.addEventListener("mouseover", () => {
                    gridDiv.style.backgroundColor = "#FF0000";
                });
            })
            green.addEventListener("click", () => {
                gridDiv.addEventListener("mouseover", () => {
                    gridDiv.style.backgroundColor = "#00FF00";
                });
            })
            blue.addEventListener("click", () => {
                gridDiv.addEventListener("mouseover", () => {
                    gridDiv.style.backgroundColor = "#0000FF";
                });
            })
        }
    }
}

createGrid();

gridSize.addEventListener("click", () => {
    // Get user input for the grid size
    gridNumber = parseInt(prompt("What size grid do you want?"));

    gridNumber = Math.min(Math.max(1, gridNumber), 100);
    // Clear the existing grid
    container.innerHTML = '';

    // Create the new grid with the updated size
    createGrid();
});

let newRandomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
gridDiv.style.backgroundColor = newRandomColor;