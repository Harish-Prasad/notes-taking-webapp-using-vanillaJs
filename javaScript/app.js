

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click",function(e){

    let addText = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notes.push(addText.value);
    localStorage.setItem("notes",JSON.stringify(notes));
    addText.value = "";
    console.log(notesObj);
})