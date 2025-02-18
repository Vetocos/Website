document.addEventListener("DOMContentLoaded", () => {
    fetch("products.json")
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById("product-list");
            products.forEach(product => {
                const productElement = document.createElement("div");
                productElement.classList.add("product");
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" width="150">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p><strong>Prix:</strong> ${product.price} MAD</p>
                    <button onclick="orderProduct('${product.name}', '${product.price}')">Commander</button>
                `;
                productList.appendChild(productElement);
            });
        });
});

function orderProduct(name, price) {
    alert(`Vous avez commandé ${name} pour ${price} MAD`);
}