let container = document.getElementById("container");
let gridNumber = 16


for (let i = 0; i < gridNumber; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);

    for (let j = 0; j < gridNumber; j++) {
        let gridDiv = document.createElement("div");
        gridDiv.classList.add("grid-cell"); 
        row.appendChild(gridDiv);

        gridDiv.addEventListener("mouseover", () => {
            if (gridDiv.classList.contains("filled")) {
                gridDiv.classList.remove("filled")
            } else {
                gridDiv.classList.add("filled")
            }
        })
    }
}
