let elONE = document.getElementById("PONE");
elONE.addEventListener("click", modifyElement1, false);
function modifyElement1() {
  modifyElement("PONE");
}
let elTWO = document.getElementById("PTWO");
elTWO.addEventListener("click", modifyElement2, false);
function modifyElement2() {
  modifyElement("PTWO");
}
let elTHREE = document.getElementById("PTHREE");
elTHREE.addEventListener("click", modifyElement3, false);
function modifyElement3() {
  modifyElement("PTHREE");
}
let elFOUR = document.getElementById("PFOUR");
elFOUR.addEventListener("click", modifyElement4, false);
function modifyElement4() {
  modifyElement("PFOUR");
}
let elFIVE = document.getElementById("PFIVE");
elFIVE.addEventListener("click", modifyElement5, false);
function modifyElement5() {
  modifyElement("PFIVE");
}

function modifyElement(element) {
  let a = ["PONE", "PTWO", "PTHREE", "PFOUR", "PFIVE"];
  a.splice(a.indexOf(element), 1);
  document.getElementById(element).className =
    "p_hover__type-tour_one li_no-marker";
  for (let i = 0; i < 4; i++) {
    let b = a[i];
    document.getElementById(b).className =
      "type-tour__two__p-hover li_no-marker";
  }
}
