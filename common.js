function toggleTheme() {
  // Toggle the data-theme attribute between light and dark
  const currentTheme = document.documentElement.getAttribute("data-theme");
  if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }
}

// Function to display the current date and time in the specified element
function displayDateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    if (dateTimeElement) {
        const now = new Date();
        dateTimeElement.textContent = `Current Date and Time: ${now.toLocaleString()}`;
    }
}

// Run displayDateTime when the page loads
document.addEventListener('DOMContentLoaded', displayDateTime);

// Function to read query string and display user's name in heading
function updateHeadingWithUserName() {
  const urlParams = new URLSearchParams(window.location.search);
  const userName = urlParams.get('user_name');
  if (userName) {
    const headerElement = document.getElementById('main_header');
    headerElement.textContent = `Hello, ${userName}`;
  }
}

// Call updateHeadingWithUserName function on page load
window.onload = updateHeadingWithUserName;

// Function to read and apply theme from local storage
function applyStoredTheme() {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }
}

// Function to toggle theme and save preference in local storage
function toggleTheme() {
    const isDarkTheme = document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
}



