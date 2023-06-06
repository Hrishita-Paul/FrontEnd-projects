// Display the initial wastes and rows
displayWastes();
displayRow();

// Get input elements
let addName = document.getElementById("addName");
let addNumber = document.getElementById("addNumber");
let addNature = document.getElementById("addNature");
let addLocation = document.getElementById("addLocation");
let addDate = document.getElementById("addDate");
let addBtn = document.getElementById("addBtn");
let clearCardsBtn = document.getElementById("clearCardsBtn");

// Add event listener to Add button
addBtn.addEventListener("click", function (e) {
  let list = localStorage.getItem("wastes");

  if (list == null) {
    wasteObj = [];
  } else {
    wasteObj = JSON.parse(list);
  }

  let obj = {
    name: addName.value,
    number: addNumber.value,
    nature: addNature.value,
    location: addLocation.value,
    date: addDate.value,
    isDone: false, // Set isDone property to false for new wastes
  };

  wasteObj.push(obj);
  localStorage.setItem("wastes", JSON.stringify(wasteObj));

  // Clear input values
  addName.value = "";
  addNumber.value = "";
  addNature.value = "";
  addLocation.value = "";
  addDate.value = "";

  displayWastes();
  displayRow(); // Add this line to update the rows after adding a waste
});

// Function to display wastes from localStorage
function displayWastes() {
  let list = localStorage.getItem("wastes");

  if (list == null) {
    wasteObj = [];
  } else {
    wasteObj = JSON.parse(list);
  }

  let card = "";

  wasteObj.forEach(function (element, index) {
    // Check if the necessary properties exist in the current element
    if (
      element &&
      element.nature &&
      element.location &&
      element.name &&
      element.number &&
      element.date
    ) {
      card += `
      <div class="task my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body card-background">
          <h5>Nature of waste:</h5>
          <h5 class="card-title nature">${element.nature}</h5><br>
          Location: <span class="location">${element.location}</span><br>
          Name: <span class="card-text name">${element.name}</span>
          <p class="card-text">Contact Number: ${element.number}</p>
          <p class="card-text">Date: ${element.date}</p>
          <button id="${index}" class="btn btn-danger" onclick="deleteWastes(this.id)">X</button>
        </div>
      </div>`;
    }
  });

  let elm = document.getElementById("wastes");

  if (wasteObj.length != 0) {
    elm.innerHTML = card;
  } else {
    elm.innerHTML = "No waste found as of now";
  }
}

function deleteWastes(index) {
  let list = localStorage.getItem("wastes");

  if (list == null) {
    wasteObj = [];
  } else {
    wasteObj = JSON.parse(list);
  }

  wasteObj.splice(index, 1);
  localStorage.setItem("wastes", JSON.stringify(wasteObj));
  displayWastes();
  displayRow();

  // Remove corresponding row from table
  let tableRows = document.querySelectorAll("#tableBody tr");
  if (tableRows.length > index) {
    tableRows[index].remove();
  }
}


// Event listener for submit button
let submit = document.getElementById("submit");
submit.addEventListener("click", Submit);

function Submit(e) {
  let list = localStorage.getItem("wastes");
  let newWasteObj;

  if (list == null) {
    newWasteObj = [];
  } else {
    newWasteObj = JSON.parse(list);
  }

  let cardElements = document.getElementsByClassName("task");

  for (let i = 0; i < cardElements.length; i++) {
    let nature = cardElements[i].querySelector(".nature").textContent;
    let location = cardElements[i].querySelector(".location").textContent;
    let name = cardElements[i].querySelector(".name").textContent;

    // Check if the waste is already present in the newWasteObj
    let isDuplicate = newWasteObj.some(function (element) {
      return (
        element.natureTable === nature &&
        element.locationTable === location &&
        element.nameTable === name
      );
    });

    if (!isDuplicate) {
      let newObj = {
        nameTable: name,
        natureTable: nature,
        locationTable: location,
        isDone: false, // Set isDone property to false for new wastes
      };

      newWasteObj.push(newObj);
    }
  }

  localStorage.setItem("wastes", JSON.stringify(newWasteObj));

  // Clear input values
  addName.value = "";
  addNumber.value = "";
  addNature.value = "";
  addLocation.value = "";
  addDate.value = "";

  displayRow();
}

function displayRow() {
  let tableBody = document.getElementById("tableBody");
  let list = localStorage.getItem("wastes");

  if (list == null) {
    newWasteObj = [];
  } else {
    newWasteObj = JSON.parse(list);
  }

  tableBody.innerHTML = ""; // Clear table body before adding rows

  newWasteObj.forEach(function (element, index) {
    // Check if the necessary properties exist in the current element
    if (element && element.natureTable && element.locationTable && element.nameTable) {
      let rowClass = element.isDone ? "row-done" : "";
      let uiString = `
      <tr class="${rowClass}">
        <td>${element.natureTable}</td>
        <td>${element.locationTable}</td>
        <td>${element.nameTable}</td>
        <td><button id=${index} class="btn btn-danger" onclick="deleteWastesRow(${index})">Delete</button></td>
      </tr>`;
    

      tableBody.insertAdjacentHTML("beforeend", uiString);
    }
  });
}


function deleteWastesRow(index) {
  let list = localStorage.getItem("wastes");

  if (list == null) {
    newWasteObj = [];
  } else {
    newWasteObj = JSON.parse(list);
  }

  newWasteObj.splice(index, 1);
  localStorage.setItem("wastes", JSON.stringify(newWasteObj));
  displayWastes();
  displayRow();

  // Remove corresponding row from table
  let tableRows = document.querySelectorAll("#tableBody tr");
  if (tableRows.length > index) {
    tableRows[index].remove();
  }
}



// Clear all cards button event listener
clearCardsBtn.addEventListener("click", function (e) {
  localStorage.removeItem("wastes");
  displayWastes();
  displayRow();
});
