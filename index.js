if(localStorage.getItem("tasklist") == null) {
    localStorage.setItem("tasklist" , "[]")
}

function addTask() {
    let newTask = {
        taskname : document.getElementById("inp").value,
        status : false
    }
    let tasklist = localStorage.getItem("tasklist");
    tasklist = JSON.parse(tasklist);

    tasklist.push(newTask);

    tasklist = JSON.stringify(tasklist);

    localStorage.setItem("tasklist" , tasklist);

    alert("New task added")
    // location.reload() -----> but we dont want any type of relode s , so we not use that 

    // code for display added data directly

    let parent = document.getElementById("task-list");
    parent.innerHTML = ""
    document.getElementById("inp").value = ""

    displayAllTask();
}

function displayAllTask() {
    let tasklist = JSON.parse(localStorage.getItem("tasklist"));
    // console.log(tasklist);
    let parent = document.getElementById("task-list");

    for(let i =0; i<tasklist.length; i++){
        let div = document.createElement("div");
        div.setAttribute("class","task");

        div.innerHTML = `
        <div class="details">
            <button><i class='bx bx-check'></i></button>
            <span> ${tasklist[i].taskname} </span>
        </div>
        <button id="crossbtn" onclick= deleteTask()><i class='bx bx-x'></i> </button>`
    parent.append(div);
    }
}
displayAllTask();

function deleteTask(){

    let tasklist = JSON.parse(localStorage.getItem("tasklist"));
    let cross = document.getElementsByName("div");
    console.log(cross);


} 