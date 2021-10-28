const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const modalContainer = document.querySelector(".modal-container");

modalBtn.addEventListener("click", () => {
  modalContainer.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});
