
document.addEventListener('DOMContentLoaded', function() {
  // Get category ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const categoryId = urlParams.get('id') || 'compressione';
  
  // Update category title
  const categoryTitle = document.getElementById('categoryTitle');
  if (categoryTitle) {
    categoryTitle.textContent = getCategoryName(categoryId);
  }
  
  // Load products for this category
  loadProducts(categoryId);
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

// Load products for the specified category
function loadProducts(categoryId) {
  const productContainer = document.getElementById('productContainer');
  if (!productContainer) return;
  
  // Mock products data (in a real app, this would come from an API or database)
  const products = [
    {
      id: "7010",
      name: "Manicotto",
      image: "/lovable-uploads/1bc85707-98bb-44ae-826c-0f57c793cadb.png",
      category: "compressione",
    },
    {
      id: "7011",
      name: "Compressore",
      image: "/lovable-uploads/1bc85707-98bb-44ae-826c-0f57c793cadb.png",
      category: "compressione",
    },
    {
      id: "7012",
      name: "Raccordo",
      image: "/lovable-uploads/1bc85707-98bb-44ae-826c-0f57c793cadb.png",
      category: "compressione",
    },
    {
      id: "7013",
      name: "Valvola",
      image: "/lovable-uploads/1bc85707-98bb-44ae-826c-0f57c793cadb.png",
      category: "compressione",
    },
    {
      id: "7014",
      name: "Giunto",
      image: "/lovable-uploads/1bc85707-98bb-44ae-826c-0f57c793cadb.png",
      category: "compressione",
    },
    {
      id: "7015",
      name: "Tubo",
      image: "/lovable-uploads/1bc85707-98bb-44ae-826c-0f57c793cadb.png",
      category: "compressione",
    },
    {
      id: "7016",
      name: "Adattatore",
      image: "/lovable-uploads/1bc85707-98bb-44ae-826c-0f57c793cadb.png",
      category: "compressione",
    },
    {
      id: "7017",
      name: "Flangia",
      image: "/lovable-uploads/1bc85707-98bb-44ae-826c-0f57c793cadb.png",
      category: "compressione",
    },
    {
      id: "7018",
      name: "Connettore",
      image: "/lovable-uploads/1bc85707-98bb-44ae-826c-0f57c793cadb.png",
      category: "compressione",
    },
    {
      id: "7019",
      name: "Collettore",
      image: "/lovable-uploads/1bc85707-98bb-44ae-826c-0f57c793cadb.png",
      category: "compressione",
    }
  ];
  
  // Filter products by category
  const filteredProducts = products.filter(product => product.category === categoryId);
  
  // Clear the container
  productContainer.innerHTML = '';
  
  // Add products to the container
  filteredProducts.forEach(product => {
    const productElement = document.createElement('a');
    productElement.href = `prodotto.html?category=${categoryId}&id=${product.id}`;
    productElement.className = 'product-card';
    
    productElement.innerHTML = `
      <div class="product-card-content">
        <div class="product-image-wrapper">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <h3>${product.name}</h3>
        <div class="button">Scopri di più</div>
      </div>
    `;
    
    productContainer.appendChild(productElement);
  });
}
