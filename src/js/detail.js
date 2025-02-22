document.addEventListener("DOMContentLoaded", async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    if (!productId) {
        document.getElementById("product-detail").innerHTML = "<p>Product not found.</p>";
        return;
    }

    try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        const product = await response.json();
        displayProductDetails(product);
    } catch (error) {
        console.error("Error fetching product details:", error);
    }
});

function displayProductDetails(product) {
    document.getElementById("product-img").src = product.thumbnail;
    document.getElementById("brand").textContent = product.brand || "Unknown Brand";
    document.getElementById("product-title").textContent = product.title;
    document.getElementById("product-description").textContent = product.description;
    document.getElementById("product-category").textContent = product.category;
    document.getElementById("product-price").textContent = product.price.toFixed(2);
    document.getElementById("product-rating").textContent = `${product.rating.toFixed(1)}/5`;
    document.getElementById("total-reviews").textContent = `(${product.stock} reviews)`;
    document.getElementById("product-stock").textContent = product.stock;
    document.getElementById("product-sku").textContent = product.sku;
    document.getElementById("product-shipping").textContent = product.shippingInformation || "Ships in 1-2 business days";
    document.getElementById("product-return").textContent = product.returnPolicy || "30 days return policy";

    renderStars(product.rating);
}

function renderStars(rating) {
    const starContainer = document.getElementById("star-rating");
    starContainer.innerHTML = ""; 

    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    for (let i = 0; i < fullStars; i++) {
        starContainer.innerHTML += `<span class="star full-star">★</span>`;
    }


    if (halfStar) {
        starContainer.innerHTML += `<span class="star half-star">★</span>`;
    }

    // Generate empty stars
    for (let i = 0; i < emptyStars; i++) {
        starContainer.innerHTML += `<span class="star empty-star">☆</span>`;
    }
}
