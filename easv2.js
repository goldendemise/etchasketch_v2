//Create a body
const bodyElement = document.createElement("body");
document.body = bodyElement;
const budy = document.querySelector('body');

//create reset button
const newGridButton = document.createElement('button');
newGridButton.textContent = "Reset Grid";
budy.appendChild(newGridButton);
const resetButton = document.querySelector('button');

//make sure percentage heights scale correctly by assigning height to HTML
const markup = document.querySelector('html');
markup.style.height = "100%";
budy.style.height = "100%";

const resetGrid = () => {
let rows = document.getElementsByClassName('row');
//Remove rows, leave button intact
while(rows[0]) {rows[0].parentNode.removeChild(rows[0])}

let response = prompt("What size grid would you like?");
let gridSize = parseInt(response);
createGrid(gridSize);
}

const createGrid = gridSize => {
  try {
    if(gridSize > 64) throw "Grid size should be no larger than 64";
    if(gridSize <= 0) throw "Grid size should be larger than zero";
    if(typeof gridSize != "number") throw "Grid size should be passed a whole number between 1-64 as arguments";
  }
  catch(err) {
    budy.innerHTML = "ERROR: " + err;
    return;
  }
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
  const squares = document.querySelectorAll('div.square');
  squares.forEach((square)=>{
    square.addEventListener('mouseover', (e) => {
       let hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
      square.style.backgroundColor = hue;
    });
  });
}
createGrid(10);




resetButton.addEventListener("click", (e) => {
  resetGrid();
});
