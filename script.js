function showProductDetails(productName) {
    const modal = document.getElementById('product-details-modal');
    const productTitle = document.getElementById('product-title');
    const productDescription = document.getElementById('product-description');

    // Set content dynamically based on the selected product
    if (productName === 'Wooden Door') {
        productTitle.textContent = 'Wooden Door';
        productDescription.textContent = 'This is a handcrafted wooden door, perfect for traditional and rustic homes.';
    } else if (productName === 'Glass Door') {
        productTitle.textContent = 'Glass Door';
        productDescription.textContent = 'This elegant glass door brings in natural light and enhances modern decor.';
    } else if (productName === 'Steel Door') {
        productTitle.textContent = 'Steel Door';
        productDescription.textContent = 'A strong and durable steel door, offering maximum security for your home.';
    }

    // Show the modal
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('product-details-modal');
    modal.style.display = 'none';
}
