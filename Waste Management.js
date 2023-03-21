displayToDo();

// Adding a To-Do to the localStorage

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {

 
  let list = localStorage.getItem("notes");
  if (list== null) {
    ToDoObj = [];
  } else {
    ToDoObj = JSON.parse(list);
  }
  let Obj = {
    name:addName.value,
    number:addNumber.value,
    nature: addNature.value,
    location: addLocation.value
  }

  //console.log(Obj.time)

  ToDoObj.push(Obj);
  localStorage.setItem("notes", JSON.stringify(ToDoObj));
 
  addName.value = "";
  addNumber.value="";
  addNature.value = "";
  addLocation.value = "";
 //console.log(ToDoObj);
  displayToDo();
});

// Function to show elements from localStorage
function displayToDo() {
  let list = localStorage.getItem("notes");
  if (list == null) {
    ToDoObj = [];
  } else {
    ToDoObj = JSON.parse(list);
  }
  let ToDo = "";
  ToDoObj.forEach(function(element,index) {
    ToDo += `
            <div class="task my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body card-background">
                        <h5 class="card-title time">Nature of waste: ${element.nature}</h5><br>
                        <h5 class="card-subtitle mb-2 text-muted">Location: ${element.location}</h5><br>
                        <p class="card-text">Name: ${element.name}</p>
                        <p class="card-text">Number: ${element.number}</p>
                        <button id="${index}" class="btn btn-danger" onclick="deleteToDo(this.id)">X</button>

                    </div>
                </div>`;
    
  })

  let Elm = document.getElementById("notes");
  if (ToDoObj.length != 0) {
    Elm.innerHTML = ToDo;
  } else {
    Elm.innerHTML = "No wastes as of now";
  }
}
// Function to delete a task
function deleteToDo(index) {

    let list = localStorage.getItem("notes");
    if (list == null) {
      ToDoObj = [];
    } else {
      ToDoObj = JSON.parse(list);
    }
  
    ToDoObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(ToDoObj));
    displayToDo();
  }
//   if(addNature.value=="Dairy"|| addNature.value=="Pulp and Paper"||addNature.value=="Fertilizer"||addNature.value=="Plastic waste"||addNature.value=="Dispensary waste"||addNature.value=="Food waste"){
//     nature=addNature.value;
//       }
    
    
    

//     let submit= document.getElementById('submit');
// submit.addEventListener('click', Submit);

// function Submit(e) {
//    // console.log('You have submitted library form');
//    let tableBody = document.getElementById('tableBody');
//         let uiString = `<tr>
//                             <td>${Obj.name}</td>
//                             <td>${Obj.location}</td>
//                             <td>${Obj.nature}</td>
//                         </tr>`;
//         tableBody.innerHTML += uiString;
// }
 
    
 
    



