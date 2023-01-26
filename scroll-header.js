const distance = 450;
addEventListener("scroll", () => {
  let scrollDistance = window.scrollY;
  if (scrollDistance >= distance) {
    document.getElementById("H__C__S").className =
      "header-container_scroll__ON";
  } else {
    document.getElementById("H__C__S").className = "header-container_scroll";
  }
});
