const fname = document.getElementById("fname");
const Lname = document.getElementById("Lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repeatpassword = document.getElementById("repeatpassword");
const address = document.getElementById("address");
const mobilenumber = document.getElementById("mobilenumber");
const course = document.getElementById("course");
const workingstatus = document.getElementById("workingstatus");

//function for form
function formvalidation() {
  console.log("form validation code");
  //checking length of name
  if (username.value.length < 2 || username.value.length > 20) {
    alert("name should be more than 2 and less than 21 characters");
    username.focus();
    return false;
  }
}
