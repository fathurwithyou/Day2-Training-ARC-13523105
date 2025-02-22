function showProductDetails(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    document.getElementById("modal-image").src = product.thumbnail;
    document.getElementById("modal-title").textContent = product.title;
    document.getElementById("modal-description").textContent = product.description;
    document.getElementById("modal-category").textContent = product.category;
    document.getElementById("modal-price").textContent = product.price.toFixed(2);
    document.getElementById("modal-rating").textContent = product.rating;
    document.getElementById("modal-stock").textContent = product.stock;

    document.getElementById("product-details-modal").style.display = "flex";
}

document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("product-details-modal").style.display = "none";
});
