const btnChangeImage = document.getElementById("change-image");
const productImage = document.getElementById("product-image");
let details = false;

btnChangeImage.addEventListener("click", (e) => {
  details = !details;

  if (details) {
    productImage.setAttribute("src", "./assets/images/sofa-margot-ii-rose.gif");
    btnChangeImage.innerHTML =
      '<img src="./assets/images/vector-x.svg" class="btn-close">';
  } else {
    productImage.setAttribute("src", "./assets/images/sofa-margot-ii-rose.png");
    btnChangeImage.innerHTML = '<img src="./assets/images/vector-360.svg">';
  }
});
