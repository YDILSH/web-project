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
  const dateTimeElement = document.getElementById("dateTime");
  if (dateTimeElement) {
    const now = new Date();
    dateTimeElement.textContent = `Current Date and Time: ${now.toLocaleString()}`;
  }
}

// Run displayDateTime when the page loads
document.addEventListener("DOMContentLoaded", displayDateTime);

// Function to read query string and display user's name in heading
function updateHeadingWithUserName() {
  const urlParams = new URLSearchParams(window.location.search);
  const userName = urlParams.get("user_name");
  if (userName) {
    const headerElement = document.getElementById("main_header");
    headerElement.textContent = `Hello, ${userName}`;
  }
}

// Call updateHeadingWithUserName function on page load
window.onload = updateHeadingWithUserName;


// Function to toggle theme and save preference in local storage
function toggleTheme() {
    const isDarkTheme = document.documentElement.getAttribute("data-theme") === "dark";
    const newTheme = isDarkTheme ? "light" : "dark";
    
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Save theme preference in local storage
}

// Function to store user name in local storage and update heading
function updateHeadingWithUserName() {
    const urlParams = new URLSearchParams(window.location.search);
    const userName = urlParams.get("user_name");

    if (userName) {
        localStorage.setItem("user_name", userName);
        document.getElementById("main_header").textContent = `Hello, ${userName}`;
    } else {
        const storedName = localStorage.getItem("user_name");
        if (storedName) {
            document.getElementById("main_header").textContent = `Hello, ${storedName}`;
        }
    }
}

// Function to handle form submission and update URL with user name
function handleForm(event) {
    event.preventDefault();
    const userNameInput = document.getElementById("user_name").value;
    if (userNameInput) {
        localStorage.setItem("user_name", userNameInput);
        window.location.search = `?user_name=${encodeURIComponent(userNameInput)}`;
    }
}

// Function to apply stored theme from local storage
function applyStoredTheme() {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
        document.documentElement.setAttribute("data-theme", storedTheme);
    } else {
        // Set default theme to light if no preference is stored
        document.documentElement.setAttribute("data-theme", "light");
    }
}

// Call functions when the page loads
document.addEventListener("DOMContentLoaded", () => {
    applyStoredTheme();
    updateHeadingWithUserName();
});
