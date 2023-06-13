function addNewWeField() {
  //   console.log("adding new field");
  let newFile = document.createElement("textarea");
  newFile.classList.add("form-control");
  newFile.classList.add("weField");
  newFile.classList.add("mt-2");
  newFile.setAttribute("rows", 3);
  newFile.setAttribute("placeholder", "Enter here");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newFile, weAddButtonOb);
}

function addNewAqField() {
  //   console.log("adding new field");
  let newFile = document.createElement("textarea");
  newFile.classList.add("form-control");
  newFile.classList.add("aqField");
  newFile.classList.add("mt-2");
  newFile.setAttribute("rows", 3);
  newFile.setAttribute("placeholder", "Enter here");

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newFile, aqAddButtonOb);
}

// Generating CV

function printCV1() {
  let nameField = document.getElementById("nameField").value;
  let nameT1 = document.getElementById("nameT1");
  nameT1.innerHTML = nameField;

  document.getElementById("nameT2").innerHTML = nameField;

  // contact
  document.getElementById("contactT").innerHTML =
    document.getElementById("contactField").value;

  // address
  document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value;

  // socialMedia
  document.getElementById("fbT").innerHTML =
    document.getElementById("fbField").value;

  document.getElementById("linkedT").innerHTML =
    document.getElementById("linkedinField").value;

  document.getElementById("instaT").innerHTML =
    document.getElementById("instaField").value;

  // objective
  document.getElementById("objectiveT").innerHTML =
    document.getElementById("objectiveField").value;

  // workexp

  let wes = document.getElementsByClassName("weField");
  let str = "";

  for (let e of wes) {
    str = str + `<li>${e.value}</li>`;
  }
  document.getElementById("weT").innerHTML = str;

  // academic

  let aqs = document.getElementsByClassName("aqField");
  let str2 = "";

  for (let e of aqs) {
    str2 = str2 + `<li>${e.value}</li>`;
  }
  document.getElementById("aqT").innerHTML = str2;

  // setting picture

  let file = document.getElementById("imgField").files[0];
  console.log(file);

  let reader = new FileReader();
  reader.readAsDataURL(file);
  console.log(reader.result);

  // setting picture to template

  reader.onloadend = function () {
    document.getElementById("imgTemplate").src = reader.result;
  };

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
}

function printCV2() {
  window.print();
}
