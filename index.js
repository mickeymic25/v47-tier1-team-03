import { calendar } from "./data.js";

// (C1) DATA ARRAY
var data = [
    ["Routine Activities", "M", "T", "W"],
    ["Projects", "1", "2", "3"],
    ["Monday", '<input type="checkbox"/>', '<input type="checkbox"/>', '<input type="checkbox"/>'],
    ["Monday", '<input type="checkbox"/>', '<input type="checkbox"/>', '<input type="checkbox"/>'],
];

// (C2) SET NUMBER OF COLUMNS
var grid = document.getElementById("demoB");
grid.style.cssText = `grid-template-columns:repeat(${data[0].length}, minmax(0, 1fr))`;

// (C3) FIRST ROW - HEADER
for (let i of data[0]) {
    let cell = document.createElement("div");
    cell.innerHTML = i;
    cell.className = "head";
    grid.appendChild(cell);
}

// (C3) Second ROW - Sub-HEADER
for (let i of data[1]) {
    let cell = document.createElement("div");
    cell.innerHTML = i;
    cell.className = "head2";
    grid.appendChild(cell);
}

// (C4) FOLLOWING ROWS - CELLS
for (let i = 2; i < data.length; i++) {
    for (let j of data[i]) {
        let cell = document.createElement("div");
        cell.innerHTML = j;
        cell.className = "cell";
        grid.appendChild(cell);
    }
}

// let demoHTML = ``;

// calendar.forEach((item) => {
//     demoHTML += `
//         <div class="category">${item.categoryName}</div>
//         ${item.activityTypes.forEach((activity) => {
            
//     })}
//         <div class="acti">${item.categoryName}</div>
//     `
// })

