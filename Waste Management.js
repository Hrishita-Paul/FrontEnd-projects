displayWastes();
displayRow();
let addName = document.getElementById("addName")
let addNumber = document.getElementById("addNumber")
let addNature = document.getElementById("addNature")
let addLocation = document.getElementById("addLocation")
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {


  let list = localStorage.getItem("wastes");
  if (list == null) {
    wasteObj = [];
  } else {
    wasteObj = JSON.parse(list);
  }
  let Obj = {
    name: addName.value,
    number: addNumber.value,
    nature: addNature.value,
    location: addLocation.value
  }
  wasteObj.push(Obj);
  localStorage.setItem("wastes", JSON.stringify(wasteObj));
  addName.value = "";
  addNumber.value = "";
  addNature.value = "";
  addLocation.value = "";
  displayWastes();
});


// Function to show elements from localStorage
function displayWastes() {
  let list = localStorage.getItem("wastes");
  if (list == null) {
    wasteObj = [];
  } else {
    wasteObj = JSON.parse(list);
  }
  let card = "";
  wasteObj.forEach(function (element, index) {
    card += `
            <div class="task my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body card-background">
                    <h5>Nature of waste:</h5><h5 class="card-title nature"> ${element.nature}</h5><br>
                    Location:<span class= "location"> ${element.location}</span><br>
                        Name:<span class="card-text name">${element.name}</span>
                        <p class="card-text">Number: ${element.number}</p>
                        <button id="${index}" class="btn btn-danger" onclick="deleteWastes(this.id)">X</button>

                    </div>
                </div>`;

  })
 

  let Elm = document.getElementById("wastes");
  if (wasteObj.length != 0) {
    Elm.innerHTML = card;
  } else {
    Elm.innerHTML = "No waste found as of now";
  }
}
// Function to delete a waste
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
}





let submit = document.getElementById('submit');
submit.addEventListener('click', Submit);

function Submit(e) {
  let nature = document.getElementsByClassName("nature")
  let location = document.getElementsByClassName("location")
  let name = document.getElementsByClassName("name")

  let list = localStorage.getItem("waste");
  if (list == null) {
    newWasteObj = [];
  } else {
    newWasteObj = JSON.parse(list);
  }

  let newObj = {
    name: name.innerText,
    nature: nature.innerText,
    location: location.innerText,
  }
  newWasteObj.push(newObj);
  localStorage.setItem("waste", JSON.stringify(newWasteObj));
  addName.value = "";
  addNumber.value = "";
  addNature.value = "";
  addLocation.value = "";
  displayRow()
  
  }
function displayRow(){
  let tableBody = document.getElementById('tableBody');
  let list = localStorage.getItem("waste");
  if (list == null) {
    newWasteObj = [];
  } else {
    newWasteObj = JSON.parse(list);
  }
 
  newWasteObj.forEach(function (element, index) {
    let uiString = `<tr>
    <td>${element.nature}</td>
    <td>${element.location}</td>
    <td>${element.name}</td>
    <td><button id="${index}" class="btn btn-danger" onclick="${deleteWastesRow(this.id)}">X</button></td>
</tr>`;

    tableBody.innerHTML += uiString;
    console.log(element.nature)
  })
}

function deleteWastesRow(index) {
  let list = localStorage.getItem("waste");
  if (list == null) {
    newWasteObj = [];
  } else {
    newWasteObj = JSON.parse(list);
  }
  newWasteObj.splice(index, 1);
  localStorage.setItem("waste", JSON.stringify(newWasteObj));
  
  displayRow()
 
}

 






