function createTaskDiv() {
	// Create a div element for the task and give it class "taskDiv"
	let taskDiv = document.createElement("div");
	taskDiv.setAttribute("class", "taskDiv");

	// Create a checkbox
	let checkbox = document.createElement("input");
	checkbox.setAttribute("type", "checkbox");

	// Create a label
	// Labels are the text for inputs like checkboxes and radios
	let taskLabel = document.createElement("label");

	// Retrieve the text from the text input and set it as the label
	let taskText = document.querySelector("input").value;
	taskLabel.append(taskText);

	// Associate the checkbox and label by giving them the same id
	let idNumber = Math.random().toString().slice(2);
	checkbox.setAttribute("id", idNumber);
	taskLabel.htmlFor = idNumber;

	// Place checkbox and label inside div
	taskDiv.append(checkbox);
	taskDiv.append(taskLabel);

	return taskDiv;
}

function addTask() {
	//Create a task and save it
	const taskDiv = createTaskDiv();

	// Add div into the list div
	let taskList = document.querySelector("div#tasks");
	taskList.append(taskDiv);
}

function clearTasks() {
	// Find task list
	const taskList = document.querySelector("div#tasks");

	// Clear all task nodes as long as a task node exist
	while (taskList.hasChildNodes()) {
		taskList.removeChild(taskList.firstChild);
	}
}
