// =============================================================================
// SECTION 1: GENERAL CONFIGURATION
// =============================================================================
const CONFIG = {
    email: 'ronishchhabraartistry@gmail.com',
    instagram: 'https://www.instagram.com/ronishchhabraartistry?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    whatsapp: '+919592150870',

    // ANNOUNCEMENT BAR 
    showAnnouncement: true,
    announcementText: "✨ Free Shipping on orders above ₹2000 | DM for Customizations ✨",

    // Website Images
    logo: 'images/logofavicon.jpg',
    heroBanner: 'images/banner.jpg',
    collectionFeature: 'images/collection-feature.jpg',
    bookingFeature: 'images/booking-feature.jpg'
};

// =============================================================================
// SECTION 2: MAIN CATEGORIES SETUP
// =============================================================================
const CATEGORY_INFO = {
    cat1: {
        name: 'KUDMAYI- An exclusive bridal collection',
        image: 'Mainset1/main1.jpg'
    },
    cat2: {
        name: 'NOOR - For the glow that never fades.',
        image: 'Noorset1/c2_p1_2.JPG'
    }
};

// =============================================================================
// SECTION 3: PRODUCTS FOR CATEGORY 1
// =============================================================================
const CAT_1_PRODUCTS = [
    {
        id: 'c1_p1',
        name: 'NOORRANI',
        price: 2799,
        description: 'It includes - rings, bow, flowers, initials, infinite',
        cover: 'Mainset1/c1_p1_1.jpg',
        gallery: [
            'Mainset1/c1_p1_1.jpg',
            'Mainset1/c1_p1_2.jpg',
            'Mainset1/c1_p1_3.jpg',
            'Mainset1/c1_p1_4.jpg',
            'Mainset1/c1_p1_5.jpg',
            'Mainset1/c1_p1_6.jpg'
        ]
    },
    {
        id: 'c1_p2',
        name: 'SHAHI MILAN -',
        price: 2999,
        description: 'name initials, sehra, kallre, chuda, doli, ghatbandhan',
        cover: 'Mainset2/c1_p2_1.JPG',
        gallery: [
            'Mainset2/c1_p2_1.JPG',
            'Mainset2/c1_p2_2.JPG',
            'Mainset2/c1_p2_3.JPG',
            'Mainset2/c1_p2_4.JPG',
            'Mainset2/c1_p2_5.JPG',
            'Mainset2/c1_p2_6.JPG'
        ]
    },
    {
        id: 'c1_p3',
        name: 'SHAHI BANDHAN- ',
        price: 2499,
        description: 'Sparkling glitter accents.',
        cover: 'Mainset3/c1_p3_1.JPG',
        gallery: [
            'Mainset3/c1_p3_1.JPG',
            'Mainset3/c1_p3_2.JPG',
            'Mainset3/c1_p3_3.JPG',
            'Mainset3/c1_p3_4.JPG',
            'Mainset3/c1_p3_5.JPG'
        ]
    },
    {
        id: 'c1_p4',
        name: 'RAJ BANDHAN-',
        price: 2499,
        description: ' mehroon edition.',
        cover: 'Mainset4/c1_p4_1.JPG',
        gallery: [
            'Mainset4/c1_p4_1.JPG',
            'Mainset4/c1_p4_2.JPG',
            'Mainset4/c1_p4_3.JPG',
            'Mainset4/c1_p4_4.JPG'
        ]
    }
];

// =============================================================================
// SECTION 4: PRODUCTS FOR CATEGORY 2
// =============================================================================
const CAT_2_PRODUCTS = [
  /*  {
        id: 'c2_p1',
        name: 'Brown cat eye',
        price: 250,
        description: 'Intricate designs for the big day.',
        cover: 'Noorset1/c2_p1_2.JPG',
        gallery: [
            'Noorset1/c2_p1_1.JPG',
            'Noorset1/c2_p1_2.JPG',
            'Noorset1/c2_p1_3.JPG',
            'Noorset1/c2_p1_4.JPG',
            'Noorset1/c2_p1_5.JPG',
            'Noorset1/c2_p1_6.JPG'
        ]
    },
    {
        id: 'c2_p2',
        name: 'brown cat eye with glitter',
        price: 250,
        description: 'Bold colors and statement pieces.',
        cover: 'Noorset2/c2_p2_1.JPG',
        gallery: [
            'Noorset2/c2_p2_1.JPG',
            'Noorset2/c2_p2_2.JPG',
            'Noorset2/c2_p2_3.JPG',
            'Noorset2/c2_p2_4.JPG',
            'Noorset2/c2_p2_5.JPG'
        ]
    },*/
    {
        id: 'c2_p3',
        name: 'MEHRAJ',
        price: 1999,
        description: 'Premium style.',
        cover: 'Noorset3/c2_p3_2.jpg',
        gallery: [
            'Noorset3/c2_p3_1.jpg',
            'Noorset3/c2_p3_2.jpg',
            'Noorset3/c2_p3_3.jpg',
            'Noorset3/c2_p3_4.jpg'
        ]
    },
    {
        id: 'c2_p4',
        name: 'SHAHIANA',
        price: 1499,
        description: 'Modern abstract hand-painted art.',
        cover: 'Noorset4/c2_p4_1.JPG',
        gallery: [
            'Noorset4/c2_p4_1.JPG',
            'Noorset4/c2_p4_2.JPG',
            'Noorset4/c2_p4_3.JPG',
            'Noorset4/c2_p4_4.JPG'
        ]
    }
];

// =============================================================================
// SECTION 5: SERVICES DATA
// =============================================================================
const SERVICES = [
    { id: 'consult', name: 'Design Consultation', duration: '30 min', price: 250 },
    { id: 'fullset', name: 'Full Set Application', duration: '90 min', price: 250 },
    { id: 'removal', name: 'Removal & Care', duration: '45 min', price: 250 },
];

// =============================================================================
// SYSTEM LOGIC
// =============================================================================

// Combine Data for Internal Use
const SHOP_DATA = [
    {
        id: 'main1',
        name: CATEGORY_INFO.cat1.name,
        image: CATEGORY_INFO.cat1.image,
        products: CAT_1_PRODUCTS
    },
    {
        id: 'main2',
        name: CATEGORY_INFO.cat2.name,
        image: CATEGORY_INFO.cat2.image,
        products: CAT_2_PRODUCTS
    }
];

// App State
let state = {
    currentPage: 'home',
    // LOCAL STORAGE LOGIC
    cart: JSON.parse(localStorage.getItem('ronish_cart')) || [],
    mobileMenuOpen: false,
    selectedService: null,
    activeCategory: null,
    activeProduct: null,
    lightboxImage: null, 
    policyOpen: false    
};

// HELPER: Save Cart to Storage
function saveCartToStorage() {
    localStorage.setItem('ronish_cart', JSON.stringify(state.cart));
}

function getAllProducts() {
    let all = [];
    SHOP_DATA.forEach(main => {
        all = [...all, ...main.products];
    });
    return all;
}

function findProduct(id) {
    return getAllProducts().find(p => p.id === id);
}

// ---------------------------------------------------------
// HISTORY & NAVIGATION HANDLING
// ---------------------------------------------------------

function init() {
    // 1. Load Cart Logic
    const savedCart = JSON.parse(localStorage.getItem('ronish_cart'));
    if (savedCart && Array.isArray(savedCart)) {
        state.cart = savedCart.filter(item => item.cartId && item.size);
        saveCartToStorage();
    }

    // 2. Setup History
    const initialState = { page: 'home', cat: null, prod: null };
    history.replaceState(initialState, '', '');

    window.addEventListener('popstate', (event) => {
        if (event.state) {
            state.currentPage = event.state.page;
            state.activeCategory = event.state.cat;
            state.activeProduct = event.state.prod;
            state.mobileMenuOpen = false;
            state.lightboxImage = null; 
            state.policyOpen = false;
            window.scrollTo(0, 0);
            render();
        }
    });

    render();
}

function updateAppState(page, category = null, product = null) {
    state.currentPage = page;
    state.activeCategory = category;
    state.activeProduct = product;
    state.mobileMenuOpen = false;
    state.lightboxImage = null;
    state.policyOpen = false;

    const historyState = { page: page, cat: category, prod: product };
    history.pushState(historyState, '', '');

    window.scrollTo(0, 0);
    render();
}

// WRAPPERS FOR CLICK EVENTS
function navigate(page) {
    if (page === 'shop') {
        updateAppState('shop', null, null);
    } else {
        updateAppState(page, null, null);
    }
}

function openCategory(catId) {
    updateAppState('shop', catId, null);
}

function openProduct(prodId) {
    updateAppState('shop', state.activeCategory, prodId);
}

function backToCategories() {
    updateAppState('shop', null, null);
}

function backToProductList() {
    updateAppState('shop', state.activeCategory, null);
}

function toggleMobileMenu() {
    state.mobileMenuOpen = !state.mobileMenuOpen;
    render();
}

// NEW: Lightbox Handler
function toggleLightbox(imageSrc) {
    state.lightboxImage = imageSrc ? imageSrc : null;
    render();
}

// NEW: Policy Modal Handler
function togglePolicy() {
    state.policyOpen = !state.policyOpen;
    render();
}

// ---------------------------------------------------------
// CART LOGIC
// ---------------------------------------------------------

function addToCart(productId) {
    const product = findProduct(productId);
    if (!product) return;

    // 1. Get Selected Size
    const sizeSelect = document.getElementById('product-size-select');
    // Ensure size is selected (value must not be empty)
    if (!sizeSelect || sizeSelect.value === "") {
        alert("Please select a nail size before adding to cart.");
        return;
    }
    const selectedSize = sizeSelect.value;

    // 2. Create Unique Cart ID
    const cartItemId = `${productId}-${selectedSize}`;

    const existingItem = state.cart.find(item => item.cartId === cartItemId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        state.cart.push({
            ...product,
            cartId: cartItemId,
            size: selectedSize,
            quantity: 1
        });
    }

    saveCartToStorage();
    showNotification(`Added ${product.name} (${selectedSize})`);
    render();
}

function updateQuantity(cartItemId, change) {
    const item = state.cart.find(i => i.cartId === cartItemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(cartItemId);
        } else {
            saveCartToStorage();
            render();
        }
    }
}

function removeFromCart(cartItemId) {
    state.cart = state.cart.filter(item => item.cartId !== cartItemId);
    saveCartToStorage();
    render();
}

function getCartTotal() {
    return state.cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
}

function getCartCount() {
    return state.cart.reduce((acc, item) => acc + item.quantity, 0);
}

function showNotification(msg, type = 'success') {
    const container = document.getElementById('notification-container');
    if (!container) return;

    const colorClass = type === 'error' ? 'border-red-500' : 'border-beige';
    const icon = type === 'error' ? 'x-circle' : 'check';

    container.innerHTML = `
        <div class="bg-dark text-white px-6 py-4 rounded-lg shadow-2xl flex items-center border-l-4 ${colorClass} slide-up">
            <i data-lucide="${icon}" class="h-5 w-5 mr-3 text-beige"></i>
            <span class="font-medium">${msg}</span>
        </div>
    `;
    lucide.createIcons();
    container.classList.remove('hidden');

    setTimeout(() => {
        container.classList.add('hidden');
    }, 3000);
}

// ==========================================
// HTML GENERATORS
// ==========================================

function getLightboxHTML() {
    if (!state.lightboxImage) return '';
    return `
    <div class="fixed inset-0 z-[100] bg-black bg-opacity-95 flex items-center justify-center p-4 fade-in" onclick="toggleLightbox(null)">
        <button class="absolute top-5 right-5 text-white hover:text-beige transition-colors p-2 z-[101]">
            <i data-lucide="x" class="h-10 w-10"></i>
        </button>
        <img src="${state.lightboxImage}" class="max-w-full max-h-[85vh] rounded shadow-2xl object-contain scale-up" onclick="event.stopPropagation()" />
    </div>
    `;
}

function getPolicyModalHTML() {
    if (!state.policyOpen) return '';
    return `
    <div class="fixed inset-0 z-[110] bg-black bg-opacity-50 flex items-center justify-center p-4 fade-in" onclick="togglePolicy()">
        <div class="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl relative" onclick="event.stopPropagation()">
            <button class="absolute top-4 right-4 text-gray-400 hover:text-dark" onclick="togglePolicy()">
                <i data-lucide="x" class="h-6 w-6"></i>
            </button>
            <h3 class="text-2xl font-bold text-dark mb-4 font-serif">Shipping & Returns</h3>
            <div class="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p><strong>Shipping:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                    <li>Standard shipping takes 5-7 business days across India.</li>
                    <li>Express shipping options available upon request via WhatsApp.</li>
                </ul>
                <p><strong>Returns & Exchanges:</strong></p>
                <ul class="list-disc pl-5 space-y-1">
                    <li>Due to the custom nature of our press-on nails, <strong>we do not accept returns or exchanges</strong> unless the item arrives damaged.</li>
                    <li>Please ensure you measure your nails correctly using our guide before ordering.</li>
                </ul>
                <p class="text-xs text-gray-400 mt-4">For any issues, please contact us on WhatsApp within 24 hours of delivery.</p>
            </div>
        </div>
    </div>
    `;
}

function getHeaderHTML() {
    const count = getCartCount();
    
    const announcementHTML = CONFIG.showAnnouncement ? `
    <div class="bg-dark text-beige text-xs font-medium text-center py-2 px-4 tracking-wide">
        ${CONFIG.announcementText}
    </div>` : '';

    return `
    ${announcementHTML}
    <header class="sticky top-0 z-50 bg-white/95 shadow-md backdrop-blur-sm transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
            <div class="flex items-center cursor-pointer" onclick="navigate('home')">
                <img src="${CONFIG.logo}" alt="Logo" class="h-10 w-10 md:h-12 md:w-12 mr-3 rounded-xl object-contain shadow-md bg-white" 
                     onerror="this.src='https://placehold.co/100x100?text=R'" />
                <div class="flex flex-col leading-none">
                    <h1 class="text-xl md:text-2xl font-extrabold italic text-gray-900 font-serif">RONISH</h1>
                    <p class="text-[8px] md:text-[10px] tracking-widest uppercase font-medium text-gray-600">Chhabra Artistry</p>
                </div>
            </div>
            <nav class="hidden md:flex space-x-8 text-sm font-semibold uppercase tracking-wider text-dark">
                <button onclick="navigate('shop')" class="hover:text-beige transition duration-150 ${state.currentPage === 'shop' ? 'text-beige' : ''}">Shop</button>
                <button onclick="navigate('booking')" class="hover:text-beige transition duration-150">Book</button>
                <button onclick="navigate('home')" class="hover:text-beige transition duration-150">Gallery</button>
            </nav>
            <div class="flex items-center space-x-3 md:space-x-4">
                <button onclick="navigate('cart')" class="relative p-2 rounded-full hover:bg-gray-100 transition duration-150 group">
                    <i data-lucide="shopping-bag" class="h-6 w-6 text-dark group-hover:text-beige"></i>
                    ${count > 0 ? `<span class="absolute -top-1 -right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-dark transform bg-beige rounded-full shadow-sm">${count}</span>` : ''}
                </button>
                <button class="md:hidden p-2 rounded-full hover:bg-gray-100" onclick="toggleMobileMenu()">
                    <i data-lucide="${state.mobileMenuOpen ? 'x' : 'menu'}" class="h-6 w-6 text-dark"></i>
                </button>
            </div>
        </div>
        ${state.mobileMenuOpen ? `
        <div class="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2 shadow-lg slide-up absolute w-full left-0 top-full h-screen">
            <button onclick="navigate('shop')" class="block w-full text-left py-4 px-4 font-bold text-xl text-dark border-b border-gray-100">Shop Designs</button>
            <button onclick="navigate('booking')" class="block w-full text-left py-4 px-4 font-bold text-xl text-dark border-b border-gray-100">Book Appointment</button>
            <button onclick="navigate('home')" class="block w-full text-left py-4 px-4 font-bold text-xl text-dark">Gallery</button>
        </div>
        ` : ''}
    </header>
    `;
}

function getHeroHTML() {
    return `
    <section class="relative min-h-[65vh] md:min-h-screen flex items-center justify-center py-20 text-center text-white overflow-hidden fade-in bg-gray-900">
        <div class="absolute inset-0 bg-black">
            <img src="${CONFIG.heroBanner}" alt="Elegant Nail Art" 
                 class="w-full h-full object-cover object-center opacity-50" 
                 onerror="this.style.opacity='0.3'" />
        </div>
        <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
            <p class="text-lg md:text-xl font-medium mb-4 text-beige tracking-wide">The Art of Luxury, Customized for You.</p>
            <h2 class="text-4xl md:text-7xl font-bold mb-6 leading-tight font-serif">
                Designed to Make You <br/> <span class="text-beige italic">Feel Extraordinary.</span>
            </h2>
            <p class="text-base md:text-xl mb-10 max-w-2xl mx-auto text-gray-200 font-light">
                Exclusive press-on designs and bespoke artistry sessions curated by Chhabra Artistry.
            </p>
        </div>
    </section>
    
    <section class="py-12 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 bg-light">
        <h3 class="text-3xl md:text-4xl font-bold text-center text-dark mb-10 md:mb-16 font-serif">Your Exclusive Options</h3>
        <div class="grid md:grid-cols-2 gap-8 md:gap-12">
            <div class="bg-white rounded-xl shadow-xl overflow-hidden group">
                <div class="h-56 md:h-64 overflow-hidden">
                    <img src="${CONFIG.collectionFeature}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                         onerror="this.src='https://placehold.co/600x400?text=Collection'">
                </div>
                <div class="p-6 md:p-8">
                    <h4 class="text-2xl md:text-3xl font-bold text-dark mb-3 font-serif">The RONISH Collection</h4>
                    <p class="text-gray-600 mb-6">Discover our ready-to-wear, luxury press-on nail sets. Each set is handcrafted and reusable.</p>
                    <button onclick="navigate('shop')" class="w-full block text-center py-3 font-semibold rounded-lg bg-dark text-white hover:bg-black transition uppercase tracking-wider">BROWSE & SHOP NOW</button>
                </div>
            </div>
             <div class="bg-white rounded-xl shadow-xl overflow-hidden group">
                <div class="h-56 md:h-64 overflow-hidden">
                    <img src="${CONFIG.bookingFeature}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                         onerror="this.src='https://placehold.co/600x400?text=Booking'">
                </div>
                <div class="p-6 md:p-8">
                    <h4 class="text-2xl md:text-3xl font-bold text-dark mb-3 font-serif">Book Artistry Session</h4>
                    <p class="text-gray-600 mb-6">Schedule a private, in-person nail appointment or a virtual consultation for bespoke designs.</p>
                    <button onclick="navigate('booking')" class="w-full block text-center py-3 font-semibold rounded-lg bg-beige text-dark hover:bg-white transition uppercase tracking-wider">VIEW AVAILABILITY & BOOK</button>
                </div>
            </div>
        </div>
    </section>
    `;
}

function getShopHTML() {
    if (!state.activeCategory) {
        return `
        <div class="max-w-7xl mx-auto px-4 py-12 bg-light min-h-screen slide-up">
            <div class="text-center mb-8 md:mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-dark mb-3 font-serif">Select a Category</h2>
                <p class="text-gray-600">Choose a collection to explore.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                ${SHOP_DATA.map(cat => `
                <div onclick="openCategory('${cat.id}')" class="relative h-64 md:h-80 rounded-xl overflow-hidden cursor-pointer group shadow-lg">
                    <img src="${cat.image}" class="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                         onerror="this.src='https://placehold.co/600x400?text=${cat.name}'">
                    <div class="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>
                    <div class="absolute bottom-6 left-6 text-white">
                        <h3 class="text-2xl md:text-3xl font-bold font-serif">${cat.name}</h3>
                        <p class="text-sm opacity-90 mt-1">View Collection &rarr;</p>
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
        `;
    }

    const mainCat = SHOP_DATA.find(c => c.id === state.activeCategory);

    if (!state.activeProduct) {
        return `
        <div class="max-w-7xl mx-auto px-4 py-12 bg-light min-h-screen slide-up">
            <button onclick="backToCategories()" class="mb-6 flex items-center text-gray-600 hover:text-dark">
                <i data-lucide="arrow-left" class="h-5 w-5 mr-2"></i> Back to Categories
            </button>
            <div class="text-center mb-8 md:mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-dark mb-3 font-serif">${mainCat.name}</h2>
                <p class="text-gray-600">Select a style to view details.</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                ${mainCat.products.map(prod => `
                <div onclick="openProduct('${prod.id}')" class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all cursor-pointer group flex flex-col">
                    <div class="h-56 md:h-64 overflow-hidden bg-gray-200">
                        <img src="${prod.cover}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                             onerror="this.src='https://placehold.co/400x400?text=Product'">
                    </div>
                    <div class="p-6 text-center flex-grow flex flex-col justify-between">
                        <div>
                            <h3 class="text-xl font-bold text-dark font-serif">${prod.name}</h3>
                            <p class="text-beige font-bold mt-2">₹${prod.price}</p>
                        </div>
                        <button class="mt-4 px-4 py-3 bg-dark text-white text-sm rounded-full w-full group-hover:bg-beige group-hover:text-dark transition font-bold">View Details</button>
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
        `;
    }

    const product = mainCat.products.find(p => p.id === state.activeProduct);

    return `
    <div class="max-w-7xl mx-auto px-4 py-12 bg-light min-h-screen slide-up">
        <button onclick="backToProductList()" class="mb-6 flex items-center text-gray-600 hover:text-dark">
            <i data-lucide="arrow-left" class="h-5 w-5 mr-2"></i> Back to ${mainCat.name}
        </button>
        
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div class="md:flex">
                <!-- Gallery -->
                <div class="md:w-2/3 p-4 md:p-6 bg-gray-50">
                    <h3 class="text-lg font-bold text-dark mb-4">Gallery</h3>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                        ${product.gallery.map(img => `
                        <div class="aspect-square rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:scale-[1.02] transition duration-300">
                            <!-- UPDATED: Added toggleLightbox to gallery images -->
                            <img src="${img}" class="w-full h-full object-cover cursor-pointer" 
                                 onclick="toggleLightbox('${img}')"
                                 onerror="this.style.opacity='0.2'">
                        </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Details -->
                <div class="md:w-1/3 p-6 md:p-12 flex flex-col justify-center border-l border-gray-100">
                    <span class="text-xs md:text-sm text-beige font-bold uppercase tracking-widest mb-2">${mainCat.name}</span>
                    <h2 class="text-3xl md:text-4xl font-bold text-dark font-serif mb-4">${product.name}</h2>
                    <p class="text-gray-600 mb-8 leading-relaxed">${product.description}</p>
                    
                    <div class="flex items-center justify-between mb-4">
                        <span class="text-3xl font-bold text-dark">₹${product.price}</span>
                    </div>

                    <!-- SIZE SELECTOR -->
                    <div class="mb-6">
                        <label class="block text-sm font-bold text-dark mb-2">Select Size:</label>
                        <select id="product-size-select" class="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-beige bg-white">
                            <option value="" disabled selected>-- Choose Your Size --</option>
                            <option value="XS">XS (14, 10, 11, 10, 7mm)</option>
                            <option value="S">S (15, 11, 12, 11, 8mm)</option>
                            <option value="M">M (16, 12, 13, 12, 9mm)</option>
                            <option value="L">L (18, 13, 14, 13, 10mm)</option>
                            <option value="Custom">Custom / I Don't Know</option>
                        </select>
                    </div>

                    <button onclick="addToCart('${product.id}')" class="w-full py-4 bg-dark text-white font-bold rounded-xl hover:bg-black hover:scale-[1.02] transition-all shadow-lg flex justify-center items-center text-lg">
                        <i data-lucide="plus" class="h-5 w-5 mr-2"></i> Add To Cart
                    </button>
                    
                    <p class="text-xs text-gray-400 text-center mt-4">Prep kit included.</p>
                </div>
            </div>
        </div>
    </div>
    `;
}

function getCartHTML() {
    if (state.cart.length === 0) {
        return `
        <div class="flex flex-col items-center justify-center py-20 text-center slide-in">
            <div class="bg-light p-8 rounded-full mb-6">
                <i data-lucide="shopping-bag" class="h-12 w-12 text-beige"></i>
            </div>
            <h2 class="text-2xl font-bold text-dark mb-2">Your cart is empty</h2>
            <button onclick="navigate('shop')" class="mt-6 px-8 py-3 rounded-full bg-dark text-white hover:bg-black transition font-semibold">Browse Collection</button>
        </div>
        `;
    }

    return `
    <div class="max-w-7xl mx-auto px-4 py-12 min-h-screen slide-in">
        <div class="flex items-center mb-10">
            <button onclick="navigate('shop')" class="mr-4 p-2 rounded-full hover:bg-gray-100 transition-colors">
                <i data-lucide="arrow-left" class="h-5 w-5 text-gray-600"></i>
            </button>
            <h1 class="text-3xl md:text-4xl font-bold text-dark font-serif">Your Selection</h1>
        </div>
        <div class="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start">
            <section class="lg:col-span-7 space-y-6">
                ${state.cart.map(item => `
                <div class="flex bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                    <div class="h-24 w-24 md:h-28 md:w-28 flex-shrink-0 overflow-hidden rounded-lg border border-gray-200">
                        <img src="${item.cover}" class="h-full w-full object-cover" onerror="this.src='https://placehold.co/200x200?text=NA'">
                    </div>
                    <div class="ml-4 md:ml-6 flex flex-1 flex-col justify-between">
                        <div>
                            <div class="flex justify-between text-base md:text-lg font-bold text-dark font-serif">
                                <h3>${item.name}</h3>
                                <p>₹${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                            <!-- SHOW SIZE IN CART -->
                            <p class="mt-1 text-sm text-beige font-medium">Size: ${item.size}</p>
                        </div>
                        <div class="flex items-center justify-between mt-4">
                            <div class="flex items-center border border-gray-200 rounded-lg">
                                <!-- FIXED QUOTES FOR STRING IDs HERE -->
                                <button onclick="updateQuantity('${item.cartId}', -1)" class="p-2 hover:bg-gray-50 text-gray-600"><i data-lucide="minus" class="h-4 w-4"></i></button>
                                <span class="px-4 font-medium text-dark">${item.quantity}</span>
                                <button onclick="updateQuantity('${item.cartId}', 1)" class="p-2 hover:bg-gray-50 text-gray-600"><i data-lucide="plus" class="h-4 w-4"></i></button>
                            </div>
                            <button onclick="removeFromCart('${item.cartId}')" class="text-sm font-medium text-red-400 hover:text-red-600 flex items-center">
                                <i data-lucide="trash-2" class="h-4 w-4 mr-1"></i> Remove
                            </button>
                        </div>
                    </div>
                </div>
                `).join('')}
            </section>
            <section class="lg:col-span-5 mt-10 lg:mt-0 bg-white rounded-2xl shadow-lg p-8 sticky top-24 border border-beige/20">
                <h2 class="text-xl font-bold text-dark mb-6 font-serif">Order Summary</h2>
                <div class="space-y-4 text-sm border-b border-gray-100 pb-6">
                    <div class="flex justify-between"><span class="text-gray-600">Subtotal</span><span class="font-medium text-dark">₹${getCartTotal().toFixed(2)}</span></div>
                    <div class="flex justify-between"><span class="text-gray-600">Shipping</span><span class="font-medium text-green-600">Free</span></div>
                </div>
                <div class="flex justify-between py-6 text-lg font-bold text-dark"><span>Total</span><span>₹${getCartTotal().toFixed(2)}</span></div>
                <button onclick="navigate('checkout')" class="w-full flex justify-center items-center px-6 py-4 rounded-xl text-white bg-dark hover:bg-black transition-all shadow-lg text-lg font-bold">
                    <i data-lucide="credit-card" class="mr-2 h-5 w-5"></i> Proceed to Checkout
                </button>
            </section>
        </div>
    </div>
    `;
}

function getCheckoutHTML() {
    return `
    <div class="max-w-3xl mx-auto px-4 py-12 slide-up">
        <div class="text-center mb-10">
            <h2 class="text-3xl font-bold text-dark font-serif mb-2">Secure Checkout</h2>
            <p class="text-gray-600">Complete your order request details below.</p>
        </div>
        <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
            <form id="orderForm" onsubmit="event.preventDefault(); handleOrderSubmit();" class="space-y-6">
                <input type="hidden" name="Order_Details" id="order_details_input">
                <input type="hidden" name="Total_Price" id="order_total_input">
                <div>
                    <h3 class="text-lg font-bold text-dark mb-4 flex items-center"><i data-lucide="map-pin" class="h-5 w-5 mr-2 text-beige"></i> Shipping Address</h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div><label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label><input type="text" name="fullname" class="text-base w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-beige" required></div>
                        <div><label class="block text-sm font-medium text-gray-700 mb-1">Phone Number</label><input type="tel" name="phone" class="text-base w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-beige" required></div>
                    </div>
                    <div class="mt-4"><label class="block text-sm font-medium text-gray-700 mb-1">Street Address</label><input type="text" name="address" class="text-base w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-beige" required></div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                        <div><label class="block text-sm font-medium text-gray-700 mb-1">City</label><input type="text" name="city" class="text-base w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-beige" required></div>
                        <div><label class="block text-sm font-medium text-gray-700 mb-1">State</label><input type="text" name="state" class="text-base w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-beige" required></div>
                        <div><label class="block text-sm font-medium text-gray-700 mb-1">Zip Code</label><input type="text" name="zip" class="text-base w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-beige" required></div>
                    </div>
                </div>
                <hr class="border-gray-100 my-6">
                <div>
                    <h3 class="text-lg font-bold text-dark mb-4 flex items-center"><i data-lucide="credit-card" class="h-5 w-5 mr-2 text-beige"></i> Payment Method</h3>
                    <div class="p-4 bg-gray-50 rounded-lg border border-gray-200 text-sm text-gray-600 mb-4">
                        <p><strong>Note:</strong> Orders are processed manually. We will share our <strong>UPI ID / QR Code</strong> for payment via WhatsApp or Email after you place the request.</p>
                    </div>
                    <select name="payment_method" class="text-base w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-beige">
                        <option value="UPI">UPI (Google Pay / PhonePe / Paytm)</option>
                        <option value="BankTransfer">Bank Transfer (IMPS / NEFT)</option>
                    </select>
                </div>
                <input type="hidden" name="_subject" value="New PRODUCT ORDER from Ronish Website">
                <input type="hidden" name="_captcha" value="false">

                <!-- NEW: Terms Agreement Text -->
                <div class="text-xs text-gray-500 text-center mt-4">
                    By clicking below, you agree to our <button type="button" onclick="togglePolicy()" class="text-dark underline font-semibold">Shipping & Returns Policy</button>.
                </div>

                <button type="submit" id="placeOrderBtn" class="w-full py-4 bg-dark text-white font-bold rounded-lg hover:bg-black transition-colors mt-2 text-lg shadow-lg">Place Order Request (₹${getCartTotal().toFixed(2)})</button>
                <button type="button" onclick="navigate('cart')" class="w-full mt-3 text-sm text-gray-500 hover:text-dark">&larr; Back to Cart</button>
            </form>
        </div>
    </div>
    `;
}

function getBookingHTML() {
    return `
    <div class="max-w-4xl mx-auto px-4 py-12 slide-up">
        <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-dark mb-3 font-serif">Book Your Session</h2>
            <p class="text-gray-600">Select a service and find a time that works for you.</p>
        </div>
        <div class="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div class="md:grid md:grid-cols-3">
                <div class="bg-dark p-6 text-white md:col-span-1">
                    <h3 class="text-xl font-bold mb-6 text-beige font-serif">Services</h3>
                    <div class="space-y-4">
                        ${SERVICES.map(s => `
                        <div id="service-card-${s.id}" onclick="selectService('${s.id}', '${s.name}')" class="p-3 rounded-lg border border-gray-700 hover:border-beige cursor-pointer transition-all duration-200">
                            <div class="font-medium text-beige">${s.name}</div>
                            <div class="text-sm text-gray-400 flex justify-between mt-1"><span>${s.duration}</span><span>₹${s.price}</span></div>
                        </div>
                        `).join('')}
                    </div>
                </div>
                <div class="p-6 md:p-8 md:col-span-2">
                    <form id="bookingForm" onsubmit="event.preventDefault(); handleBookingSubmit();" class="space-y-6">
                        <input type="hidden" name="Service Requested" id="selected_service_input" value="" required>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div><label class="block text-sm font-medium text-gray-700 mb-1">First Name</label><input type="text" name="firstName" class="text-base w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-beige outline-none" required></div>
                            <div><label class="block text-sm font-medium text-gray-700 mb-1">Last Name</label><input type="text" name="lastName" class="text-base w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-beige outline-none" required></div>
                        </div>
                        <div><label class="block text-sm font-medium text-gray-700 mb-1">Email</label><input type="email" name="email" class="text-base w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-beige outline-none" required></div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div><label class="block text-sm font-medium text-gray-700 mb-1">Date</label><input type="date" name="date" class="text-base w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-beige outline-none" required></div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1">Time</label>
                                <select name="time" class="text-base w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-beige outline-none">
                                    <option>Morning (9AM - 12PM)</option><option>Afternoon (12PM - 4PM)</option><option>Evening (4PM - 8PM)</option>
                                </select>
                            </div>
                        </div>
                        <input type="hidden" name="_captcha" value="false">
                        <input type="hidden" name="_subject" value="New Booking Request from Ronish Website">
                        <button type="submit" id="submitBtn" class="w-full py-4 bg-dark text-white font-bold rounded-lg hover:bg-black transition-colors shadow-lg">Confirm Booking Request</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;
}

function getSuccessHTML() {
    return `
    <div class="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center slide-in">
        <div class="rounded-full bg-beige/20 p-6 mb-6 animate-bounce">
            <i data-lucide="star" class="h-12 w-12 text-beige fill-current"></i>
        </div>
        <h2 class="text-4xl font-bold text-dark mb-4 font-serif">Order Received!</h2>
        <p class="text-lg text-gray-600 mb-8 max-w-md">Thank you for your request. Please check your email for payment instructions and order confirmation.</p>
        <button onclick="state.cart = []; navigate('home')" class="px-8 py-3 bg-dark text-white rounded-full font-medium hover:bg-black transition-colors">Return to Home</button>
    </div>
    `;
}

function getFooterHTML() {
    return `
    <!-- FLOATING WHATSAPP BUTTON -->
    <a href="https://wa.me/${CONFIG.whatsapp.replace('+', '')}" target="_blank" 
       class="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center">
        <i data-lucide="message-circle" class="h-8 w-8"></i>
    </a>

    <footer class="bg-dark text-white py-12 mt-auto">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div class="flex items-center justify-center mb-6">
                <img src="${CONFIG.logo}" alt="Logo" class="h-12 w-12 mr-3 rounded-xl object-contain shadow-md bg-white" />
                <div class="flex flex-col leading-none text-left">
                    <h1 class="text-2xl font-extrabold italic text-beige font-serif">RONISH</h1>
                    <p class="text-[10px] tracking-widest uppercase font-medium text-gray-400">Chhabra Artistry</p>
                </div>
            </div>
            <p class="max-w-xl mx-auto text-gray-400 mb-8">Providing bespoke, high-end nail design. Quality is our signature.</p>
            <div class="flex justify-center space-x-8 mb-8">
                <!-- UPDATED: Instagram Link -->
                <a href="${CONFIG.instagram}" target="_blank" class="hover:text-beige transition flex flex-col items-center group">
                    <i data-lucide="instagram" class="h-6 w-6 mb-1"></i>
                    <span class="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">Insta</span>
                </a>
                
                <!-- WhatsApp (New) -->
                <a href="https://wa.me/${CONFIG.whatsapp}" target="_blank" class="hover:text-beige transition flex flex-col items-center group">
                    <i data-lucide="message-circle" class="h-6 w-6 mb-1"></i>
                    <span class="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">WhatsApp</span>
                </a>

                <!-- Email (Fixed) -->
                <a href="mailto:${CONFIG.email}" class="hover:text-beige transition flex flex-col items-center group">
                    <i data-lucide="mail" class="h-6 w-6 mb-1"></i>
                    <span class="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">Email</span>
                </a>
            </div>
            
            <div class="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-center items-center text-sm text-gray-500 space-y-2 md:space-y-0 md:space-x-6">
                <p>&copy; 2025 RONISH Chhabra Artistry. All rights reserved. | OG | v1.2</p>
                <button onclick="togglePolicy()" class="hover:text-beige underline transition">Shipping & Returns Policy</button>
            </div>
        </div>
    </footer>
    `;
}

// ==========================================
// 6. MAIN RENDER & ACTION HANDLERS
// ==========================================

function selectService(id, name) {
    const input = document.getElementById('selected_service_input');
    if(input) {
        input.value = name;
    }
    SERVICES.forEach(s => {
        const card = document.getElementById(`service-card-${s.id}`);
        if(card) {
            card.classList.remove('border-beige', 'bg-beige/10', 'ring-2', 'ring-beige');
            card.classList.add('border-gray-700');
        }
    });
    const selectedCard = document.getElementById(`service-card-${id}`);
    if(selectedCard) {
        selectedCard.classList.remove('border-gray-700');
        selectedCard.classList.add('border-beige', 'bg-beige/10', 'ring-2', 'ring-beige');
    }
}

function handleBookingSubmit() {
    const form = document.getElementById('bookingForm');
    const serviceInput = document.getElementById('selected_service_input');
    if(!serviceInput.value) {
        alert("Please select a service from the list on the left.");
        return;
    }
    if(CONFIG.email.includes("INSERT_YOUR_EMAIL")) {
        alert("Please open script.js and go to line 14 to put your actual email address!");
        return;
    }
    form.action = `https://formsubmit.co/${CONFIG.email}`;
    form.method = "POST";
    form.submit();
}

function handleOrderSubmit() {
    const form = document.getElementById('orderForm');
    if(CONFIG.email.includes("INSERT_YOUR_EMAIL")) {
        alert("Please open script.js and go to line 14 to put your actual email address!");
        return;
    }

    // NEW: Policy Notification / Confirmation Popup
    const policyMessage = "📝 PLEASE CONFIRM POLICY:\n\n" +
        "• Shipping: Takes 5-7 business days.\n" +
        "• Returns: No returns/exchanges on custom items.\n\n" +
        "Click OK to proceed with your order.";
    
    if (!confirm(policyMessage)) {
        return; // Stop if user cancels
    }

    // 1. Prepare Data
    const formData = new FormData(form);
    const customerName = formData.get('fullname');
    const customerPhone = formData.get('phone');
    const address = formData.get('address');
    const city = formData.get('city');
    const paymentMethod = formData.get('payment_method');

    // Cart Details
    let orderList = state.cart.map(item => {
        return `${item.quantity}x ${item.name} [Size: ${item.size}] (₹${(item.price * item.quantity).toFixed(2)})`;
    }).join("\n");
    
    const totalAmount = "₹" + getCartTotal().toFixed(2);

    // 2. WhatsApp Integration
    const waMessage = `*Hi Ronish, New Order Request!* 💅\n\n` +
        `*Name:* ${customerName}\n` +
        `*Phone:* ${customerPhone}\n` +
        `*Address:* ${address}, ${city}\n` +
        `*Payment Mode:* ${paymentMethod}\n\n` +
        `*Order Details:*\n${orderList}\n\n` +
        `*Total Amount:* ${totalAmount}\n\n` +
        `Please confirm availability and share payment details.`;

    const waURL = `https://wa.me/${CONFIG.whatsapp.replace('+', '')}?text=${encodeURIComponent(waMessage)}`;
    
    // Open WhatsApp
    window.open(waURL, '_blank');

    // 3. Email Backup
    let emailOrderString = state.cart.map(item => {
        return `${item.quantity}x ${item.name} - Size: ${item.size} (₹${(item.price * item.quantity).toFixed(2)})`;
    }).join(" | \n");

    document.getElementById('order_details_input').value = emailOrderString;
    document.getElementById('order_total_input').value = totalAmount;
    
    // Clear Cart
    localStorage.removeItem('ronish_cart');
    state.cart = []; 
    
    // Submit Form to Email 
    form.action = `https://formsubmit.co/${CONFIG.email}`;
    form.method = "POST";
    
    // Small delay to ensure tab opens before redirect
    setTimeout(() => {
        form.submit();
    }, 1000);
}

function render() {
    const app = document.getElementById('app');
    let contentHTML = '';
    
    // Lightbox & Modal (Z-index high)
    contentHTML += getLightboxHTML();
    contentHTML += getPolicyModalHTML();
    
    contentHTML += getHeaderHTML();
    contentHTML += '<main>';
    switch(state.currentPage) {
        case 'home': contentHTML += getHeroHTML(); break;
        case 'shop': contentHTML += getShopHTML(); break;
        case 'booking': contentHTML += getBookingHTML(); break;
        case 'cart': contentHTML += getCartHTML(); break;
        case 'checkout': contentHTML += getCheckoutHTML(); break;
        case 'success': contentHTML += getSuccessHTML(); break;
        default: contentHTML += getHeroHTML();
    }
    contentHTML += '</main>';
    contentHTML += getFooterHTML();
    app.innerHTML = contentHTML;
    lucide.createIcons();
}

init();