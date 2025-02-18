document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
    updateCartCount();
    loadCartItems();
});

function loadProducts() {
    fetch("products.json")
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById("product-list");
            productList.innerHTML = "";
            products.forEach(product => {
                const productElement = document.createElement("div");
                productElement.classList.add("product");
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p><strong>Prix:</strong> ${product.price} MAD</p>
                    <button onclick="addToCart('${product.name}', '${product.price}')">Ajouter au panier</button>
                `;
                productList.appendChild(productElement);
            });
        });
}

function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    loadCartItems();
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.getElementById("cart-count").innerText = cart.length;
}

function loadCartItems() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = "";
    cart.forEach(item => {
        let cartItem = document.createElement("p");
        cartItem.innerText = `${item.name} - ${item.price} MAD`;
        cartItemsContainer.appendChild(cartItem);
    });
}
