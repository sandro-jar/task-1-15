const burgerIcon = document.querySelector(".burger-icon");
const navLinksUl = document.querySelector(".nav-links-ul");
burgerIcon.addEventListener("click", () => {
  navLinksUl.classList.toggle("show");
});
const goModal = document.getElementById("go-Modal");
const btn = document.getElementById("modal-btn");
const text = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  goModal.style.display = "block";
};
text.onclick = function () {
  goModal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == goModal) {
    goModal.style.display = "none";
  }
};
