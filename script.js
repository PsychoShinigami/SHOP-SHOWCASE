const brandData = {
    cashews : [
        { name: "Bold Cashews", image: "/images/bold-cashew.png" },
        { name: "Count Cashews", image: "/images/count-cashew.png" },
        { name: "SuperCount Cashews", image: "/images/superCount-cashew.png" },
        { name: "Royal Cashews", image: "/images/royal-cashew.png" }
    ],
    almonds : [
        { name: "Bold Cashews", image: "/images/bold-cashew.png" },
        { name: "Count Cashews", image: "/images/count-cashew.png" },
        { name: "SuperCount Cashews", image: "/images/superCount-cashew.png" },
        { name: "Royal Cashews", image: "/images/royal-cashew.png" }
    ]
}

const productCards = document.querySelectorAll('.product-card');
const productsGrid = document.querySelector('.products-grid');
const brandsContainer = document.querySelector('.brands-container');
const brandsGrid = document.getElementById('brands-grid');
const brandTitle = document.getElementById('brand-title');
const backBtn = document.getElementById('back-btn');

productCards.forEach((card) => {
    card.addEventListener('click', () => {
        const productType = card.getAttribute('data-product');
        if (!productType || !brandData[productType]) return;
        brandsGrid.innerHTML = '';

        brandTitle.textContent = productType.toUpperCase() + " BRANDS";
        brandData[productType].forEach((brand) => {
            const brandCardHTML = `
                <div class="product-card" style="margin: 0 auto 15px auto;">
                    <div class="product-img-box">
                        <img src="${brand.image}" class="cashew-img" alt="${brand.name}">
                    </div>
                    <div class="product-desc-box">
                        <h1 class="product-name">${brand.name}</h1>
                        <h2 class="product-desc">Available in stock</h2>
                    </div>
                </div>
            `;
            brandsGrid.innerHTML += brandCardHTML; 
        });
        productsGrid.style.display = 'none';
        brandsContainer.style.display = 'block';
    })
})
backBtn.addEventListener('click', () => {
    brandsContainer.style.display = 'none';
    productsGrid.style.display = 'flex';
});