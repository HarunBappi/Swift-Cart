const loadCategory = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => {
      displayCategory(data);
    });
};
// Display category
const displayCategory = (categories) => {
  const categoryContainer = document.getElementById("category-container");
  categoryContainer.innerHTML = "";
  categories.forEach((category) => {
    const categoryDiv = document.createElement("div");
    const button = document.createElement("button");
    button.className = "btn rounded-full";
    button.innerText = category;
    button.addEventListener("click", () => {
      loadCategoryProduct(category);
    });
    categoryDiv.append(button);
    categoryContainer.append(categoryDiv);
  });
};
// loadCategoryProduct
const loadCategoryProduct = (category) => {
  const url = `https://fakestoreapi.com/products/category/${category}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayAllProducts(data);
    });
};

// All Product load
const allProductLoad = async () => {
  const url = "https://fakestoreapi.com/products";
  const res = await fetch(url);
  const data = await res.json();
  displayAllProducts(data);
};
// Display All Products
const displayAllProducts = (products) => {
  const allProducts = document.getElementById("all-products");
  allProducts.innerHTML = ""
  products.forEach((product) => {
    const {
      price,
      category,
      image,
      title,
      rating: { rate, count },
    } = product;
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `
        <div class="card bg-base-100 shadow-sm">
            <figure class="bg-gray-200">
              <img class="h-48 p-2"
                src="${image}"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <div class="flex items-center text-xs gap-1 justify-between">
                <div class="badge bg-blue-200 rounded-lg">${category}</div>
                <div class="flex gap-2 items-center">
                    <i class="fa-solid fa-star text-yellow-400"></i>
                    <p>${rate} (${count})</p>
                </div>
              </div>
              <h1 class="text-xl font-medium truncate">
                ${title}
              </h1>
              <p class="font-bold text-sm">$${price}</p>
              <div class="flex flex-wrap gap-2 items-center">
                <button class="btn flex-1">
                    <i class="fa-solid fa-eye"></i>
                    Details
                </button>
                <button class="btn btn-primary flex-1">
                    <i class="fa-solid fa-cart-shopping"></i>
                    Add
                </button>
              </div>
            </div>
          </div>
        `;
    allProducts.append(productDiv);
  });
};
loadCategory();
allProductLoad();
