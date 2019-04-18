

//Create a body
const bodyElement = document.createElement("body");
document.body = bodyElement;
const budy = document.querySelector('body');

//Grid creation function
const createGrid = gridSize => {
  for(x=0; x < gridSize; x++) {
    let row = document.createElement("div");
    budy.appendChild(row);
    row.classList.add("row");

    for(i=0; i < gridSize; i++) {
      let item = document.createElement('div');
      item.classList.add("square");
      row.appendChild(item);
    }
  }
}

createGrid(10);
