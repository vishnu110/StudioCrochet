
// Show only first N products on home page
const HOME_MAX_PRODUCTS = 6;

// Detect which page we are on
const isShopPage = window.location.pathname.includes('shop.html');

// Helper: which base list to use on this page
function getBaseProductList() {
    // On shop.html → full catalog
    if (isShopPage) return products;

    // On index.html → only first 6
    return products.slice(0, HOME_MAX_PRODUCTS);
}

// =============================
// CONSTANTS & CONFIG
// =============================
const WRAP_PRICE = 49; // Gift wrap price in INR

// 👉 UPI details (PUT REAL DETAILS)
const UPI_ID = 'perumalvishnu824@okhdfcbank';
const MERCHANT_NAME = 'StudioCrochet';

// 👉 Store WhatsApp (numbers only, incl. country code)
const STORE_WHATSAPP = '916381602251';

// 👉 EmailJS details (PUT REAL VALUES)
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';

// OPTIONAL: your own store email
const STORE_EMAIL = 'vishnupermal388@gmail.com';

if (typeof emailjs !== 'undefined' && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
}

// --- PRODUCT DATA (Updated with INR Prices) ---
const products = 
[
    {
        id: 1,
        title: "Forest Haze Tote",
        price: 2499,
        category: "bag",
        description: "Oversized tote hand-crocheted using recycled cotton. Features soft sage, cream, and forest green stripes. Fully lined with inner pockets.",
        variants: { Color: ["Sage Green", "Earth Brown"], Strap: ["Short", "Long Crossbody"] },
        images: [
            "assets/img/113.jpg",
            "assets/img/112.jpg",
            "assets/img/111.jpg"
        ]
    },
    {
        id: 2,
        title: "Moss Bunny",
        price: 999,
        category: "plushie",
        description: "The softest chenille yarn bunny in earthy tones. Child-safe eyes and hypoallergenic filling. A perfect nursery companion.",
        variants: { Size: ["Small (8in)", "Medium (12in)"], Bow: ["White", "Sage", "Cream"] },
        images: [
            "assets/img/106.jpg",
            "assets/img/107.jpg",
            "assets/img/108.jpg",
            "assets/img/109.jpg",
            "assets/img/110.jpg"
        ]
    },
    {
        id: 3,
        title: "Leaf Pattern Band",
        price: 699,
        category: "accessory",
        description: "Elegant headband with hand-crocheted leaf patterns. Organic cotton lining ensures it stays in place comfortably.",
        variants: { Color: ["Green", "Beige", "White"] },
        images: [
            "assets/img/99.jpg",
            "assets/img/100.jpg",
            "assets/img/101.jpg",
            "assets/img/102.jpg",
            "assets/img/103.jpg",
            "assets/img/104.jpg"
        ]
    },
    {
        id: 4,
        title: "Nature Coaster Set",
        price: 599,
        category: "accessory",
        description: "Set of 4 absorbent cotton coasters in leaf shapes. Protects surfaces with style.",
        variants: { Pack: ["Set of 4", "Set of 6"] },
        images: [
            "assets/img/95.jpg",
            "assets/img/96.jpg",
            "assets/img/97.jpg",
            "assets/img/98.jpg"
        ]
    },
    {
        id: 5,
        title: "Eco Market Net",
        price: 1499,
        category: "bag",
        description: "Expandable market bag perfect for grocery runs. Strong, durable, and eco-friendly.",
        variants: { Color: ["Cream", "Sage Green", "Mustard"] },
        images: [
            "assets/img/91.jpg",
            "assets/img/92.jpg",
            "assets/img/93.jpg",
            "assets/img/94.jpg"
        ]
    },
    {
        id: 6,
        title: "Mini Frog Keychain",
        price: 449,
        category: "plushie",
        description: "Adorable tiny frog keychain. Made with micro-chenille for a velvety feel.",
        variants: { Color: ["Green", "Teal", "Olive"] },
        images: [
            "assets/img/89.jpg",
            "assets/img/88.jpg"
        ]
    },

    /* ------- GENERATED ITEMS BELOW ------- */

    {
        id: 7,
        title: "Earthbound Shoulder Bag",
        price: 1899,
        category: "bag",
        description: "Hand-crocheted shoulder bag with earthy wave patterns in beige and olive.",
        variants: { Color: ["Olive", "Rust", "Beige"] },
        images: [
            "assets/img/84.jpg",
            "assets/img/85.jpg",
            "assets/img/86.jpg",
            "assets/img/87.jpg",
            "assets/img/88.jpg"
        ]
    },
    {
        id: 8,
        title: "Sage Turtle Plush",
        price: 799,
        category: "plushie",
        description: "Cute turtle plush with soft cotton shell patterns inspired by nature.",
        variants: { Size: ["Small", "Large"] },
        images: [
            "assets/img/80.jpg",
            "assets/img/81.jpg",
            "assets/img/82.jpg",
            "assets/img/83.jpg"
        ]
    },
    {
        id: 9,
        title: "Braided Leaf Bracelet",
        price: 399,
        category: "accessory",
        description: "Minimal bracelet with braided threads and leaf charm.",
        variants: { Color: ["Brown", "Green", "Cream"] },
        images: [
            "assets/img/74.jpg",
            "assets/img/75.jpg",
            "assets/img/76.jpg",
            "assets/img/77.jpg",
            "assets/img/78.jpg",
            "assets/img/79.jpg"
        ]
    },
    {
        id: 10,
        title: "Grassland Tote Mini",
        price: 999,
        category: "bag",
        description: "Mini tote with forest-tone stripes and sturdy handles.",
        variants: { Color: ["Forest Green", "Cream"] },
        images: [
            "assets/img/73.jpg", 
            "assets/img/72.jpg", 
            "assets/img/63.jpg", 
            "assets/img/65.jpg"
        ]
    },
    {
        id: 11,
        title: "Pebble Bear Plush",
        price: 1099,
        category: "plushie",
        description: "Handmade bear plush in pebble and oatmeal tones.",
        variants: { Bow: ["Green", "Brown"] },
        images: [
            "assets/img/61.jpg",
            "assets/img/58.jpg",
            "assets/img/60.jpg"
        ]
    },
    {
        id: 12,
        title: "Crochet Hair Scrunch Set",
        price: 299,
        category: "accessory",
        description: "Soft crochet scrunchies made with organic yarn.",
        variants: { Pack: ["Set of 2", "Set of 3"] },
        images: [
            "assets/img/55.jpg",
            "assets/img/56.jpg",
            "assets/img/57.jpg"
        ]
    },
    {
        id: 13,
        title: "Evergreen Sling Bag",
        price: 1799,
        category: "bag",
        description: "Sling bag in deep green and cream with a secure flap.",
        variants: { Strap: ["Short", "Long"] },
        images: [
            "assets/img/51.jpg",
            "assets/img/52.jpg",
            "assets/img/54.jpg"
        ]
    },
    {
        id: 14,
        title: "Woodland Fox Plushie",
        price: 899,
        category: "plushie",
        description: "Soft fox toy crafted with earthy orange chenille.",
        variants: { Size: ["Small", "Medium"] },
        images: [
            "assets/img/46.jpg",
            "assets/img/47.jpg",
            "assets/img/48.jpg"
        ]
    },
    {
        id: 15,
        title: "Forest Leaf Bookmark",
        price: 199,
        category: "accessory",
        description: "Hand-crocheted leaf bookmark for nature lovers.",
        variants: { Color: ["Sage", "Olive", "Brown"] },
        images: [
            "assets/img/44.jpg",
            "assets/img/45.jpg",
        ]
    },
    {
        id: 16,
        title: "Sunlit Tote Bag",
        price: 1599,
        category: "bag",
        description: "Striped tote in mustard, cream, and soft green.",
        variants: { Size: ["Small", "Large"] },
        images: [
            "assets/img/43.jpg"
        ]
    },
    {
        id: 17,
        title: "Olive Dino Plush",
        price: 1299,
        category: "plushie",
        description: "Cute dinosaur plush made using super-soft cotton yarn.",
        variants: { Color: ["Olive", "Green"], Size: ["Small", "Large"] },
        images: [
            "assets/img/41.jpg",
            "assets/img/42.jpg"
        ]
    },
    {
        id: 18,
        title: "Reef Pattern Headwrap",
        price: 499,
        category: "accessory",
        description: "Breathable cotton headwrap with reef-style crochet stitches.",
        variants: { Color: ["Cream", "Sage", "Brown"] },
        images: [
            "assets/img/38.jpg",
            "assets/img/39.jpg"
        ]
    },
    {
        id: 19,
        title: "Sage Bloom Purse",
        price: 899,
        category: "bag",
        description: "Compact purse with sage floral crochet detailing.",
        variants: { Strap: ["With Strap", "No Strap"] },
        images: [
            "assets/img/34.jpg",
            "assets/img/33.jpg",
            "assets/img/35.jpg"
        ]
    },
    {
        id: 20,
        title: "Chubby Panda Plush",
        price: 1199,
        category: "plushie",
        description: "A round, soft panda plush with earthy monochrome yarn.",
        variants: { Size: ["Small", "Large"] },
        images: [
            "assets/img/30.jpg",
            "assets/img/31.jpg",
            "assets/img/32.jpg",
        ]
    },
    {
        id: 21,
        title: "Garden Bracelet Pack",
        price: 349,
        category: "accessory",
        description: "Crochet bracelets inspired by garden flowers.",
        variants: { Pack: ["Set of 2", "Set of 4"] },
        images: [
            "assets/img/29.jpg",
        ]
    },
    {
        id: 22,
        title: "Rooted Crossbody Bag",
        price: 1799,
        category: "bag",
        description: "Earth-tone crossbody bag with secure magnet closure.",
        variants: { Color: ["Brown", "Green"], Strap: ["Short", "Long"] },
        images: [
            "assets/img/28.jpg",
        ]
    },
    {
        id: 23,
        title: "Cocoa Bear Keychain",
        price: 399,
        category: "plushie",
        description: "Mini bear keychain made with warm cocoa yarn.",
        variants: { Color: ["Brown", "Cream"] },
        images: [
            "assets/img/27.jpg",
        ]
    },
    {
        id: 24,
        title: "Meadow Flower Clip",
        price: 249,
        category: "accessory",
        description: "Crochet flower hair clip in soft garden shades.",
        variants: { Color: ["Yellow", "Pink", "White"] },
        images: [
            "assets/img/25.jpg",
            "assets/img/26.jpg"
        ]
    },
    {
        id: 25,
        title: "Wild Fern Tote",
        price: 2199,
        category: "bag",
        description: "Premium tote featuring fern-inspired crochet patterns.",
        variants: { Color: ["Green", "Mustard"] },
        images: [
            "assets/img/24.jpg",
            "assets/img/23.jpg",
        ]
    },
    {
        id: 26,
        title: "Snuggly Sheep Plush",
        price: 1399,
        category: "plushie",
        description: "Fluffy sheep plush with curly cream yarn.",
        variants: { Size: ["Small", "Large"] },
        images: [
            "assets/img/17.jpg",
            "assets/img/18.jpg",
            "assets/img/19.jpg",
            "assets/img/20.jpg",
        ]
    },
    {
        id: 27,
        title: "Rustic Wrist Cuff",
        price: 329,
        category: "accessory",
        description: "Handwoven wrist cuff with rustic cotton threads.",
        variants: { Color: ["Rust", "Olive"] },
        images: [
            "assets/img/14.jpg",
            "assets/img/15.jpg",
            "assets/img/16.jpg",
        ]
    },
    {
        id: 28,
        title: "Olive Grove Bucket Bag",
        price: 1999,
        category: "bag",
        description: "Bucket-style crochet bag with drawstring closure.",
        variants: { Color: ["Olive", "Cream"] },
        images: [
            "assets/img/13.jpg",
            "assets/img/12.jpg",
        ]
    },
    {
        id: 29,
        title: "Forest Kitty Plush",
        price: 899,
        category: "plushie",
        description: "Small crochet kitty plush in moss and cream tones.",
        variants: { Bow: ["Green", "Brown"] },
        images: [
            "assets/img/10.jpg",
            "assets/img/11.jpg",
        ]
    },
    {
        id: 30,
        title: "Lush Vine Necklace",
        price: 549,
        category: "accessory",
        description: "Handmade necklace with vine-pattern crochet beads.",
        variants: { Color: ["Blue", "Cream", "B/W", "Red"] },
        images: [
            "assets/img/9.jpg",
            "assets/img/8.jpg",
            "assets/img/7.jpg",
            "assets/img/6.jpg",
            
        ]
    }

];

// --- STATE (localStorage based) ---
let cart = JSON.parse(localStorage.getItem('dm_cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('dm_wishlist')) || [];
let currentModalProduct = null;
let currentSlide = 0;
let lastUpiUrl = '';
let observer;

// --- DOM ELEMENTS ---
const els = {
    grid: document.getElementById('productGrid'),
    cartCount: document.getElementById('headerCartCount'),
    wishlistCount: document.getElementById('headerWishlistCount'),
    cartDrawer: document.getElementById('cartDrawer'),
    cartPanel: document.getElementById('cartPanel'),
    cartOverlay: document.getElementById('cartOverlay'),
    cartItems: document.getElementById('cartItems'),
    cartSubtotal: document.getElementById('cartSubtotal'),
    cartWrapTotal: document.getElementById('cartWrapTotal'),
    cartGrandTotal: document.getElementById('cartGrandTotal'),
    modal: document.getElementById('productModal'),
    modalContent: document.getElementById('modalContent'),
    modalOverlay: document.getElementById('modalOverlay'),
    toast: document.getElementById('toast'),
    mobileMenu: document.getElementById('mobileMenu'),
    mobileMenuOverlay: document.getElementById('mobileMenuOverlay'),
    faqButtons: document.querySelectorAll('.faq-btn'),
    filterButtons: document.querySelectorAll('.filter-btn'),
    checkoutModal: document.getElementById('checkoutModal'),
    checkoutPanel: document.getElementById('checkoutPanel'),
    checkoutOverlay: document.getElementById('checkoutOverlay'),
    // wishlist drawer
    wishlistDrawer: document.getElementById('wishlistDrawer'),
    wishlistPanel: document.getElementById('wishlistPanel'),
    wishlistOverlay: document.getElementById('wishlistOverlay'),
    wishlistItems: document.getElementById('wishlistItems'),
    // modal wrapping
    modalWrapCheckbox: document.getElementById('modalWrapCheckbox')
};

// =============================
// INITIALIZATION
// =============================
function init() {
    // Migration helper
    cart.forEach(item => {
        if (!item.cartId) item.cartId = 'migrated_' + Math.random().toString(36).substr(2, 9);
        // Ensure wrap property exists
        if (typeof item.wrap === 'undefined') item.wrap = false;
    });
    saveCart();

    renderProducts('all');
    setupObservers();
    setupEventListeners();
    initSearchBehaviour();
    updateCartUI();
    updateWishlistBadge();
    renderWishlist(); 
}

// =============================
// PRODUCT RENDERING
// =============================
function renderProducts(input) {
    els.grid.innerHTML = '';

    const baseList = getBaseProductList(); // 👈 key change

    let list;
    if (Array.isArray(input)) {
        // when we pass a custom filtered list (like search)
        list = input;
    } else {
        const category = input || 'all';
        list = category === 'all'
            ? baseList
            : baseList.filter(p => p.category === category);
    }

    let delay = 0;

    list.forEach(p => {
        const card = document.createElement('div');
        card.className = `group bg-white rounded-2xl p-4 shadow-sm hover:shadow-soft-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer reveal`;
        card.style.transitionDelay = `${delay}ms`;
        delay += 50;

        card.innerHTML = `
            <div class="relative overflow-hidden rounded-xl mb-4 aspect-square bg-sc-bg">
                <img src="${p.images[0]}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="${p.title}">
                <button onclick="event.stopPropagation(); quickAdd(${p.id})" class="absolute bottom-4 right-4 bg-white text-sc-dark w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-sc-accent hover:text-white transition-colors transform translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-300">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
            <div>
                <p class="text-xs text-gray-400 uppercase tracking-wide font-bold mb-1">${p.category}</p>
                <h3 class="font-bold text-lg text-sc-dark truncate">${p.title}</h3>
                <div class="flex justify-between items-center mt-2">
                    <span class="text-sc-accent font-bold">₹${p.price.toLocaleString('en-IN')}</span>
                    <div class="flex text-xs text-yellow-400">
                        <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </div>
        `;
        card.addEventListener('click', () => openModal(p.id));
        els.grid.appendChild(card);
    });

    setupObservers();
}


// =============================
// MODAL LOGIC
// =============================
function openModal(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    currentModalProduct = product;
    currentSlide = 0;

    document.getElementById('modalTitle').textContent = product.title;
    document.getElementById('modalPrice').textContent = `₹${product.price.toLocaleString('en-IN')}`;
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalCategory').textContent = product.category;
    document.getElementById('modalQuantity').value = 1;
    
    // Reset checkbox
    if(els.modalWrapCheckbox) els.modalWrapCheckbox.checked = false;

    const variantContainer = document.getElementById('modalVariants');
    variantContainer.innerHTML = '';
    Object.entries(product.variants).forEach(([name, options]) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <label class="block text-sm font-bold text-gray-700 mb-2">${name}</label>
            <div class="flex flex-wrap gap-2">
                ${options.map((opt, idx) => `
                    <button class="variant-btn px-4 py-2 border border-gray-200 rounded-lg text-sm hover:border-sc-accent hover:text-sc-accent transition-colors ${idx===0 ? 'border-sc-accent text-sc-accent bg-green-50' : ''}" onclick="selectVariant(this)">${opt}</button>
                `).join('')}
            </div>
        `;
        variantContainer.appendChild(div);
    });

    updateModalImages();
    updateModalWishlistButton();

    els.modal.classList.remove('hidden');
    setTimeout(() => {
        els.modalContent.classList.remove('scale-95', 'opacity-0');
        els.modalContent.classList.add('scale-100', 'opacity-100');
    }, 10);
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    els.modalContent.classList.remove('scale-100', 'opacity-100');
    els.modalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        els.modal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
}

function updateModalImages() {
    const imgEl = document.getElementById('modalMainImage');
    imgEl.src = currentModalProduct.images[currentSlide];
    
    const thumbContainer = document.getElementById('modalThumbnails');
    thumbContainer.innerHTML = currentModalProduct.images.map((src, idx) => `
        <div class="w-2 h-2 rounded-full ${idx === currentSlide ? 'bg-sc-accent scale-125' : 'bg-gray-300'} transition-all"></div>
    `).join('');
}

function changeSlide(dir) {
    const total = currentModalProduct.images.length;
    currentSlide = (currentSlide + dir + total) % total;
    updateModalImages();
}

function updateModalQuantity(change) {
    const input = document.getElementById('modalQuantity');
    let val = parseInt(input.value, 10) + change;
    if (val < 1) val = 1;
    input.value = val;
}

// Helper to toggle checkbox from parent div click
window.toggleModalWrap = function() {
    if(els.modalWrapCheckbox) {
        els.modalWrapCheckbox.checked = !els.modalWrapCheckbox.checked;
    }
}

window.selectVariant = function(btn) {
    const parent = btn.parentElement;
    parent.querySelectorAll('.variant-btn').forEach(b => {
        b.classList.remove('border-sc-accent', 'text-sc-accent', 'bg-green-50');
        b.classList.add('border-gray-200');
    });
    btn.classList.remove('border-gray-200');
    btn.classList.add('border-sc-accent', 'text-sc-accent', 'bg-green-50');
};

function updateModalWishlistButton() {
    const btn = document.getElementById('modalToggleWishlistBtn');
    if (!btn || !currentModalProduct) return;
    const exists = wishlist.some(w => w.id === currentModalProduct.id);
    const icon = btn.querySelector('i');
    const span = btn.querySelector('span');
    if (exists) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        span.textContent = 'Remove from Wishlist';
        btn.dataset.inWishlist = '1';
        btn.classList.add('text-sc-accent', 'border-sc-accent');
        btn.classList.remove('text-gray-500', 'border-sc-card');
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        span.textContent = 'Add to Wishlist';
        btn.dataset.inWishlist = '0';
        btn.classList.remove('text-sc-accent', 'border-sc-accent');
        btn.classList.add('text-gray-500', 'border-sc-card');
    }
}

// =============================
// CART LOGIC
// =============================
function addToCart(product, quantity, variants, isWrapped = false) {
    // Signature now includes wrap status so you can have wrapped vs unwrapped items separated
    const signature = `${product.id}-${JSON.stringify(variants)}-${isWrapped}`;
    
    const existing = cart.find(item => item.signature === signature);

    if (existing) {
        existing.qty += quantity;
    } else {
        cart.push({
            cartId: 'c' + Date.now() + Math.random().toString(36).substr(2, 5),
            signature: signature,
            id: product.id,
            title: product.title,
            price: product.price,
            qty: quantity,
            image: product.images[0],
            variants: variants,
            wrap: isWrapped,
            name: '',
            msg: '',
            color: '',
        });
    }
    
    saveCart();
    updateCartUI();
    showToast(`Added ${quantity} × ${product.title}`);
}

window.quickAdd = function(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    const defaultVariants = {};
    Object.keys(product.variants).forEach(k => defaultVariants[k] = product.variants[k][0]);
    addToCart(product, 1, defaultVariants, false); // Default no wrap for quick add
};

function removeFromCart(cartId) {
    cart = cart.filter(item => item.cartId !== cartId);
    saveCart();
    updateCartUI();
}

function updateCartItemQty(cartId, change) {
    const item = cart.find(i => i.cartId === cartId);
    if (item) {
        item.qty += change;
        if (item.qty < 1) {
            removeFromCart(cartId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

function clearCart() {
    cart = [];
    saveCart();
    updateCartUI();
}

function getCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const wrapTotal = cart.reduce((sum, item) => sum + (item.wrap ? WRAP_PRICE * item.qty : 0), 0);
    const grand = subtotal + wrapTotal;
    return { subtotal, wrapTotal, grand };
}

function updateCartUI() {
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    els.cartCount.innerText = totalQty;
    els.cartCount.classList.toggle('scale-0', totalQty === 0);
    els.cartCount.classList.toggle('scale-100', totalQty > 0);
    
    if (cart.length === 0) {
        els.cartItems.innerHTML = `<div class="text-center py-10 opacity-50"><i class="fas fa-shopping-basket text-4xl mb-3"></i><p>Your cart is empty.</p></div>`;
    } else {
        els.cartItems.innerHTML = cart.map(item => `
            <div class="flex gap-4 items-center animate-slide-in-right">
                <img src="${item.image}" class="w-16 h-16 rounded-lg object-cover bg-gray-100" alt="${item.title}">
                <div class="flex-1 min-w-0">
                    <h4 class="font-bold text-sm text-sc-dark truncate">${item.title}</h4>
                    <p class="text-xs text-gray-500 truncate">${Object.values(item.variants).join(' / ')}</p>
                    ${item.wrap ? `<span class="inline-block px-1.5 py-0.5 bg-green-100 text-sc-accent text-[10px] rounded font-semibold mt-1">Gift Wrapped (+₹${WRAP_PRICE})</span>` : ''}
                    <div class="flex justify-between items-center mt-2">
                        <span class="font-medium text-sc-accent">₹${(item.price * item.qty).toLocaleString('en-IN')}</span>
                        <div class="flex items-center bg-gray-100 rounded-lg">
                            <button class="px-2 py-1 text-xs hover:text-sc-accent" onclick="updateCartItemQty('${item.cartId}', -1)">-</button>
                            <span class="text-xs w-4 text-center">${item.qty}</span>
                            <button class="px-2 py-1 text-xs hover:text-sc-accent" onclick="updateCartItemQty('${item.cartId}', 1)">+</button>
                        </div>
                    </div>
                </div>
                <button onclick="removeFromCart('${item.cartId}')" class="text-gray-300 hover:text-red-400"><i class="fas fa-trash"></i></button>
            </div>
        `).join('');
    }

    const totals = getCartTotals();
    els.cartSubtotal.innerText = `₹${totals.subtotal.toLocaleString('en-IN')}`;
    els.cartWrapTotal.innerText = `₹${totals.wrapTotal.toLocaleString('en-IN')}`;
    els.cartGrandTotal.innerText = `₹${totals.grand.toLocaleString('en-IN')}`;

    const checkoutBtn = document.getElementById('checkoutBtn');
    if (checkoutBtn) checkoutBtn.disabled = cart.length === 0;
}

function saveCart() {
    localStorage.setItem('dm_cart', JSON.stringify(cart));
}

// =============================
// WISHLIST LOGIC
// =============================
function saveWishlist() {
    localStorage.setItem('dm_wishlist', JSON.stringify(wishlist));
}

function updateWishlistBadge() {
    const count = wishlist.length;
    els.wishlistCount.innerText = count;
    els.wishlistCount.classList.toggle('scale-0', count === 0);
    els.wishlistCount.classList.toggle('scale-100', count > 0);
}

function toggleWishlist(product) {
    const existingIndex = wishlist.findIndex(w => w.id === product.id);
    if (existingIndex >= 0) {
        wishlist.splice(existingIndex, 1);
        saveWishlist();
        updateWishlistBadge();
        renderWishlist();
        showToast('Removed from wishlist');
    } else {
        wishlist.push({
            id: product.id,
            title: product.title,
            price: product.price,
            category: product.category,
            image: product.images[0]
        });
        saveWishlist();
        updateWishlistBadge();
        renderWishlist();
        showToast(`${product.title} added to wishlist`);
    }
}

function renderWishlist() {
    if (!els.wishlistItems) return;

    if (wishlist.length === 0) {
        els.wishlistItems.innerHTML = `
            <div class="text-center py-10 opacity-60">
                <i class="far fa-heart text-4xl mb-3"></i>
                <p>Your wishlist is empty.</p>
            </div>
        `;
        return;
    }

    els.wishlistItems.innerHTML = wishlist.map(item => {
        const full = products.find(p => p.id === item.id) || {};
        const img = item.image || (full.images && full.images[0]) || 'https://placehold.co/100x100/e8ece9/2d3b34?text=Image';
        const title = item.title || full.title || 'Wishlist Item';
        const price = typeof item.price === 'number' ? item.price : (full.price || 0);

        return `
            <div class="flex gap-4 items-center">
                <img src="${img}" alt="${title}" class="w-16 h-16 rounded-lg object-cover bg-gray-100">
                <div class="flex-1">
                    <h4 class="font-bold text-sm text-sc-dark truncate">${title}</h4>
                    <p class="text-sc-accent text-sm font-semibold">₹${price.toLocaleString('en-IN')}</p>
                    <div class="flex gap-2 mt-2">
                        <button class="px-3 py-1 text-xs rounded-full bg-sc-accent text-white font-medium hover:bg-sc-hover transition-colors" onclick="moveFromWishlistToCart(${item.id})">
                            Add to Cart
                        </button>
                        <button class="px-3 py-1 text-xs rounded-full border border-gray-300 text-gray-500 hover:border-red-400 hover:text-red-500 transition-colors" onclick="removeFromWishlist(${item.id})">
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function removeFromWishlist(id) {
    wishlist = wishlist.filter(item => item.id !== id);
    saveWishlist();
    updateWishlistBadge();
    renderWishlist();
    updateModalWishlistButton();
}

function moveFromWishlistToCart(id) {
    const wishItem = wishlist.find(item => item.id === id);
    const product = products.find(p => p.id === id);
    if (!product) return;

    const defaultVariants = {};
    Object.keys(product.variants).forEach(k => defaultVariants[k] = product.variants[k][0]);
    addToCart(product, 1, defaultVariants);

    removeFromWishlist(id);
    showToast('Moved to cart');
}

// =============================
// CHECKOUT FLOW + UPI + WHATSAPP
// =============================
function openCheckoutModal() {
    if (cart.length === 0) {
        showToast('Your cart is empty');
        return;
    }
    const totals = getCartTotals();
    document.getElementById('checkoutTotal').textContent = `₹${totals.grand.toLocaleString('en-IN')}`;

    const qrWrapper = document.getElementById('upiQrWrapper');
    const qrContainer = document.getElementById('upiQrContainer');
    qrWrapper.classList.add('hidden');
    qrContainer.innerHTML = '';
    lastUpiUrl = '';

    els.checkoutModal.classList.remove('hidden');
    setTimeout(() => {
        els.checkoutPanel.classList.remove('scale-95', 'opacity-0');
        els.checkoutPanel.classList.add('scale-100', 'opacity-100');
    }, 10);
    document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
    els.checkoutPanel.classList.remove('scale-100', 'opacity-100');
    els.checkoutPanel.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        els.checkoutModal.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
}

function getCheckoutData() {
    const name = document.getElementById('checkoutName').value.trim();
    const address = document.getElementById('checkoutAddress').value.trim();
    const pincode = document.getElementById('checkoutPincode').value.trim();
    const whatsapp = document.getElementById('checkoutWhatsapp').value.trim();

    if (!name || !address || !pincode || !whatsapp) {
        showToast('Please fill all checkout details');
        return null;
    }
    return { name, address, pincode, whatsapp };
}

function buildUpiUrl(amount) {
    const params = new URLSearchParams({
        pa: UPI_ID,
        pn: MERCHANT_NAME,
        am: amount,
        cu: 'INR',
        tn: 'Order Payment'
    });
    return `upi://pay?${params.toString()}`;
}

function getCartTotalsText() {
    const totals = getCartTotals();
    return totals.grand.toLocaleString('en-IN');
}

function buildOrderText(fullName, address, pincode, customerWhatsapp) {
    const totals = getCartTotals(); 
    const grandTotal = totals.grand.toLocaleString('en-IN');
    
    let message = '🛍️ *New StudioCrochet Order*\n\n';

    message += '*Customer Details*\n';
    message += `*Name:* ${fullName}\n`;
    message += `*Address:* ${address}\n`;
    message += `*Pincode:* ${pincode}\n`;
    message += `*Customer WhatsApp:* ${customerWhatsapp}\n\n`;

    message += '*Order Items* 📦\n\n';

    cart.forEach((item, index) => {
        const p = products.find(x => x.id === item.id) || item;
        const qty = item.qty || 1;

        const baseAmount = item.price * qty;
        const wrapAmount = item.wrap ? WRAP_PRICE * qty : 0;
        const lineTotal = baseAmount + wrapAmount;

        message += '----------------------------\n';
        message += `🧾 *_Item ${index + 1}_*: *${p.title}*\n`;
        message += `*Qty:* ${qty}\n`;
        message += `*Price:* ₹${item.price}\n`;
        message += `*Variants:* ${Object.values(item.variants).join(', ')}\n`;

        if (item.wrap) {
            message += `*Gift Wrap:* Yes *(₹${WRAP_PRICE} x ${qty} = ₹${wrapAmount})*\n`;
        } else {
            message += `*Gift Wrap:* No\n`;
        }

        message += `*Line Total:* *₹${lineTotal}*\n`;
        message += '\n';
    });

    message += '----------------------------\n';
    message += `*Grand Total:* *₹${grandTotal}*\n\n`;
    message += '_Customer says payment is completed via UPI QR. Please verify in your UPI app._';

    return message;
}

// =============================
// SEARCH BEHAVIOUR
// =============================
function initSearchBehaviour() {
    const searchInput = document.getElementById('searchInput');          // top bar (desktop)
    const searchInputMobile = document.getElementById('searchInputMobile'); // mobile search bar
    const shopHeroSearch = document.getElementById('shopSearchInput');   // extra search on shop page (if present)

    // Read ?search= from URL (for shop.html)
    const params = new URLSearchParams(window.location.search);
    const initialQuery = params.get('search') || params.get('q') || '';

    // 👉 Helper: redirect home → shop.html?search=<q>
    function goToShopWithQuery(q) {
        if (!q) return;
        const encoded = encodeURIComponent(q.trim());
        window.location.href = `shop.html?search=${encoded}`;
    }

    // 👉 Helper: apply search on SHOP page over *all* products
    function applySearchFilter(query) {
        const q = (query || '').toLowerCase();

        if (!q) {
            // No query → show normal listing
            renderProducts('all');
            return;
        }

        // Always search in FULL product list
        const filtered = products.filter(p =>
            p.title.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q)
        );

        renderProducts(filtered);

        const grid = document.getElementById('productGrid');
        if (grid) {
            grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // =============================
    // HOME PAGE behaviour
    // =============================
    if (!isShopPage) {
        // When user presses Enter on home search → go to shop.html?search=<query>
        function handleHomeSearchKeydown(e) {
            if (e.key === 'Enter') {
                const value = e.target.value.trim();
                goToShopWithQuery(value);
            }
        }

        if (searchInput) {
            searchInput.addEventListener('keydown', handleHomeSearchKeydown);
        }
        if (searchInputMobile) {
            searchInputMobile.addEventListener('keydown', handleHomeSearchKeydown);
        }

        // On home page, we DON'T filter here anymore
        return;
    }

    // =============================
    // SHOP PAGE behaviour
    // =============================

    // If we landed on shop.html?search=bag → prefill & search
    if (initialQuery) {
        if (searchInput) searchInput.value = initialQuery;
        if (searchInputMobile) searchInputMobile.value = initialQuery;
        if (shopHeroSearch) shopHeroSearch.value = initialQuery;
        applySearchFilter(initialQuery);
    }

    function handleShopKeydown(e) {
        if (e.key === 'Enter') {
            applySearchFilter(e.target.value.trim());
        }
    }

    function handleShopInput(e) {
        applySearchFilter(e.target.value.trim());
    }

    // Top bar search on shop page
    if (searchInput) {
        searchInput.addEventListener('keydown', handleShopKeydown);
    }

    // Mobile search bar on shop page
    if (searchInputMobile) {
        searchInputMobile.addEventListener('keydown', handleShopKeydown);
    }

    // Optional extra big search inside shop hero (if you add one)
    if (shopHeroSearch) {
        shopHeroSearch.addEventListener('input', handleShopInput);
        shopHeroSearch.addEventListener('keydown', handleShopKeydown);
    }
}


// =============================
// UI HELPERS
// =============================
function toggleCart(show) {
    if (show) {
        els.cartDrawer.classList.remove('hidden');
        setTimeout(() => {
            els.cartOverlay.classList.remove('opacity-0');
            els.cartPanel.classList.remove('translate-x-full');
        }, 10);
        document.body.style.overflow = 'hidden';
    } else {
        els.cartOverlay.classList.add('opacity-0');
        els.cartPanel.classList.add('translate-x-full');
        setTimeout(() => {
            els.cartDrawer.classList.add('hidden');
            document.body.style.overflow = '';
        }, 300);
    }
}

function toggleWishlistDrawer(show) {
    if (!els.wishlistDrawer) return;
    if (show) {
        els.wishlistDrawer.classList.remove('hidden');
        setTimeout(() => {
            els.wishlistOverlay.classList.remove('opacity-0');
            els.wishlistPanel.classList.remove('translate-x-full');
        }, 10);
        document.body.style.overflow = 'hidden';
    } else {
        els.wishlistOverlay.classList.add('opacity-0');
        els.wishlistPanel.classList.add('translate-x-full');
        setTimeout(() => {
            els.wishlistDrawer.classList.add('hidden');
            document.body.style.overflow = '';
        }, 300);
    }
}

function showToast(msg) {
    const toast = els.toast;
    document.getElementById('toastMessage').innerText = msg;
    toast.classList.remove('translate-y-20', 'opacity-0');
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 2600);
}

// =============================
// EVENT LISTENERS & OBSERVERS
// =============================
function setupEventListeners() {
    // Cart Toggles
    document.getElementById('openCartBtn').addEventListener('click', () => toggleCart(true));
    document.getElementById('closeCartBtn').addEventListener('click', () => toggleCart(false));
    els.cartOverlay.addEventListener('click', () => toggleCart(false));

    // Clear Cart
    document.getElementById('clearCartBtn').addEventListener('click', () => {
        if (cart.length === 0) return;
        clearCart();
        showToast('Cart cleared');
    });

    // Modal Overlay Close
    els.modalOverlay.addEventListener('click', closeModal);

    // Add to Cart from Modal
    document.getElementById('modalAddToCartBtn').addEventListener('click', () => {
        if (!currentModalProduct) return;
        const quantity = parseInt(document.getElementById('modalQuantity').value, 10) || 1;
        const variants = {};
        document.querySelectorAll('#modalVariants > div').forEach(group => {
            const label = group.querySelector('label').innerText;
            const selectedBtn = group.querySelector('.bg-green-50');
            const selected = selectedBtn ? selectedBtn.innerText : '';
            variants[label] = selected;
        });
        
        // Check gift wrap state
        const isWrapped = els.modalWrapCheckbox ? els.modalWrapCheckbox.checked : false;

        addToCart(currentModalProduct, quantity, variants, isWrapped);
        closeModal();
    });

    // Wishlist from Modal
    document.getElementById('modalToggleWishlistBtn').addEventListener('click', () => {
        if (!currentModalProduct) return;
        toggleWishlist(currentModalProduct);
        updateModalWishlistButton();
    });

    // Wishlist icon in header
    document.getElementById('openWishlistBtn').addEventListener('click', () => {
        if (wishlist.length === 0) {
            showToast('Your wishlist is empty');
        } else {
            renderWishlist();
            toggleWishlistDrawer(true);
        }
    });

    // Wishlist drawer close
    const closeWishlistBtn = document.getElementById('closeWishlistBtn');
    if (closeWishlistBtn) {
        closeWishlistBtn.addEventListener('click', () => toggleWishlistDrawer(false));
    }
    if (els.wishlistOverlay) {
        els.wishlistOverlay.addEventListener('click', () => toggleWishlistDrawer(false));
    }

    // Checkout button from cart
    document.getElementById('checkoutBtn').addEventListener('click', openCheckoutModal);
    document.getElementById('checkoutCloseBtn').addEventListener('click', closeCheckoutModal);
    els.checkoutOverlay.addEventListener('click', closeCheckoutModal);

    // Generate QR
    document.getElementById('generateQrBtn').addEventListener('click', () => {
        const data = getCheckoutData();
        if (!data) return;
        const totals = getCartTotals();
        const amount = totals.grand.toFixed(2);
        const url = buildUpiUrl(amount);
        lastUpiUrl = url;

        const qrWrapper = document.getElementById('upiQrWrapper');
        const qrContainer = document.getElementById('upiQrContainer');
        qrContainer.innerHTML = '';
        qrWrapper.classList.remove('hidden');

        if (window.QRCode) {
            new QRCode(qrContainer, {
                text: url,
                width: 180,
                height: 180
            });
        }
    });

    // GPay button
    document.getElementById('gpayBtn').addEventListener('click', () => {
        const data = getCheckoutData();
        if (!data) return;
        const totals = getCartTotals();
        if (!lastUpiUrl) {
            lastUpiUrl = buildUpiUrl(totals.grand.toFixed(2));
        }
        window.location.href = lastUpiUrl;
    });

    // Confirm order via WhatsApp
    document.getElementById('confirmOrderBtn').addEventListener('click', () => {
        const data = getCheckoutData();
        if (!data) return;
        
        const orderText = buildOrderText(data.name, data.address, data.pincode, data.whatsapp);
        const encoded = encodeURIComponent(orderText);

        if (STORE_WHATSAPP && STORE_WHATSAPP !== '91XXXXXXXXXX') {
            const url = `https://wa.me/${STORE_WHATSAPP}?text=${encoded}`;
            window.open(url, '_blank');
        } else {
            console.warn('STORE_WHATSAPP not configured');
        }

        // EmailJS Logic
        if (window.emailjs && EMAILJS_PUBLIC_KEY && EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
            const params = {
                store_email: STORE_EMAIL,
                customer_name: data.name,
                customer_address: data.address,
                customer_pincode: data.pincode,
                customer_whatsapp: data.whatsapp,
                order_text: orderText
            };
            emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params).then(
                () => {}, 
                (err) => { console.error('EmailJS error', err); }
            );
        }

        clearCart();
        closeCheckoutModal();
        toggleCart(false);
        showToast('Order details sent via WhatsApp 💬');
    });

    // Filter Tabs
    els.filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            els.filterButtons.forEach(b => {
                b.classList.remove('bg-sc-accent', 'text-white', 'border-sc-accent');
                b.classList.add('text-sc-dark', 'border-sc-dark');
            });
            e.target.classList.remove('text-sc-dark', 'border-sc-dark');
            e.target.classList.add('bg-sc-accent', 'text-white', 'border-sc-accent');
            renderProducts(e.target.dataset.filter);
        });
    });

    // FAQ Accordion
    els.faqButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('.fa-chevron-down');
            
            document.querySelectorAll('.faq-content').forEach(c => {
                if (c !== content) c.style.height = '0px';
            });
            document.querySelectorAll('.fa-chevron-down').forEach(i => {
                if (i !== icon) i.style.transform = 'rotate(0deg)';
            });

            if (content.style.height === '' || content.style.height === '0px') {
                content.style.height = content.scrollHeight + 'px';
                icon.style.transform = 'rotate(180deg)';
            } else {
                content.style.height = '0px';
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });

    // Mobile Menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const closeMobileMenuBtn = document.getElementById('closeMobileMenuBtn');
    
    function toggleMobileMenu(open) {
        if(open) {
            els.mobileMenuOverlay.classList.remove('hidden');
            setTimeout(() => els.mobileMenuOverlay.classList.remove('opacity-0'), 10);
            els.mobileMenu.classList.remove('mobile-menu-closed');
            els.mobileMenu.classList.add('mobile-menu-open');
        } else {
            els.mobileMenuOverlay.classList.add('opacity-0');
            els.mobileMenu.classList.remove('mobile-menu-open');
            els.mobileMenu.classList.add('mobile-menu-closed');
            setTimeout(() => els.mobileMenuOverlay.classList.add('hidden'), 300);
        }
    }

    mobileMenuBtn.addEventListener('click', () => toggleMobileMenu(true));
    closeMobileMenuBtn.addEventListener('click', () => toggleMobileMenu(false));
    els.mobileMenuOverlay.addEventListener('click', () => toggleMobileMenu(false));
    els.mobileMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => toggleMobileMenu(false));
    });
    
    // Header Scroll Effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('mainHeader');
        if(window.scrollY > 50) {
            header.classList.add('shadow-md', 'py-0');
        } else {
            header.classList.remove('shadow-md', 'py-0');
        }
    });

    // Mobile search toggle
    const mobileSearchBtn = document.getElementById('mobileSearchBtn');
    const mobileSearchBar = document.getElementById('mobileSearchBar');
    if (mobileSearchBtn && mobileSearchBar) {
        mobileSearchBtn.addEventListener('click', () => {
            const isHidden = mobileSearchBar.classList.contains('hidden');
            mobileSearchBar.classList.toggle('hidden', !isHidden);
        });
    }
}

function setupObservers() {
    if (observer) {
        observer.disconnect();
    }
    observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// =============================
// EXPOSE FUNCTIONS FOR INLINE ONCLICK
// =============================
window.updateCartItemQty = updateCartItemQty;
window.removeFromCart = removeFromCart;
window.closeModal = closeModal;
window.changeSlide = changeSlide;
window.updateModalQuantity = updateModalQuantity;
window.moveFromWishlistToCart = moveFromWishlistToCart;
window.removeFromWishlist = removeFromWishlist;
window.showToast = showToast;
window.selectVariant = selectVariant;
window.quickAdd = quickAdd;
window.toggleModalWrap = toggleModalWrap;

// --- RUN ---
init();

