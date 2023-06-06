
let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value

    let inputText = document.getElementsByClassName('names');
    Array.from(inputText).forEach(function(element){
let StudentNames=element.getElementsByTagName("p")[0].innerText
        if(StudentNames.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})
