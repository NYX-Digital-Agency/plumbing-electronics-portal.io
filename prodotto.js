
document.addEventListener('DOMContentLoaded', function() {
  // Get category and product ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const categoryId = urlParams.get('category') || 'compressione';
  const productId = urlParams.get('id') || '7010';
  
  // Update back link
  const backToCategory = document.getElementById('backToCategory');
  if (backToCategory) {
    backToCategory.href = `categoria.html?id=${categoryId}`;
    backToCategory.textContent = `Torna a ${getCategoryName(categoryId)}`;
  }
  
  // Load product details
  loadProductDetails(categoryId, productId);
  
  // Load related products
  loadRelatedProducts(categoryId, productId);
});

// Get category name from category ID
function getCategoryName(categoryId) {
  const categories = {
    'compressione': 'Compressione',
    'elettronica': 'Elettronica',
    'valvole': 'Valvole',
    'chiavi': 'Chiavi',
    'pvc': 'PVC'
  };
  
  return categories[categoryId] || categoryId;
}

// Load product details for the specified product
function loadProductDetails(categoryId, productId) {
  // In a real app, this would be an API call to get the product details
  const product = {
    id: productId,
    name: `${productId} - MANICOTTO`,
    image: "/lovable-uploads/1bc85707-98bb-44ae-826c-0f57c793cadb.png",
    technicalDrawing: "/lovable-uploads/1bc85707-98bb-44ae-826c-0f57c793cadb.png",
    description: "Descrizione prodotto breve ed esplicativa...",
    category: categoryId,
  };
  
  // Update product title
  const productTitle = document.getElementById('productTitle');
  if (productTitle) {
    productTitle.textContent = product.name;
  }
  
  // Update product image
  const productImage = document.getElementById('productImage');
  if (productImage) {
    productImage.src = product.image;
    productImage.alt = product.name;
  }
  
  // Update product description
  const productDescription = document.getElementById('productDescription');
  if (productDescription) {
    productDescription.textContent = product.description;
  }
  
  // Update technical drawing
  const technicalDrawing = document.getElementById('technicalDrawing');
  if (technicalDrawing) {
    technicalDrawing.src = product.technicalDrawing;
    technicalDrawing.alt = `Disegno tecnico ${product.name}`;
  }
}

// Load related products
function loadRelatedProducts(categoryId, currentProductId) {
  const relatedProducts = document.getElementById('relatedProducts');
  if (!relatedProducts) return;
  
  // Clear the container
  relatedProducts.innerHTML = '';
  
  // In a real app, this would come from an API
  // For now, just show some dummy related products
  for (let i = 1; i <= 3; i++) {
    const relatedId = 7010 + i;
    if (relatedId.toString() === currentProductId) continue;
    
    const relatedElement = document.createElement('a');
    relatedElement.href = `prodotto.html?category=${categoryId}&id=${relatedId}`;
    relatedElement.className = 'related-product';
    
    relatedElement.innerHTML = `
      <img src="/lovable-uploads/1bc85707-98bb-44ae-826c-0f57c793cadb.png" alt="Prodotto correlato">
      <p>Manicotto ${relatedId}</p>
    `;
    
    relatedProducts.appendChild(relatedElement);
  }
}
