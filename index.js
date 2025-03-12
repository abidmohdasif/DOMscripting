// Create the elements
const parentOne = document.getElementById("parent");
const table = document.createElement("table");
const tr1 = document.createElement("tr");
const tr2 = document.createElement("tr");
const tr3 = document.createElement("tr");
const td1 = document.createElement("td");
const td2 = document.createElement("td");
const td3 = document.createElement("td");
const td4 = document.createElement("td");
const td5 = document.createElement("td");
const td6 = document.createElement("td");
const td7 = document.createElement("td");
const td8 = document.createElement("td");
const td9 = document.createElement("td");


// The First Parent Element
parentOne.appendChild(table);
table.appendChild(tr1);
tr1.appendChild(td1);
tr1.appendChild(td2);
tr1.appendChild(td3);
td1.innerHTML = "Car";
td2.innerHTML = "Top";
td3.innerHTML = "Price";

// The Second Parent Element
table.appendChild(tr2);
tr2.appendChild(td4);
tr2.appendChild(td5);
tr2.appendChild(td6);
td4.innerHTML = "Chevrolet";
td5.innerHTML = "120 MPH";
td6.innerHTML = "$10,000";

// The Third Parent Element
table.appendChild(tr3);
tr3.appendChild(td7);
tr3.appendChild(td8);
tr3.appendChild(td9);
td7.innerHTML = "Pontiac";
td8.innerHTML = "140 MPH";
td9.innerHTML = "$20,000";

// Apply styles using the style object
table.style.borderCollapse = 'collapse'; // Style 1: Border collapse
table.style.width = '50%'; // Style 2: Width

// Apply styles using setAttribute method
table.setAttribute('border', '1'); // Style 3: Border
table.setAttribute('cellpadding', '10'); // Style 4: Cell padding