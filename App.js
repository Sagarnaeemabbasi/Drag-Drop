let whiteBoxes = document.getElementsByClassName("whitebox");
let imgBox = document.querySelector(".imgBox");

imgBox.addEventListener("dragstart", (e) => {
  e.target.className += " dragLeave";
  setTimeout(() => {
    e.target.className += " hide";
  }, 1);
});
imgBox.addEventListener("dragend", (e) => {
  e.target.className = "imgBox";
});

for (let whiteBox of whiteBoxes) {
  whiteBox.addEventListener("dragover", (e) => {
    e.preventDefault();
    e.target.className += " dragEnter";
  });
  whiteBox.addEventListener("dragenter", (e) => {});
  whiteBox.addEventListener("dragleave", (e) => {
    e.target.className = " whitebox";
  });
  whiteBox.addEventListener("drop", (e) => {
    e.target.append(imgBox);
  });
}
