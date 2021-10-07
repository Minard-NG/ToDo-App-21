var toDoDB = [
    "Finish the ToDo App"
];

function displayToDo() {
    const toDoList = document.getElementById("toDoList")

    toDoList.innerHTML = '';
    toDoDB.forEach(function (todo) {
        let newToDo = `<li><input type='checkbox' class='toDoChecker' name='toDoChecker' onclick='crossToDoItem(event)'/>  <span class='toDoItem'>${todo}</span><button class='deleteTodoBtn'>x</button></li>`
        toDoList.innerHTML += newToDo;
    });

    document.querySelectorAll(".deleteTodoBtn").forEach(function (btn) {
        btn.addEventListener('click', deleteTodo)
    });

}

function taskBtn() {

    var inputNode = document.getElementById("toDoInput");
    var inpuText = "";
    var btNode = document.getElementById("toDoBtn");

    btnText = btNode.value;
    if (btnText !== "UPDATE") {
        inputNode.style.width = "70%";
        inputNode.focus();
        btNode.value = "UPDATE";
        btNode.style.width = "29%";
        btNode.style.backgroundColor = "green";
    } else {
        inpuText = inputNode.value;
        inputNode.style.width = "0%";
        inputNode.value = ""
        btNode.value = "+ ADD A TASK"
        btNode.style.backgroundColor = "#1263BE";
        btNode.style.width = "27%";
        if (inpuText) {
            toDoDB.push(inpuText);
            displayToDo();
        }

    }
}

function deleteTodo(evt) {
    let textToDelete = evt.target.parentElement.querySelector(".toDoItem").innerText;
    let indexOnDB = toDoDB.indexOf(textToDelete)
    toDoDB.splice(indexOnDB, 1);
    displayToDo();
}
function crossToDoItem(evt) {
    let checker = evt.target
    let toDoItem = evt.target.nextElementSibling;
    if(checker.checked){
       
        toDoItem.style.textDecoration = "line-through";
    }else{
        toDoItem.style.textDecoration = "none";
    }
}
displayToDo();