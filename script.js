console.log("Script running...");
document.querySelector(".backArrow").style.display = "none";
document.querySelector(".ham").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("sidebarGo");
  if (document.querySelector(".sidebar").classList.contains("sidebarGo")) {
    document.querySelector(".ham").style.display = "inline";
    document.querySelector(".backArrow").style.display = "none";
  } else {
    document.querySelector(".ham").style.display = "none";
    document.querySelector(".backArrow").style.display = "inline";
  }
});
