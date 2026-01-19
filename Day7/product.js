let currentTheme = localStorage.getItem("theme") || "light";

document.getElementById("categoryFilter").addEventListener("change", e => {
  filterByCategory(e.target.value);
});
document.getElementById("searchInput").addEventListener("input", e => {
  searchProducts(e.target.value);
});
document.getElementById("sortFilter").addEventListener("change", e => {
  sortProducts(e.target.value);
});
document.getElementById("categoryFilter").addEventListener("change", e => {
    filterByCategory(e.target.value);
});
document.getElementById("priceFilter").addEventListener("change", e => {
  filterPrice(e.target.value);
});
document.getElementById("gridViewBtn").addEventListener("click", () =>{
    toggle("grid");
})
document.getElementById("listViewBtn").addEventListener("click", ()=>{
    toggle("list")
})
document.getElementById("toggleBtn").addEventListener("click", () => {
  currentTheme = currentTheme === "light" ? "dark" : "light";
  applyTheme(currentTheme);
});


// read about event bubbling and capturing + even propagation 
async function getproducts(){
    try{
        const response = await fetch("https://fakestoreapi.com/products");
        // read about json json.stringfy
        const data = await response.json();
        return data;
    }
    catch(error){
        console.log("Error in fetching data", error);
        return [];
    }
}

let allProducts = [];
let filteredProduct = [];
let currentView = "grid";

// read about javascript synchronous 
async function initialize(){
    applyTheme(currentTheme);
    allProducts = await getproducts();
    filteredProduct = [...allProducts]
    renderCategories(allProducts)
    renderProd(filteredProduct);
}

initialize();
function applyTheme(theme){
    document.body.classList.remove("light","dark")
    document.body.classList.add(theme)

    localStorage.setItem("theme", theme);

    
}
function filterByCategory(category){
    if(category === "all"){
        filteredProduct = [...allProducts]
    }
    else{
        filteredProduct = allProducts.filter((product) =>{
            return product.category === category
        })
    }
    renderProd(filteredProduct);
}

function filterByPrice(maxPrice){
    filteredProduct = allProducts.filter((product) =>{
        return product.price <=maxPrice
    })
    renderProd(filteredProduct);
}
// use index in everything like filter 
function searchProducts(searchText){
    filteredProduct = allProducts.filter((product) =>{
        return product.title.toLowerCase().includes(searchText.toLowerCase());
    })
    renderProd(filteredProduct)
}

function sortProducts(order){
    filteredProduct = [...filteredProduct].sort((a,b) =>{
        if (order === "low-high") return a.price - b.price;
        if (order === "high-low") return b.price - a.price;
        return 0;
    })
    renderProd(filteredProduct)
}

function renderProd(products){
    const container = document.getElementById("productContainer");
    container.innerHTML = "";
    container.className = currentView + "-view";    
    products.forEach(product =>{
        const card = document.createElement("div");
        card.className = "product-card ";

        card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>₹${product.price}</p>
        <p>${product.category}</p>
        `

        container.appendChild(card);
    })
}
function toggle(view){
    const container = document.getElementById("productContainer");

    container.classList.remove("grid-view","list-view")
    container.classList.add(view + "-view")

    currentView = view;
}

function getCategories(products) {
  const categories = products.map(product => product.category);
  return ["all", ...new Set(categories)];
}

function renderCategories(products) {
  const categorySelect = document.getElementById("categoryFilter");

  const categories = getCategories(products);

  categorySelect.innerHTML = ""; 

  categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });
}

function filterPrice(range){
    filteredProduct = allProducts.filter(product =>{
        if(range === "low") return product.price < 50;
        if(range === "mid") return product.price > 50 && product.price <= 100;
        if(range === "high") return product.price > 500;
        return true;
    }) 
    renderProd(filteredProduct)
}

