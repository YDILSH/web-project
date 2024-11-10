const password = "12345"; // Set the password here
let todoList = [];

// Function to check if the password entered is correct
function checkPassword() {
  const enteredPassword = document.getElementById("password-input").value;

  if (enteredPassword === password) {
    alert("Password correct! Access granted.");
    document.getElementById("password-section").style.display = "none";
    document.getElementById("todo-section").style.display = "block";
    loadList(); // Load the saved list if any
  } else {
    alert("Incorrect password. Please try again.");
  }
}

// Function to add a new item to the list
function addItem() {
  const todoInput = document.getElementById("todo-input").value;
  if (todoInput.trim() !== "") {
    todoList.push({ text: todoInput, duration: "Unknown" }); // Add item with a placeholder duration
    document.getElementById("todo-input").value = ""; // Clear the input
    renderList();
  }
}

// Function to remove an item from the list
function removeItem(index) {
  todoList.splice(index, 1); // Remove item at index
  renderList();
}

// Function to render the to-do list on the page
function renderList() {
  const todoListElement = document.getElementById("todo-list");
  todoListElement.innerHTML = ""; // Clear current list

  todoList.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.text} (Duration: ${item.duration})`;
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = () => removeItem(index);
    li.appendChild(removeButton);
    todoListElement.appendChild(li);
  });
}

// Function to save the to-do list to localStorage
function saveList() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
  alert("List saved successfully!");
}

// Function to load the to-do list from localStorage
function loadList() {
  const storedList = localStorage.getItem("todoList");
  if (storedList) {
    todoList = JSON.parse(storedList);
    renderList();
  }
}

// Function to log the user out and show the password prompt again
function logout() {
  document.getElementById("password-section").style.display = "block";
  document.getElementById("todo-section").style.display = "none";
}
