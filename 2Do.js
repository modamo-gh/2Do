function addTask() {
	// Create a div element for the task and give it class "taskDiv"
	let taskDiv = document.createElement("div");
	taskDiv.setAttribute("class", "taskDiv");

	// Create a checkbox
	let checkbox = document.createElement("input");
	checkbox.setAttribute("type", "checkbox");

	// Create a label
	let taskLabel = document.createElement("label");

	// Retrieve the text from the text input and set it as the label
	let taskText = document.getElementById("task").value;
	taskLabel.append(taskText);

	// Associate the checkbox and label by giving them the same id
	let idNumber = Math.random().toString().slice(2);
	checkbox.setAttribute("id", idNumber);
	taskLabel.htmlFor = idNumber;

	// Place checkbox and label inside div
	taskDiv.append(checkbox);
	taskDiv.append(taskLabel);

	// Add div into the list div
	let taskList = document.getElementById("tasks");
	taskList.append(taskDiv);
}
