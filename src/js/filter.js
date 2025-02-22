document.getElementById("applyFilters").addEventListener("click", () => {
    const selectedCategory = document.getElementById("categoryFilter").value;
    const minPrice = parseFloat(document.getElementById("minPrice").value) || 0;
    const maxPrice = parseFloat(document.getElementById("maxPrice").value) || Infinity;
    const minRating = parseFloat(document.getElementById("ratingFilter").value) || 0;

    allProducts = allProducts.filter(product => {
        return (selectedCategory === "all" || product.category === selectedCategory) &&
               (product.price >= minPrice && product.price <= maxPrice) &&
               (product.rating >= minRating);
    });

    currentPage = 1;
    displayProducts();
});
