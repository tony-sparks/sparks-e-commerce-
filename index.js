// Cart
let cartIcon  = document.querySelector("#cart-icon");
let cart  = document.querySelector(".cart");
let closeCart  = document.querySelector("#close-cart");

//open Cart
cartIcon.onclick = () => {
    cart.classList.add("active");
};

//close Cart
closeCart.onclick = () => {
    cart.classList.remove("active");
};

