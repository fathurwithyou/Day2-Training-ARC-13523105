let allProducts = [];

document.addEventListener("DOMContentLoaded", () => {
  fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then((data) => {
      allProducts = data.products;
      displayProducts(allProducts);
      populateCategories(allProducts);
    })
    .catch((error) => console.error("Error fetching the product data:", error));
});

function displayProducts(products) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
            <p>Rating: ⭐${product.rating}</p>
            <p>Stock: ${product.stock} left</p>
        `;

    productList.appendChild(productCard);
  });
}

function populateCategories(products) {
  const categoryFilter = document.getElementById("categoryFilter");
  const categories = new Set(products.map((p) => p.category));

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}
