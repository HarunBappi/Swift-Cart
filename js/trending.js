const url = "https://fakestoreapi.com/products?limit=3";

const trendingData = ()=>{
    fetch(url)
  .then((res) => res.json())
  .then((data) => {
    trendingDataDisplay(data);
  });

}

const trendingDataDisplay = (trendings)=>{
    const trendingContainer = document.getElementById('trending-container')
    trendings.forEach((trending) =>{
        const {price, category, image, title, rating:{rate, count}} = trending
        const card = document.createElement('div')
        card.innerHTML = `
        <div class="card bg-base-100 shadow-sm">
            <figure class="bg-gray-200">
              <img class="h-48 p-2"
                src="${image}"
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <div class="flex justify-between">
                <div class="badge bg-blue-200 rounded-lg">${category}</div>
                <div class="flex gap-2 items-center text-sm">
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
        `
        trendingContainer.append(card)
    })

   
}
trendingData()