const modal = document.querySelector(".mob-menu");
console.log(modal);
const btnClose = document.querySelector(".button-mob-menu");
console.log(btnClose);
const openModal = document.querySelector(".menu-open-btn");
console.log(openModal);

openModal.addEventListener("click", () => {
  modal.classList.add("is-open");
});

btnClose.addEventListener("click", () => {
  modal.classList.remove("is-open");
});
