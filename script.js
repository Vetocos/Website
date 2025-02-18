document.addEventListener("DOMContentLoaded", () => {
    loadPage('home'); // Load home section by default
});

function loadPage(page) {
    const content = document.getElementById("content");

    if (page === "home") {
        content.innerHTML = `
            <h2>Bienvenue chez Vetocos</h2>
            <p>Votre partenaire de confiance pour des produits vétérinaires de qualité supérieure.</p>
        `;
    } else if (page === "about") {
        content.innerHTML = `
            <h2>À propos de Vetocos</h2>
            <p>Vetocos est spécialisé dans l'importation, la vente et la distribution de produits vétérinaires, cosmétiques, paramédicaux et matériel de chirurgie.</p>
            <p><strong>CEO:</strong> Aziz Sahib</p>
            <p><strong>Adresse:</strong> Lot Hawid El Mae N°63 - Skhirate (M)</p>
        `;
    } else if (page === "products") {
        fetch("products.json")
            .then(response => response.json())
            .then(products => {
                let productHTML = `<h2>Nos Produits</h2><div id="product-list">`;
                products.forEach(product => {
                    productHTML += `
                        <div class="product">
                            <img src="${product.image}" alt="${product.name}" width="150">
                            <h3>${product.name}</h3>
                            <p>${product.description}</p>
                            <p><strong>Prix:</strong> ${product.price} MAD</p>
                            <button onclick="orderProduct('${product.name}', '${product.price}')">Commander</button>
                        </div>
                    `;
                });
                productHTML += `</div>`;
                content.innerHTML = productHTML;
            });
    } else if (page === "contact") {
        content.innerHTML = `
            <h2>Contactez-nous</h2>
            <p>Email: contact@vetocos.com</p>
            <p>Téléphone: +212 6 XX XX XX XX</p>
            <p>Adresse: Lot Hawid El Mae N°63 - Skhirate, Maroc</p>
        `;
    }
}

function orderProduct(name, price) {
    alert(`Vous avez commandé ${name} pour ${price} MAD`);
}
