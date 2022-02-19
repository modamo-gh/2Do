function addTask() {
	// Create a div element for the task and give it class "taskDiv"
	let taskDiv = document.createElement("div");
	taskDiv.setAttribute("class", "taskDiv");

	// Create a paragraph
	let task = document.createElement("p");

	// Retrieve the text from the text input and set it as the label
	let taskText = document.getElementById("task").value;
	task.append(taskText);

	// Place checkbox and label inside div
	taskDiv.append(task);

	// // Add click functionality to div
	// taskDiv.addEventListener("click", function () {
	// 	moveTask(taskDiv);
	// });

	let idNumber = Math.random().toString().slice(2);
	taskDiv.setAttribute("id", idNumber);
	taskDiv.setAttribute("draggable", true);
	taskDiv.ondragstart = function () {
		drag(event);
	};

	// Add div into the uncompletedTasks div
	let uncompletedTasks = document.getElementById("uncompletedTasks");
	uncompletedTasks.append(taskDiv);
}

function moveTask(taskDiv) {
	let uncompletedTasks = document.getElementById("uncompletedTasks");
	let completedTasks = document.getElementById("completedTasks");

	if (uncompletedTasks.contains(taskDiv)) {
		uncompletedTasks.removeChild(taskDiv);
		completedTasks.append(taskDiv);
	} else {
		completedTasks.removeChild(taskDiv);
		uncompletedTasks.append(taskDiv);
	}
}

function clearLists() {
	let uncompletedTasks = document.getElementById("uncompletedTasks");
	let completedTasks = document.getElementById("completedTasks");

	while (uncompletedTasks.hasChildNodes()) {
		uncompletedTasks.removeChild(uncompletedTasks.firstChild);
	}

	while (completedTasks.hasChildNodes()) {
		completedTasks.removeChild(completedTasks.firstChild);
	}
}

function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
	ev.preventDefault();
}

function drop(ev) {
	ev.preventDefault();
	let data = ev.dataTransfer.getData("text/plain");
	ev.target.appendChild(document.getElementById(data));
}
