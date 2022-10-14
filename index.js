const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const burguerMenu = document.querySelector(".menu");
const productDetailCloseIcon = document.querySelector(".product-detail-close");

const mobileMenu = document.querySelector(".mobile-menu");
const carMenu = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);

burguerMenu.addEventListener("click", toggleMobileMenu);

carMenu.addEventListener("click", toggleCarMenu);

productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

//Funciones para mostrar y ocultar paneles
function toggleDesktopMenu() {
  if (!shoppingCartContainer.classList.contains("inactive")) {
    shoppingCartContainer.classList.add("inactive");
  }
  if (!productDetailContainer.classList.contains("inactive")) {
    productDetailContainer.classList.add("inactive");
  }
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  if (!shoppingCartContainer.classList.contains("inactive")) {
    shoppingCartContainer.classList.add("inactive");
  }
  if (!productDetailContainer.classList.contains("inactive")) {
    productDetailContainer.classList.add("inactive");
  }
  mobileMenu.classList.toggle("inactive");
}

function toggleCarMenu() {
  if (!mobileMenu.classList.contains("inactive")) {
    mobileMenu.classList.add("inactive");
  }
  if (!desktopMenu.classList.contains("inactive")) {
    desktopMenu.classList.add("inactive");
  }
  if (!productDetailContainer.classList.contains("inactive")) {
    productDetailContainer.classList.add("inactive");
  }
  shoppingCartContainer.classList.toggle("inactive");
}

function toggleProductDetailAside() {
  if (!mobileMenu.classList.contains("inactive")) {
    mobileMenu.classList.add("inactive");
  }
  if (!desktopMenu.classList.contains("inactive")) {
    desktopMenu.classList.add("inactive");
  }
  if (!shoppingCartContainer.classList.contains("inactive")) {
    shoppingCartContainer.classList.add("inactive");
  }
  productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
}

const productList = [];

//Carga de productos de ejemplo mediante Array
for (let index = 0; index < 15; index++) {
  productList.push({
    name: "Bike",
    price: 120,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  });
}

//Maquetacion manual de los cards
function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    // product= {name, price, image} -> product.image
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", toggleProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
