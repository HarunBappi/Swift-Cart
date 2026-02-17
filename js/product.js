const homeLink = document.getElementById("home-link");
const productLink = document.getElementById("product-link");
const homeSection = document.getElementById("home-section");
const productSection = document.getElementById("product-section");

homeLink.addEventListener("click", () => {
  homeSection.classList.remove("hidden");
  productSection.classList.add("hidden");

  homeLink.classList.add("text-blue-500");
  productLink.classList.remove("text-blue-500");
});
productLink.addEventListener("click", () => {
  homeSection.classList.add("hidden");
  productSection.classList.remove("hidden");

  productLink.classList.add("text-blue-500");
  homeLink.classList.remove("text-blue-500");
});
// Sm device Home and Product
const mobileHome = document.querySelector(".sm-home");
const mobileProduct = document.querySelector(".sm-product");
// Home
mobileHome.addEventListener("click", () => {
  homeSection.classList.remove("hidden");
  productSection.classList.add("hidden");

  mobileHome.classList.add("text-blue-500");
  mobileProduct.classList.remove("text-blue-500");
});

// Product
mobileProduct.addEventListener("click", () => {
  productSection.classList.remove("hidden");
  homeSection.classList.add("hidden");

  mobileProduct.classList.add("text-blue-500");
  mobileHome.classList.remove("text-blue-500");
});
const loadCategory = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => {
      displayCategory(data);
    });
};

// Active Category
const activeCategory = (activeText) => {
  const buttons = document.querySelectorAll(
    "#category-container button, #all-btn",
  );
  buttons.forEach((btn) => {
    if (btn.innerText === activeText) {
      btn.classList.add("btn-primary");
    } else {
      btn.classList.remove("btn-primary");
    }
  });
};

// Display category

// ALL category
document.getElementById("all-btn").addEventListener("click", () => {
  allProductLoad();
  activeCategory("All");
});
// Others category
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
      activeCategory(category);
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
  allProducts.innerHTML = "";
  products.forEach((product) => {
    const {
      id,
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
                <button onclick="loadProductsDetails(${id})" class="btn flex-1">
                    <i class="fa-solid fa-eye"></i>
                    Details
                </button>
                <button onclick="" class="btn btn-primary flex-1">
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
// Products Details
const loadProductsDetails = async (id) => {
  const url = `https://fakestoreapi.com/products/${id}`;
  const res = await fetch(url);
  const details = await res.json();
  displayDetails(details);
};

const displayDetails = (details) => {
  const detailsContainer = document.getElementById("details-container");
  const {
    price,
    category,
    image,
    title,
    description,
    rating: { rate, count },
  } = details;
  detailsContainer.innerHTML = `
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
              <h1 class="text-xl font-medium">
                ${title}
              </h1>
              <p class="text-gray-400 text-sm font-medium">${description}</p>
              <p class="font-bold text-sm">$${price}</p>
              <div class="flex flex-wrap gap-2 items-center">
                <button onclick="addToCart()" class="btn btn-primary flex-1">
                    <i class="fa-solid fa-cart-shopping"></i>
                    Add To Cart
                </button>
              </div>
            </div>
          </div>
    `;
  document.getElementById("details_modal").showModal();
};
// Add to Cart
const addToCart = () => {
  const count = document.getElementById("count-add-to-cart");
  let countCart = parseInt(count.innerText);
  countCart++;
  count.innerText = countCart;
};

loadCategory();
allProductLoad();
