function displayProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = allProducts.slice(startIndex, endIndex);

    paginatedProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
            <p>Rating: ⭐${product.rating}</p>
        `;

        productCard.addEventListener("click", () => {
            window.location.href = `detail.html?id=${product.id}`;
        });

        productList.appendChild(productCard);
    });

    updatePaginationControls();
}
