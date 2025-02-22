document.getElementById("applyFilters").addEventListener("click", () => {
    const selectedCategory = document.getElementById("categoryFilter").value;
    const minPrice = parseFloat(document.getElementById("minPrice").value) || 0;
    const maxPrice = parseFloat(document.getElementById("maxPrice").value) || Infinity;
    const minRating = parseFloat(document.getElementById("ratingFilter").value) || 0;

    const filteredProducts = allProducts.filter(product => {
        const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
        const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
        const matchesRating = product.rating >= minRating;

        return matchesCategory && matchesPrice && matchesRating;
    });

    displayProducts(filteredProducts);
});
