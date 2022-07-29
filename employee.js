let fnameEl = document.getElementById("fname");
let LnameEl = document.getElementById("Lname");
let emailEl = document.getElementById("email");
let pswEl = document.getElementById("psw");
let pswRepeatEl = document.getElementById("pswRepeat");
let addressEl = document.getElementById("address");
let mobileNumberEl = document.getElementById("mobileNumber");
let myFormEl = document.getElementById("myForm");

let formData = {
  fname: "",
  Lname: "",
  email: "",
  psw: "",
  pswRepeat: "",
  address: "",
  mobileNumber: "",
};

fnameEl.addEventListener("change", function (event) {
  formData.fname = event.target.value;
});

LnameEl.addEventListener("change", function (event) {
  formData.Lname = event.target.value;
});

emailEl.addEventListener("change", function (event) {
  formData.email = event.target.value;
});

pswEl.addEventListener("change", function (event) {
  formData.psw = event.target.value;
});

function submitFormHandler(formData) {
  console.log(formData);
  let x = JSON.stringify(formData);
  localStorage.setItem("Data", x);
}

myFormEl.addEventListener("submit", function (event) {
  event.preventDefault();
  submitFormHandler(formData);
});
