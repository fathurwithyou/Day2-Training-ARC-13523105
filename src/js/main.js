let allProducts = [];
let currentPage = 1;
const productsPerPage = 4;

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        allProducts = data.products;
        
        displayProducts();
        populateCategories(allProducts);
        setupPagination();
    } catch (error) {
        console.error("Error fetching the product data:", error);
    }
});

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
  