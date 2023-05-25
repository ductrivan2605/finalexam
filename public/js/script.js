// Get the elements
const infoShowCheckbox = document.getElementById("is_info_show");
const emailHideCheckbox = document.getElementById("is_email_hidden");

// Check states and display info and email
function checkDisplayInfoEmail() {
  // Check if localStorage is available (IE8+)
  if (typeof window.localStorage !== "undefined") {
    // Your work starts here
  }
}

// Trigger checkbox event to hide/show the info
infoShowCheckbox.addEventListener("change", function () {
  // Your work starts here
  const content = document.getElementById("info")
  if (infoShowCheckbox.checked == true){
    content.style.display = "block";
  }
  else {
    content.style.display = "none";
  }
});

// Trigger checkbox event to hide/show the email
emailHideCheckbox.addEventListener("change", function () {
  // Your work starts here
  const email = document.getElementById("info2")
  if (emailHideCheckbox.checked == true){
    email.style.display = "none";
  }
  else {
    email.style.display = "block";
  }
});

// When the page is loaded
window.onload = function () {
  // Force the value of is_info_show to true if it is not set
  // Keep the states of the two checkboxes between sessions
  if (typeof window.localStorage !== "undefined") {
    // Your work starts here
    if (infoShowCheckbox.checked == true){
      localStorage.setItem("is_info_show", true)
    }
    else {
      localStorage.setItem("is_info_show")
    }
    if (infoShowCheckbox.checked == true){
      localStorage.setItem("is_email_hidden", true)
    }
    else {
      localStorage.setItem("is_email_hidden")
    }
  }

  // Keep the states of info and email across sessions
  checkDisplayInfoEmail();
};
