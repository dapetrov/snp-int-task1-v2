let elONE = document.getElementById("PONE");
elONE.addEventListener("click", modifyP1, false);
elONE.addEventListener("touchend", modifyP1, false);

function modifyP1() {
  console.log("yes");
  document.getElementById("PONE").className = "P_hover__type-tour_One";
  document.getElementById("PTWO").className = "type-tour__two__p-hover";
  document.getElementById("PTHREE").className = "type-tour__two__p-hover";
  document.getElementById("PFOUR").className = "type-tour__two__p-hover";
  document.getElementById("PFIVE").className = "type-tour__two__p-hover";
}

let elTWO = document.getElementById("PTWO");
elTWO.addEventListener("click", modifyP2, false);
elTWO.addEventListener("touchend", modifyP2, false);

function modifyP2() {
  console.log("yes");
  document.getElementById("PONE").className = "type-tour__two__p-hover";
  document.getElementById("PTWO").className = "P_hover__type-tour_One";
  document.getElementById("PTHREE").className = "type-tour__two__p-hover";
  document.getElementById("PFOUR").className = "type-tour__two__p-hover";
  document.getElementById("PFIVE").className = "type-tour__two__p-hover";
}

let elTHREE = document.getElementById("PTHREE");
elTHREE.addEventListener("click", modifyP3, false);
elTHREE.addEventListener("touchend", modifyP3, false);

function modifyP3() {
  console.log("yes");
  document.getElementById("PONE").className = "type-tour__two__p-hover";
  document.getElementById("PTWO").className = "type-tour__two__p-hover";
  document.getElementById("PTHREE").className = "P_hover__type-tour_One";
  document.getElementById("PFOUR").className = "type-tour__two__p-hover";
  document.getElementById("PFIVE").className = "type-tour__two__p-hover";
}

let elFOUR = document.getElementById("PFOUR");
elFOUR.addEventListener("click", modifyP4, false);
elFOUR.addEventListener("touchend", modifyP4, false);

function modifyP4() {
  console.log("yes");
  document.getElementById("PONE").className = "type-tour__two__p-hover";
  document.getElementById("PTWO").className = "type-tour__two__p-hover";
  document.getElementById("PTHREE").className = "type-tour__two__p-hover";
  document.getElementById("PFOUR").className = "P_hover__type-tour_One";
  document.getElementById("PFIVE").className = "type-tour__two__p-hover";
}

let elFIVE = document.getElementById("PFIVE");
elFIVE.addEventListener("click", modifyP5, false);
elFIVE.addEventListener("touchend", modifyP5, false);

function modifyP5() {
  console.log("yes");
  document.getElementById("PONE").className = "type-tour__two__p-hover";
  document.getElementById("PTWO").className = "type-tour__two__p-hover";
  document.getElementById("PTHREE").className = "type-tour__two__p-hover";
  document.getElementById("PFOUR").className = "type-tour__two__p-hover";
  document.getElementById("PFIVE").className = "P_hover__type-tour_One";
}
