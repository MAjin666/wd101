function calculateAge(dateString) {
  var today = new Date();
  var birthday = new Date(dateString);
  var age = today.getFullYear() - birthday.getFullYear();
  var monthDiff = today.getMonth() - birthday.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthday.getDate())
  ) {
    age--;
  }

  return age;
}

function register(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var dob = document.getElementById("dob").value;
  var accepted = document.getElementById("accepted").checked;

  if (
    name === "" ||
    email === "" ||
    password === "" ||
    dob === "" ||
    !accepted
  ) {
    alert("Please fill in all the required fields and accept the terms.");
    return;
  }

  var age = calculateAge(dob);

  if (age < 18 || age > 55) {
    alert("Age must be between 18 and 55.");
    return;
  }

  var tableBody = document.getElementById("table-body");
  var newRow = tableBody.insertRow();

  var namegap = newRow.insertCell();
  namegap.textContent = name;

  var emailgap = newRow.insertCell();
  emailgap.textContent = email;

  var passwordgap = newRow.insertCell();
  passwordgap.textContent = password;

  var dobgap = newRow.insertCell();
  dobgap.textContent = dob;

  var acceptedCell = newRow.insertCell();
  acceptedCell.textContent = accepted ? "Yes" : "No";

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("accepted").checked = false;
}

var form = document.getElementById("registration-form");
form.addEventListener("submit", register);
