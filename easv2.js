

//Create a body
const bodyElement = document.createElement("body");
document.body = bodyElement;
const budy = document.querySelector('body');

//make sure percentage heights scale correctly by assigning height to HTML
const markup = document.querySelector('html');
markup.style.height = "100%";
budy.style.height = "100%";


const createGrid = gridSize => {
  //instantiate one row at a time
  for(x=0; x < gridSize; x++) {
    let row = document.createElement("div");
    row.style.display = "flex";
    row.style.height = 98 / gridSize + "%";
    budy.appendChild(row);
    row.classList.add("row");
    //then instantiate items to populate the row
    for(i=0; i < gridSize; i++) {
      let item = document.createElement('div');
      item.style.border = "1px black solid";
      item.style.flexGrow = "1"; //Horizontal fill
      item.style.height = "100%";
      item.classList.add("square");
      row.appendChild(item);
    }
  }
}

createGrid(10);
