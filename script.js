let container = document.getElementById("container");
let gridSize = document.getElementById("gridSize");
let clear = document.getElementById("clear")
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
                gridDiv.classList.add("filled");
            });
            clear.addEventListener("click", () => {
                gridDiv.classList.remove("filled")
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
