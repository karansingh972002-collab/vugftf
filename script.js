let products = [
  {
    id: 8,
    name: "Glow Serum Duo",
    category: "Beauty",
    price: 39,
    rating: 4.6,
    color: "#ff845f",
    accent: "#f5efe6",
    shape: "serum",
    description: "Brightening serum pair with vitamin C and soothing botanical extracts.",
    features: ["Morning and night use", "Light texture", "Dermatologist tested"]
  },
  {
    id: 11,
    name: "Orbit Bluetooth Speaker",
    category: "Tech",
    price: 89,
    rating: 4.8,
    color: "#22364f",
    accent: "#ff845f",
    shape: "speaker",
    description: "Portable speaker with room-filling sound, deep bass, and splash resistance.",
    features: ["18-hour playtime", "IPX5 rated", "Pair two speakers"]
  },
  {
    id: 13,
    name: "Aroma Candle Trio",
    category: "Home",
    price: 34,
    rating: 4.5,
    color: "#b74b39",
    accent: "#f5efe6",
    shape: "candles",
    description: "Three soy wax candles with calm, fresh, and warm fragrance profiles.",
    features: ["Soy wax blend", "Cotton wicks", "Gift-ready packaging"]
  },
  {
    id: 14,
    name: "ChefPro Knife Set",
    category: "Kitchen",
    price: 142,
    rating: 4.9,
    color: "#20252b",
    accent: "#d7a23d",
    shape: "knives",
    description: "Balanced kitchen knife set with chef, utility, and paring blades.",
    features: ["German steel", "Ergonomic handles", "Magnetic storage rail"]
  },
  {
    id: 15,
    name: "TrailFlow Water Bottle",
    category: "Sports",
    price: 29,
    rating: 4.6,
    color: "#1e7c8d",
    accent: "#f0ebe3",
    shape: "bottle",
    description: "Insulated stainless bottle that keeps drinks cold through long days.",
    features: ["24-hour cold", "Leakproof lid", "Fits cup holders"]
  },
  {
    id: 16,
    name: "Silk Repair Hair Mask",
    category: "Beauty",
    price: 28,
    rating: 4.7,
    color: "#8b5d7a",
    accent: "#f7d7df",
    shape: "mask",
    description: "Rich conditioning hair mask for shine, softness, and smoother ends.",
    features: ["Weekly treatment", "Color-safe formula", "Soft floral scent"]
  },
  {
    id: 19,
    name: "iPhone 17 Pro",
    category: "Mobiles",
    price: 1349,
    rating: 4.9,
    color: "#d66a2c",
    accent: "#f3d0b7",
    shape: "iphonepro",
    description: "Flagship smartphone with cosmic-orange finish, pro camera system, and all-day battery.",
    features: ["Pro camera system", "A19 Pro-style performance", "USB-C charging"]
  },
  {
    id: 20,
    name: "iPhone 16",
    category: "Mobiles",
    price: 899,
    rating: 4.8,
    color: "#6d8fb3",
    accent: "#f5efe6",
    shape: "iphone",
    description: "Fast, bright, and easy to use smartphone for everyday photos, video, and apps.",
    features: ["Dual camera", "Bright OLED display", "Long battery life"]
  },
  {
    id: 21,
    name: "iPhone 15",
    category: "Mobiles",
    price: 699,
    rating: 4.7,
    color: "#8aa5a0",
    accent: "#f7d7df",
    shape: "iphone",
    description: "Reliable smartphone with a crisp display, strong camera, and smooth performance.",
    features: ["48MP main camera", "USB-C port", "Durable glass body"]
  },
  {
    id: 24,
    name: "MacBook Air 14",
    category: "Computers",
    price: 1199,
    rating: 4.8,
    color: "#3a4658",
    accent: "#4fc0af",
    shape: "laptop",
    description: "Thin laptop for work, study, streaming, and creative tasks with fast storage.",
    features: ["14-inch display", "Backlit keyboard", "Fast SSD storage"]
  },
  {
    id: 25,
    name: "Creator 4K Monitor",
    category: "Computers",
    price: 399,
    rating: 4.7,
    color: "#20252b",
    accent: "#d7a23d",
    shape: "monitor",
    description: "Sharp 4K display with color-friendly modes for editing, browsing, and gaming.",
    features: ["4K resolution", "USB-C input", "Adjustable stand"]
  },
  {
    id: 27,
    name: "RGB Gaming Keyboard",
    category: "Gaming",
    price: 86,
    rating: 4.7,
    color: "#171717",
    accent: "#7557a8",
    shape: "keyboard",
    description: "Mechanical gaming keyboard with bright lighting and responsive switches.",
    features: ["Mechanical switches", "RGB lighting", "Compact layout"]
  },
  {
    id: 28,
    name: "Swift Gaming Mouse",
    category: "Gaming",
    price: 49,
    rating: 4.5,
    color: "#2a2f3a",
    accent: "#ff845f",
    shape: "mouse",
    description: "Lightweight gaming mouse with fast sensor, smooth glide, and programmable buttons.",
    features: ["Fast optical sensor", "Six buttons", "Adjustable DPI"]
  },
  {
    id: 29,
    name: "CityPack Laptop Backpack",
    category: "Accessories",
    price: 72,
    rating: 4.6,
    color: "#0f6b61",
    accent: "#d7a23d",
    shape: "backpack",
    description: "Daily backpack with laptop protection, bottle pocket, and clean organization.",
    features: ["Laptop sleeve", "Water bottle pocket", "Hidden back pocket"]
  },
  {
    id: 30,
    name: "FastCharge USB-C Kit",
    category: "Accessories",
    price: 42,
    rating: 4.7,
    color: "#1e7c8d",
    accent: "#f0ebe3",
    shape: "charger",
    description: "Compact fast charger with braided USB-C cable for phones, tablets, and earbuds.",
    features: ["30W charging", "Braided cable", "Travel size"]
  },
  {
    id: 31,
    name: "iPad Air 13",
    category: "Tablets",
    price: 799,
    rating: 4.8,
    color: "#d8dee8",
    accent: "#6d8fb3",
    shape: "ipad",
    description: "Large, light tablet for drawing, streaming, study, and everyday productivity.",
    features: ["13-inch display", "Pencil support", "All-day battery"]
  },
  {
    id: 32,
    name: "iPhone 12",
    category: "Mobiles",
    price: 399,
    rating: 4.4,
    color: "#254f85",
    accent: "#dce9f7",
    shape: "iphone",
    description: "Classic all-screen iPhone with dual cameras, OLED display, and 5G support.",
    features: ["Dual camera", "OLED display", "5G support"]
  },
  {
    id: 33,
    name: "iPhone 12 Pro",
    category: "Mobiles",
    price: 499,
    rating: 4.5,
    color: "#6d747c",
    accent: "#d8d4ca",
    shape: "iphonepro",
    description: "Pro iPhone with stainless-style finish, triple camera layout, and smooth performance.",
    features: ["Triple camera", "Pro finish", "MagSafe support"]
  },
  {
    id: 34,
    name: "iPhone 12 Pro Max",
    category: "Mobiles",
    price: 549,
    rating: 4.6,
    color: "#3f5364",
    accent: "#c8d8e6",
    shape: "iphonepro",
    description: "Large-screen Pro Max iPhone with excellent battery life and pro camera tools.",
    features: ["Large display", "Pro camera", "Long battery life"]
  },
  {
    id: 35,
    name: "iPhone 13",
    category: "Mobiles",
    price: 529,
    rating: 4.6,
    color: "#e6a7b8",
    accent: "#f8dfe7",
    shape: "iphone",
    description: "Reliable iPhone with improved cameras, bright display, and strong daily battery.",
    features: ["Dual camera", "Cinematic video", "Bright display"]
  },
  {
    id: 36,
    name: "iPhone 13 mini",
    category: "Mobiles",
    price: 449,
    rating: 4.5,
    color: "#325f8f",
    accent: "#d9ecff",
    shape: "iphone",
    description: "Compact iPhone with flagship performance in a smaller pocket-friendly size.",
    features: ["Compact size", "Dual camera", "5G support"]
  },
  {
    id: 37,
    name: "iPhone 13 Pro",
    category: "Mobiles",
    price: 629,
    rating: 4.7,
    color: "#8fa7a4",
    accent: "#e8f1ee",
    shape: "iphonepro",
    description: "ProMotion iPhone with triple camera system and premium alpine-style finish.",
    features: ["ProMotion display", "Triple camera", "Macro photos"]
  },
  {
    id: 38,
    name: "iPhone 13 Pro Max",
    category: "Mobiles",
    price: 699,
    rating: 4.7,
    color: "#d8c7a5",
    accent: "#fbefd8",
    shape: "iphonepro",
    description: "Large Pro iPhone with long battery life, bright screen, and pro camera features.",
    features: ["Large Pro display", "Long battery", "Triple camera"]
  },
  {
    id: 39,
    name: "iPhone 14",
    category: "Mobiles",
    price: 599,
    rating: 4.6,
    color: "#5c4c8d",
    accent: "#e6def7",
    shape: "iphone",
    description: "Everyday iPhone with better low-light photos, safety features, and smooth apps.",
    features: ["Dual camera", "Safety features", "OLED display"]
  },
  {
    id: 40,
    name: "iPhone 14 Plus",
    category: "Mobiles",
    price: 679,
    rating: 4.6,
    color: "#eef0f2",
    accent: "#80a7d8",
    shape: "iphone",
    description: "Big-screen iPhone with a roomy display and excellent battery life.",
    features: ["Large display", "Long battery", "Dual camera"]
  },
  {
    id: 41,
    name: "iPhone 14 Pro",
    category: "Mobiles",
    price: 779,
    rating: 4.8,
    color: "#4b425e",
    accent: "#d6cde8",
    shape: "iphonepro",
    description: "Pro iPhone with Dynamic Island-style display area and 48MP main camera.",
    features: ["48MP camera", "Always-on display", "Pro performance"]
  },
  {
    id: 42,
    name: "iPhone 14 Pro Max",
    category: "Mobiles",
    price: 849,
    rating: 4.8,
    color: "#1d1d1f",
    accent: "#dedede",
    shape: "iphonepro",
    description: "Largest iPhone 14 Pro model with pro cameras and strong battery life.",
    features: ["Large display", "48MP camera", "Pro battery"]
  },
  {
    id: 43,
    name: "iPhone 15 Plus",
    category: "Mobiles",
    price: 799,
    rating: 4.7,
    color: "#92b8ca",
    accent: "#e4f3f8",
    shape: "iphone",
    description: "Large iPhone 15 with USB-C, Dynamic Island-style display area, and long battery.",
    features: ["USB-C port", "Large display", "48MP main camera"]
  },
  {
    id: 44,
    name: "iPhone 15 Pro",
    category: "Mobiles",
    price: 899,
    rating: 4.8,
    color: "#4f555d",
    accent: "#d5d7da",
    shape: "iphonepro",
    description: "Titanium-style Pro iPhone with action button, pro camera system, and USB-C.",
    features: ["Action button", "Pro camera", "USB-C port"]
  },
  {
    id: 45,
    name: "iPhone 15 Pro Max",
    category: "Mobiles",
    price: 999,
    rating: 4.8,
    color: "#1f3147",
    accent: "#d7e1ee",
    shape: "iphonepro",
    description: "Large titanium-style Pro Max iPhone with advanced zoom and all-day battery.",
    features: ["Pro Max display", "Advanced zoom", "USB-C port"]
  },
  {
    id: 46,
    name: "iPhone 16 Plus",
    category: "Mobiles",
    price: 999,
    rating: 4.8,
    color: "#78a6d1",
    accent: "#eef6ff",
    shape: "iphone",
    description: "Large-screen iPhone 16 with smooth performance and dependable battery life.",
    features: ["Large display", "Dual camera", "Fast charging"]
  },
  {
    id: 47,
    name: "iPhone 16 Pro",
    category: "Mobiles",
    price: 1099,
    rating: 4.9,
    color: "#b7a891",
    accent: "#f3eadc",
    shape: "iphonepro",
    description: "Pro iPhone 16 with premium finish, pro camera controls, and fast performance.",
    features: ["Pro camera", "Premium finish", "Fast chip"]
  },
  {
    id: 48,
    name: "iPhone 16 Pro Max",
    category: "Mobiles",
    price: 1199,
    rating: 4.9,
    color: "#2f343a",
    accent: "#d7d2c8",
    shape: "iphonepro",
    description: "Largest iPhone 16 Pro model with big display and top battery life.",
    features: ["Largest display", "Pro camera", "Top battery"]
  },
  {
    id: 49,
    name: "iPhone 17",
    category: "Mobiles",
    price: 999,
    rating: 4.8,
    color: "#d8d8d2",
    accent: "#f5f5f0",
    shape: "iphone",
    description: "Newest everyday iPhone with bright display, fast performance, and refined design.",
    features: ["Bright display", "Fast performance", "USB-C charging"]
  },
  {
    id: 50,
    name: "iPhone 17 Plus",
    category: "Mobiles",
    price: 1099,
    rating: 4.8,
    color: "#172d4f",
    accent: "#d9e7fa",
    shape: "iphone",
    description: "Large iPhone 17 model with immersive display and strong all-day battery.",
    features: ["Large display", "All-day battery", "Dual camera"]
  },
  {
    id: 51,
    name: "iPhone 17 Pro Max",
    category: "Mobiles",
    price: 1499,
    rating: 4.9,
    color: "#172d4f",
    accent: "#f3d0b7",
    shape: "iphonepro",
    description: "Top iPhone model with the largest display, pro camera system, and premium battery life.",
    features: ["6.9-inch display", "Pro camera system", "Best battery"]
  },
  {
    id: 52,
    name: "iPhone SE (1st gen)",
    category: "Mobiles",
    price: 149,
    rating: 4.1,
    color: "#c8c8cc",
    accent: "#f5f5f7",
    shape: "iphone",
    description: "The original compact iPhone SE with Touch ID, 4-inch display, and A9 chip performance.",
    features: ["Touch ID", "4-inch display", "A9 chip"]
  },
  {
    id: 53,
    name: "iPhone SE (2nd gen)",
    category: "Mobiles",
    price: 249,
    rating: 4.3,
    color: "#1d1d1f",
    accent: "#d2d2d7",
    shape: "iphone",
    description: "Powerful compact iPhone SE with A13 Bionic chip and Touch ID home button.",
    features: ["A13 Bionic", "Touch ID", "4.7-inch display"]
  },
  {
    id: 54,
    name: "iPhone SE (3rd gen)",
    category: "Mobiles",
    price: 299,
    rating: 4.4,
    color: "#d22b2b",
    accent: "#ffeaea",
    shape: "iphone",
    description: "Latest iPhone SE with A15 Bionic chip, 5G support, and classic compact design.",
    features: ["A15 Bionic", "5G support", "Touch ID"]
  },
  {
    id: 55,
    name: "iPhone 11",
    category: "Mobiles",
    price: 299,
    rating: 4.4,
    color: "#9bc048",
    accent: "#f0f9e0",
    shape: "iphone",
    description: "Dual-camera iPhone 11 with all-day battery life, Night mode, and wide color display.",
    features: ["Dual camera", "Night mode", "All-day battery"]
  },
  {
    id: 56,
    name: "iPhone 11 Pro",
    category: "Mobiles",
    price: 399,
    rating: 4.5,
    color: "#4e5b52",
    accent: "#d6e8da",
    shape: "iphonepro",
    description: "Pro triple-camera iPhone 11 Pro with Super Retina XDR display and Midnight Green finish.",
    features: ["Triple camera", "Super Retina XDR", "Pro performance"]
  },
  {
    id: 57,
    name: "iPhone 11 Pro Max",
    category: "Mobiles",
    price: 449,
    rating: 4.6,
    color: "#c8c0aa",
    accent: "#f5f0e8",
    shape: "iphonepro",
    description: "Largest iPhone 11 Pro with exceptional battery life and triple camera system.",
    features: ["Triple camera", "Largest display", "Best battery in iPhone 11"]
  },
  {
    id: 58,
    name: "iPhone 16e",
    category: "Mobiles",
    price: 599,
    rating: 4.6,
    color: "#2c2c2e",
    accent: "#e5e5ea",
    shape: "iphone",
    description: "Affordable iPhone 16e with A16 Bionic chip, single camera, and clean modern design.",
    features: ["A16 Bionic", "Single camera", "USB-C port"]
  }
];

products = products.filter((product) => product.name.includes("iPhone") || product.name.includes("MacBook"));

const state = {
  cart: JSON.parse(localStorage.getItem("urbancart-cart") || "[]")
    .filter((item) => products.some((product) => product.id === item.id)),
  coupon: "",
  filters: {
    search: "",
    category: "all",
    sort: "featured",
    maxPrice: 1600
  }
};

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
const STORE_DISCOUNT = 0.25;
const $ = (selector) => document.querySelector(selector);
const grid = $("#productsGrid");
const cartDrawer = $("#cartDrawer");
const modal = $("#productModal");
const authModal = $("#authModal");
let authMode = "login";

async function apiRequest(path, options = {}) {
  const response = await fetch(path, {
    headers: { "Content-Type": "application/json" },
    ...options
  });
  if (!response.ok) throw new Error(`API request failed: ${response.status}`);
  return response.status === 204 ? null : response.json();
}

// Map product IDs to real image paths (add more as you add images)
const productImages = {
  19: "assets/products/iphone-17-pro-user-screenshot.png",
  20: "assets/products/20-iphone-16.png",
  21: "assets/products/iphone-14-and-14-plus-user-screenshot.png",
  24: "assets/products/macbook-air-14-user-screenshot.png",
  32: "assets/products/iphone-12-user-screenshot.png",
  33: "assets/products/iphone-12-pro-user-screenshot.png",
  39: "assets/products/iphone-14-and-14-plus-user-screenshot.png",
  40: "assets/products/iphone-14-and-14-plus-user-screenshot.png",
  41: "assets/products/iphone-14-pro-user-screenshot.png"
};

function handleImgError(img, id) {
  img.onerror = null;
  img.src = productSvg(products.find(p => p.id === id));
  img.style.objectFit = "cover";
}

function productImg(product) {
  if (productImages[product.id]) {
    return `<img
      src="${productImages[product.id]}"
      alt="${product.name}"
      style="background:#ffffff;object-fit:contain;"
      onerror="handleImgError(this,${product.id})"
    />`;
  }
  return `<img src="${productSvg(product)}" alt="${product.name}" />`;
}

function salePrice(product) {
  return Math.round(product.price * (1 - STORE_DISCOUNT));
}

function salePriceHtml(product) {
  return `
    <span class="sale-price">${money.format(salePrice(product))}</span>
    <span class="old-price">${money.format(product.price)}</span>
    <span class="sale-badge">25% off</span>
  `;
}

function productSvg(product) {
  const c = product.color;
  const a = product.accent;
  const drawings = {
    headphones: `<rect x='100' y='280' width='260' height='14' rx='7' fill='${a}' opacity='.3'/>
      <path d='M148 200 Q148 90 230 90 Q312 90 312 200' fill='none' stroke='${a}' stroke-width='18' stroke-linecap='round'/>
      <rect x='110' y='196' width='52' height='96' rx='26' fill='${a}'/>
      <rect x='118' y='204' width='36' height='80' rx='18' fill='#ffffff' opacity='.2'/>
      <rect x='298' y='196' width='52' height='96' rx='26' fill='${a}'/>
      <rect x='306' y='204' width='36' height='80' rx='18' fill='#ffffff' opacity='.2'/>
      <circle cx='136' cy='244' r='14' fill='#ffffff' opacity='.15'/>
      <circle cx='324' cy='244' r='14' fill='#ffffff' opacity='.15'/>
      <circle cx='230' cy='90' r='12' fill='${a}' opacity='.6'/>`,
    lamp: `<rect x='168' y='272' width='124' height='18' rx='9' fill='${a}' opacity='.5'/>
      <rect x='220' y='196' width='20' height='80' rx='10' fill='${a}'/>
      <path d='M175 196 L200 88 h60 L285 196 Z' fill='${a}'/>
      <ellipse cx='230' cy='196' rx='60' ry='10' fill='${a}' opacity='.4'/>
      <ellipse cx='230' cy='140' rx='28' ry='28' fill='#ffffff' opacity='.25'/>
      <ellipse cx='222' cy='132' rx='10' ry='10' fill='#ffffff' opacity='.3'/>`,
    bag: `<rect x='118' y='152' width='224' height='170' rx='32' fill='${a}'/>
      <rect x='128' y='162' width='204' height='150' rx='24' fill='${a}' opacity='.7'/>
      <path d='M168 165 Q168 100 230 100 Q292 100 292 165' fill='none' stroke='#ffffff' stroke-width='16' stroke-linecap='round'/>
      <rect x='138' y='200' width='184' height='3' rx='1.5' fill='#ffffff' opacity='.25'/>
      <rect x='138' y='218' width='184' height='3' rx='1.5' fill='#ffffff' opacity='.15'/>
      <rect x='188' y='270' width='84' height='28' rx='14' fill='#ffffff' opacity='.2'/>
      <rect x='210' y='278' width='40' height='12' rx='6' fill='#ffffff' opacity='.4'/>`,
    bottles: `<rect x='120' y='148' width='76' height='150' rx='28' fill='${a}'/>
      <rect x='128' y='158' width='60' height='130' rx='20' fill='#ffffff' opacity='.18'/>
      <rect x='140' y='112' width='36' height='46' rx='14' fill='${a}' opacity='.8'/>
      <rect x='148' y='104' width='20' height='16' rx='6' fill='#ffffff' opacity='.5'/>
      <rect x='246' y='120' width='76' height='180' rx='28' fill='${a}' opacity='.85'/>
      <rect x='254' y='130' width='60' height='160' rx='20' fill='#ffffff' opacity='.18'/>
      <rect x='258' y='84' width='36' height='46' rx='14' fill='${a}' opacity='.8'/>
      <rect x='266' y='76' width='20' height='16' rx='6' fill='#ffffff' opacity='.5'/>
      <rect x='130' y='200' width='56' height='8' rx='4' fill='#ffffff' opacity='.3'/>
      <rect x='256' y='190' width='56' height='8' rx='4' fill='#ffffff' opacity='.3'/>`,
    watch: `<rect x='192' y='56' width='16' height='48' rx='8' fill='${a}' opacity='.7'/>
      <rect x='252' y='56' width='16' height='48' rx='8' fill='${a}' opacity='.7'/>
      <rect x='192' y='296' width='16' height='48' rx='8' fill='${a}' opacity='.7'/>
      <rect x='252' y='296' width='16' height='48' rx='8' fill='${a}' opacity='.7'/>
      <rect x='158' y='100' width='144' height='200' rx='40' fill='${a}'/>
      <rect x='166' y='112' width='128' height='176' rx='32' fill='#0a0a0a'/>
      <rect x='174' y='122' width='112' height='156' rx='24' fill='#0f1822'/>
      <circle cx='230' cy='200' r='42' fill='none' stroke='${a}' stroke-width='4' opacity='.3'/>
      <path d='M230 162 L230 200 L256 200' stroke='#ffffff' stroke-width='6' stroke-linecap='round' stroke-linejoin='round' fill='none'/>
      <circle cx='230' cy='200' r='5' fill='#ffffff'/>
      <rect x='186' y='256' width='88' height='12' rx='6' fill='#ffffff' opacity='.15'/>`,
    plates: `<ellipse cx='230' cy='310' rx='130' ry='18' fill='#000000' opacity='.12'/>
      <circle cx='230' cy='200' r='118' fill='${a}'/>
      <circle cx='230' cy='200' r='100' fill='${a}' opacity='.7'/>
      <circle cx='230' cy='200' r='80' fill='#ffffff' opacity='.12'/>
      <circle cx='230' cy='200' r='58' fill='#ffffff' opacity='.08'/>
      <circle cx='230' cy='200' r='30' fill='#ffffff' opacity='.1'/>
      <circle cx='276' cy='152' r='28' fill='${a}' opacity='.9'/>
      <circle cx='276' cy='152' r='18' fill='#ffffff' opacity='.2'/>`,
    jacket: "<path d='M150 118l54-34h52l54 34 38 168h-88l-30-94-30 94h-88z' fill='#ffffff'/><path d='M230 86v188' stroke='#171717' stroke-width='14'/><path d='M175 166h45M240 166h45' stroke='#2f5e90' stroke-width='14' stroke-linecap='round'/>",
    serum: `<rect x='130' y='128' width='80' height='180' rx='32' fill='${a}'/>
      <rect x='140' y='138' width='60' height='160' rx='24' fill='#ffffff' opacity='.15'/>
      <rect x='148' y='96' width='44' height='42' rx='16' fill='${a}' opacity='.8'/>
      <rect x='158' y='88' width='24' height='16' rx='6' fill='#ffffff' opacity='.5'/>
      <rect x='136' y='180' width='68' height='6' rx='3' fill='#ffffff' opacity='.3'/>
      <rect x='250' y='128' width='80' height='180' rx='32' fill='${a}' opacity='.85'/>
      <rect x='260' y='138' width='60' height='160' rx='24' fill='#ffffff' opacity='.15'/>
      <rect x='268' y='96' width='44' height='42' rx='16' fill='${a}' opacity='.8'/>
      <rect x='278' y='88' width='24' height='16' rx='6' fill='#ffffff' opacity='.5'/>
      <circle cx='185' cy='225' r='22' fill='#ffffff' opacity='.15'/>
      <circle cx='298' cy='210' r='18' fill='#ffffff' opacity='.12'/>`,
    coffee: "<path d='M160 150h132v86c0 34-28 62-62 62h-8c-34 0-62-28-62-62z' fill='#ffffff'/><path d='M292 176h24c30 0 30 48 0 48h-24' fill='none' stroke='#ffffff' stroke-width='18'/><path d='M170 306h140' stroke='#171717' stroke-width='18' stroke-linecap='round'/><path d='M190 108c-18-28 28-28 10-56M238 108c-18-28 28-28 10-56' stroke='#ffffff' stroke-width='12' stroke-linecap='round'/>",
    yoga: "<rect x='108' y='214' width='245' height='58' rx='29' fill='#ffffff'/><rect x='134' y='168' width='245' height='58' rx='29' fill='#171717' opacity='.88'/><path d='M120 300h230' stroke='#ffffff' stroke-width='18' stroke-linecap='round'/><circle cx='132' cy='243' r='19' fill='#4fc0af'/>",
    speaker: `<rect x='100' y='130' width='260' height='200' rx='50' fill='${a}'/>
      <rect x='110' y='140' width='240' height='180' rx='40' fill='#ffffff' opacity='.08'/>
      <circle cx='175' cy='225' r='54' fill='#0a0a0a'/>
      <circle cx='175' cy='225' r='38' fill='#1a1a1a'/>
      <circle cx='175' cy='225' r='20' fill='${a}'/>
      <circle cx='175' cy='225' r='8' fill='#ffffff' opacity='.4'/>
      <circle cx='285' cy='225' r='54' fill='#0a0a0a'/>
      <circle cx='285' cy='225' r='38' fill='#1a1a1a'/>
      <circle cx='285' cy='225' r='20' fill='${a}'/>
      <circle cx='285' cy='225' r='8' fill='#ffffff' opacity='.4'/>
      <rect x='186' y='140' width='88' height='6' rx='3' fill='#ffffff' opacity='.15'/>
      <rect x='196' y='154' width='68' height='4' rx='2' fill='#ffffff' opacity='.1'/>`,
    shoes: "<path d='M112 238c70 18 125 9 179-34 42 14 64 33 68 62H118c-18 0-24-19-6-28z' fill='#ffffff'/><path d='M110 266h252' stroke='#171717' stroke-width='18' stroke-linecap='round'/><path d='M188 202l52 30M214 188l52 30' stroke='#0f6b61' stroke-width='10' stroke-linecap='round'/>",
    candles: `<rect x='96' y='168' width='74' height='140' rx='22' fill='${a}'/>
      <rect x='104' y='178' width='58' height='120' rx='14' fill='#ffffff' opacity='.15'/>
      <path d='M133 140 Q125 158 133 168' stroke='${a}' stroke-width='6' stroke-linecap='round' fill='none'/>
      <ellipse cx='133' cy='135' rx='5' ry='8' fill='${a}' opacity='.8'/>
      <rect x='193' y='136' width='74' height='172' rx='22' fill='${a}' opacity='.9'/>
      <rect x='201' y='146' width='58' height='152' rx='14' fill='#ffffff' opacity='.15'/>
      <path d='M230 108 Q222 126 230 136' stroke='${a}' stroke-width='6' stroke-linecap='round' fill='none'/>
      <ellipse cx='230' cy='103' rx='5' ry='8' fill='${a}' opacity='.8'/>
      <rect x='290' y='180' width='74' height='128' rx='22' fill='${a}' opacity='.8'/>
      <rect x='298' y='190' width='58' height='108' rx='14' fill='#ffffff' opacity='.15'/>
      <path d='M327 152 Q319 170 327 180' stroke='${a}' stroke-width='6' stroke-linecap='round' fill='none'/>
      <ellipse cx='327' cy='147' rx='5' ry='8' fill='${a}' opacity='.8'/>`,
    knives: `<rect x='102' y='292' width='256' height='14' rx='7' fill='${a}' opacity='.3'/>
      <path d='M138 292 L298 92 Q320 70 336 86 L176 286 Z' fill='${a}'/>
      <path d='M138 292 L298 92 Q310 80 316 86' fill='none' stroke='#ffffff' stroke-width='3' opacity='.3'/>
      <rect x='108' y='272' width='58' height='50' rx='14' fill='${a}' opacity='.8'/>
      <rect x='116' y='280' width='42' height='34' rx='8' fill='#ffffff' opacity='.15'/>
      <path d='M280 110 L310 88' stroke='#ffffff' stroke-width='4' stroke-linecap='round' opacity='.4'/>
      <path d='M172' y='248 L196 220' stroke='#ffffff' stroke-width='3' stroke-linecap='round' opacity='.25'/>`,
    bottle: `<ellipse cx='230' cy='318' rx='62' ry='10' fill='#000000' opacity='.1'/>
      <rect x='176' y='108' width='108' height='210' rx='48' fill='${a}'/>
      <rect x='186' y='120' width='88' height='188' rx='38' fill='#ffffff' opacity='.12'/>
      <rect x='196' y='68' width='68' height='50' rx='22' fill='${a}' opacity='.85'/>
      <rect x='208' y='60' width='44' height='14' rx='6' fill='#ffffff' opacity='.5'/>
      <rect x='186' y='188' width='88' height='8' rx='4' fill='#ffffff' opacity='.25'/>
      <rect x='192' y='206' width='76' height='5' rx='2.5' fill='#ffffff' opacity='.15'/>
      <circle cx='195' cy='155' r='14' fill='#ffffff' opacity='.12'/>`,
    mask: `<rect x='116' y='156' width='228' height='148' rx='44' fill='${a}'/>
      <rect x='126' y='166' width='208' height='128' rx='36' fill='#ffffff' opacity='.1'/>
      <path d='M148 166 L172 110 H288 L312 166' fill='${a}' opacity='.85'/>
      <path d='M148 166 L172 110 H288 L312 166' fill='none' stroke='#ffffff' stroke-width='3' opacity='.2'/>
      <circle cx='185' cy='225' r='20' fill='#ffffff' opacity='.18'/>
      <circle cx='275' cy='225' r='20' fill='#ffffff' opacity='.18'/>
      <path d='M200 255 Q230 270 260 255' stroke='#ffffff' stroke-width='6' stroke-linecap='round' fill='none' opacity='.4'/>`,
    tablet: "<rect x='112' y='96' width='236' height='186' rx='24' fill='#ffffff'/><rect x='136' y='122' width='188' height='126' rx='12' fill='#171717'/><path d='M184 218l72-62 38 38' fill='none' stroke='#4fc0af' stroke-width='12' stroke-linecap='round' stroke-linejoin='round'/><path d='M320 284l42 42' stroke='#ffffff' stroke-width='16' stroke-linecap='round'/>",
    duffel: "<rect x='104' y='164' width='252' height='120' rx='34' fill='#ffffff'/><path d='M170 170c0-70 120-70 120 0' fill='none' stroke='#ffffff' stroke-width='20' stroke-linecap='round'/><path d='M138 222h184' stroke='#171717' stroke-width='12' stroke-linecap='round'/><circle cx='150' cy='290' r='16' fill='#0f6b61'/><circle cx='310' cy='290' r='16' fill='#0f6b61'/>",
    iphone: "<rect x='168' y='66' width='124' height='258' rx='34' fill='#ffffff'/><rect x='182' y='90' width='96' height='210' rx='22' fill='#171717'/><circle cx='230' cy='282' r='8' fill='#ffffff'/><circle cx='206' cy='112' r='9' fill='#6d8fb3'/><circle cx='230' cy='112' r='9' fill='#6d8fb3'/>",
    iphonepro: "<rect x='162' y='58' width='136' height='272' rx='36' fill='#ffffff'/><rect x='181' y='84' width='98' height='220' rx='22' fill='#171717'/><rect x='190' y='100' width='74' height='62' rx='18' fill='#35322f'/><circle cx='207' cy='118' r='12' fill='#b8a98d'/><circle cx='247' cy='118' r='12' fill='#b8a98d'/><circle cx='227' cy='144' r='12' fill='#b8a98d'/>",
    powerbank: "<rect x='142' y='108' width='176' height='202' rx='36' fill='#ffffff'/><circle cx='230' cy='208' r='56' fill='none' stroke='#0f6b61' stroke-width='16'/><path d='M202 208h56M230 180v56' stroke='#0f6b61' stroke-width='12' stroke-linecap='round'/><rect x='184' y='86' width='92' height='22' rx='11' fill='#171717'/>",
    earbuds: "<rect x='142' y='206' width='176' height='88' rx='34' fill='#ffffff'/><path d='M174 118c34 0 42 40 18 58v50h-34v-78c0-17 7-30 16-30zM286 118c-34 0-42 40-18 58v50h34v-78c0-17-7-30-16-30z' fill='#ffffff'/><circle cx='180' cy='154' r='18' fill='#22364f'/><circle cx='280' cy='154' r='18' fill='#22364f'/>",
    laptop: "<rect x='110' y='102' width='240' height='150' rx='18' fill='#ffffff'/><rect x='132' y='124' width='196' height='104' rx='8' fill='#171717'/><path d='M82 270h296l-34 36H116z' fill='#ffffff'/><path d='M190 286h80' stroke='#4fc0af' stroke-width='10' stroke-linecap='round'/>",
    monitor: "<rect x='92' y='88' width='276' height='180' rx='22' fill='#ffffff'/><rect x='116' y='114' width='228' height='124' rx='10' fill='#171717'/><path d='M230 268v44M178 312h104' stroke='#ffffff' stroke-width='18' stroke-linecap='round'/><path d='M154 182h152' stroke='#d7a23d' stroke-width='12' stroke-linecap='round'/>",
    camera: "<rect x='116' y='142' width='228' height='142' rx='28' fill='#ffffff'/><rect x='148' y='112' width='74' height='40' rx='12' fill='#ffffff'/><circle cx='238' cy='214' r='52' fill='#171717'/><circle cx='238' cy='214' r='24' fill='#b74b39'/><circle cx='312' cy='170' r='14' fill='#171717'/>",
    keyboard: "<rect x='82' y='150' width='296' height='134' rx='24' fill='#ffffff'/><g fill='#171717'><rect x='112' y='180' width='30' height='24' rx='6'/><rect x='154' y='180' width='30' height='24' rx='6'/><rect x='196' y='180' width='30' height='24' rx='6'/><rect x='238' y='180' width='30' height='24' rx='6'/><rect x='280' y='180' width='30' height='24' rx='6'/><rect x='322' y='180' width='30' height='24' rx='6'/><rect x='112' y='218' width='70' height='24' rx='6'/><rect x='196' y='218' width='114' height='24' rx='6'/><rect x='322' y='218' width='30' height='24' rx='6'/></g>",
    mouse: "<path d='M230 92c64 0 108 58 108 132 0 62-37 98-108 98s-108-36-108-98c0-74 44-132 108-132z' fill='#ffffff'/><path d='M230 96v86' stroke='#171717' stroke-width='12'/><rect x='218' y='126' width='24' height='44' rx='12' fill='#ff845f'/><path d='M158 236h144' stroke='#171717' stroke-width='12' stroke-linecap='round'/>",
    backpack: "<rect x='138' y='118' width='184' height='184' rx='42' fill='#ffffff'/><path d='M178 130c0-62 104-62 104 0' fill='none' stroke='#ffffff' stroke-width='18' stroke-linecap='round'/><rect x='166' y='210' width='128' height='56' rx='20' fill='#0f6b61'/><path d='M182 178h96' stroke='#171717' stroke-width='12' stroke-linecap='round'/>",
    charger: "<rect x='142' y='136' width='120' height='120' rx='28' fill='#ffffff'/><path d='M174 112v34M230 112v34' stroke='#ffffff' stroke-width='18' stroke-linecap='round'/><path d='M262 206c82 0 82 84 10 84h-52' fill='none' stroke='#ffffff' stroke-width='18' stroke-linecap='round'/><path d='M184 196h40M204 176v40' stroke='#1e7c8d' stroke-width='10' stroke-linecap='round'/>",
    ipad: "<rect x='116' y='66' width='228' height='286' rx='34' fill='#ffffff'/><rect x='138' y='94' width='184' height='230' rx='20' fill='#171717'/><path d='M174 238l78-74 54 52' fill='none' stroke='#6d8fb3' stroke-width='14' stroke-linecap='round' stroke-linejoin='round'/><circle cx='230' cy='338' r='8' fill='#171717'/>"
  };

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="460" height="410" viewBox="0 0 460 410"><rect width="460" height="410" fill="${product.color}"/><circle cx="360" cy="82" r="84" fill="${product.accent}" opacity=".9"/><circle cx="76" cy="330" r="92" fill="${product.accent}" opacity=".42"/>${drawings[product.shape]}</svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function saveCart() {
  localStorage.setItem("urbancart-cart", JSON.stringify(state.cart));
  localStorage.setItem("urbancart-coupon", state.coupon);
}

function openCartPanel(message = "") {
  if (message) $("#checkoutStatus").textContent = message;
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function goToShop() {
  document.querySelector("#shop").scrollIntoView({ behavior: "smooth", block: "start" });
}

function selectCategory(category) {
  state.filters.category = category;
  state.filters.search = "";
  $("#searchInput").value = "";
  $("#categoryFilter").value = category;
  renderProducts();
  goToShop();
}

function searchProducts(query) {
  state.filters.search = query;
  state.filters.category = "all";
  $("#searchInput").value = query;
  $("#categoryFilter").value = "all";
  renderProducts();
  goToShop();
}

function applyDealCoupon() {
  state.coupon = "";
  renderCart();
  openCartPanel("25% off is active on every product.");
}

function filteredProducts() {
  let list = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(state.filters.search.toLowerCase()) ||
      product.category.toLowerCase().includes(state.filters.search.toLowerCase());
    const matchesCategory = state.filters.category === "all" || product.category === state.filters.category;
    const matchesPrice = salePrice(product) <= state.filters.maxPrice;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  if (state.filters.sort === "price-low") list = list.sort((a, b) => salePrice(a) - salePrice(b));
  if (state.filters.sort === "price-high") list = list.sort((a, b) => salePrice(b) - salePrice(a));
  if (state.filters.sort === "rating") list = list.sort((a, b) => b.rating - a.rating);
  return list;
}

function renderProducts() {
  const list = filteredProducts();
  $("#resultCount").textContent = list.length ? `Showing ${list.length} product${list.length === 1 ? "" : "s"}` : "No products found";

  grid.innerHTML = list.length ? list.map((product) => `
    <article class="product-card">
      <button class="product-image-button" type="button" data-view="${product.id}" aria-label="View ${product.name}">
        ${productImg(product)}
      </button>
      <div class="product-body">
        <div class="product-meta">
          <h3>${product.name}</h3>
          <span class="rating">${product.rating}</span>
        </div>
        <p>${product.description}</p>
        <div class="price-row">
          <strong>${salePriceHtml(product)}</strong>
          <span>${product.category}</span>
        </div>
        <div class="product-actions">
          <button type="button" data-view="${product.id}">View product</button>
          <button type="button" data-add="${product.id}">Add to cart</button>
        </div>
      </div>
    </article>
  `).join("") : `<div class="empty-state">No matching products. Try clearing the filters.</div>`;
}

function cartTotals() {
  const subtotal = state.cart.reduce((sum, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
  const discount = subtotal * STORE_DISCOUNT;
  const shipping = subtotal === 0 || subtotal - discount >= 150 ? 0 : 9.95;
  return { subtotal, discount, shipping, total: subtotal - discount + shipping };
}

function renderCart() {
  const count = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const hasItems = state.cart.length > 0;
  $("#cartCount").textContent = count;
  $("#couponForm").hidden = !hasItems;
  $(".cart-summary").hidden = !hasItems;
  $("#checkoutForm").hidden = !hasItems;
  $("#cartBenefits").hidden = !hasItems;

  $("#cartItems").innerHTML = hasItems ? state.cart.map((item) => {
    const product = products.find((entry) => entry.id === item.id);
    return `
      <div class="cart-line">
        ${productImg(product)}
        <div class="cart-line-content">
          <div class="cart-line-top">
            <strong>${product.name}</strong>
            <span>${money.format(salePrice(product) * item.qty)}</span>
          </div>
          <p>${product.category} - 25% off applied</p>
          <div class="quantity-row">
            <div class="quantity-controls" aria-label="Quantity controls for ${product.name}">
              <button type="button" data-dec="${product.id}">-</button>
              <strong>${item.qty}</strong>
              <button type="button" data-inc="${product.id}">+</button>
            </div>
            <button class="remove-button" type="button" data-remove="${product.id}">Remove</button>
          </div>
        </div>
      </div>
    `;
  }).join("") : `
    <div class="empty-cart">
      <div class="empty-cart-visual" aria-hidden="true">
        <span></span>
      </div>
      <div>
        <h3>Your cart is empty</h3>
        <p>Add an iPhone to start checkout. Your 25% sale price applies automatically.</p>
      </div>
      <button type="button" data-category="Mobiles">Shop iPhones</button>
    </div>
  `;

  const totals = cartTotals();
  $("#subtotal").textContent = money.format(totals.subtotal);
  $("#discount").textContent = `-${money.format(totals.discount)}`;
  $("#shipping").textContent = totals.shipping === 0 ? "Free" : money.format(totals.shipping);
  $("#total").textContent = money.format(totals.total);
  $("#couponInput").value = state.coupon;
  saveCart();
}

function addToCart(id) {
  const item = state.cart.find((entry) => entry.id === id);
  if (item) item.qty += 1;
  else state.cart.push({ id, qty: 1 });
  renderCart();
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  openCartPanel();
}

function updateQuantity(id, change) {
  const item = state.cart.find((entry) => entry.id === id);
  if (!item) return;
  item.qty += change;
  if (item.qty <= 0) state.cart = state.cart.filter((entry) => entry.id !== id);
  renderCart();
}

function openDetails(id) {
  const product = products.find((entry) => entry.id === id);
  $("#modalContent").innerHTML = `
    <div class="modal-product product-view">
      <div class="product-view-media">
        ${productImg(product)}
      </div>
      <div class="product-view-info">
        <p class="eyebrow">${product.category}</p>
        <h2 id="modalTitle">${product.name}</h2>
        <p class="product-view-copy">${product.description}</p>
        <div class="product-view-price">
          <strong>${salePriceHtml(product)}</strong>
          <span>Rating ${product.rating}</span>
        </div>
        <div class="product-view-strip">
          <span>Free delivery</span>
          <span>Secure checkout</span>
          <span>Easy returns</span>
        </div>
        <ul class="product-view-features">${product.features.map((feature) => `<li>${feature}</li>`).join("")}</ul>
        <div class="product-view-actions">
          <button class="primary-button" type="button" data-add="${product.id}">Add to cart</button>
          <button class="secondary-button" type="button" data-buy="${product.id}">Buy now</button>
        </div>
      </div>
    </div>
  `;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeOverlays() {
  cartDrawer.classList.remove("open");
  modal.classList.remove("open");
  authModal.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  modal.setAttribute("aria-hidden", "true");
  authModal.setAttribute("aria-hidden", "true");
}

function savedUsers() {
  return JSON.parse(localStorage.getItem("urbancart-users") || "[]");
}

function currentUser() {
  return JSON.parse(localStorage.getItem("urbancart-current-user") || "null");
}

function setAuthMode(mode) {
  authMode = mode;
  const isSignup = mode === "signup";
  $("#authNameLabel").hidden = !isSignup;
  $("#authName").required = isSignup;
  $("#authTitle").textContent = isSignup ? "Create your account" : "Login to Kairo Kart";
  $("#authEyebrow").textContent = isSignup ? "Join Kairo Kart" : "Welcome back";
  $("#authSubmit").textContent = isSignup ? "Create account" : "Login";
  $("#authStatus").textContent = "";
  $("#authLoginTab").classList.toggle("active", !isSignup);
  $("#authSignupTab").classList.toggle("active", isSignup);
}

function openAuth(mode) {
  setAuthMode(mode);
  authModal.classList.add("open");
  authModal.setAttribute("aria-hidden", "false");
  $("#authEmail").focus();
}

function renderAuthState() {
  const user = currentUser();
  $("#userChip").hidden = !user;
  $("#logoutButton").hidden = !user;
  $("#loginButton").hidden = Boolean(user);
  $("#signupButton").hidden = Boolean(user);
  if (user) $("#userChip").textContent = `Hi, ${user.name || user.email}`;
}

function initializeFilters() {
  const categories = [...new Set(products.map((product) => product.category))];
  $("#categoryFilter").insertAdjacentHTML(
    "beforeend",
    categories.map((category) => `<option value="${category}">${category}</option>`).join("")
  );
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-add], [data-buy], [data-view], [data-inc], [data-dec], [data-remove], [data-category], [data-search], [data-apply-coupon], [data-open-cart], [data-open-auth]");
  if (!target) return;

  const addId = target.dataset.add;
  const buyId = target.dataset.buy;
  const viewId = target.dataset.view;
  const incId = target.dataset.inc;
  const decId = target.dataset.dec;
  const removeId = target.dataset.remove;
  const category = target.dataset.category;
  const search = target.dataset.search;
  const authModeTarget = target.dataset.openAuth;

  if (addId) addToCart(Number(addId));
  if (buyId) addToCart(Number(buyId));
  if (viewId) openDetails(Number(viewId));
  if (incId) updateQuantity(Number(incId), 1);
  if (decId) updateQuantity(Number(decId), -1);
  if (category) {
    selectCategory(category);
    if (cartDrawer.contains(target)) closeOverlays();
  }
  if (search) searchProducts(search);
  if (target.matches("[data-apply-coupon]")) applyDealCoupon();
  if (target.matches("[data-open-cart]")) openCartPanel();
  if (authModeTarget) openAuth(authModeTarget);
  if (removeId) {
    state.cart = state.cart.filter((item) => item.id !== Number(removeId));
    renderCart();
  }
});

$("#openCart").addEventListener("click", () => {
  openCartPanel();
});

$("#closeCart").addEventListener("click", closeOverlays);
$("#closeModal").addEventListener("click", closeOverlays);

cartDrawer.addEventListener("click", (event) => {
  if (event.target === cartDrawer) closeOverlays();
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) closeOverlays();
});

authModal.addEventListener("click", (event) => {
  if (event.target === authModal) closeOverlays();
});

$("#loginButton").addEventListener("click", () => openAuth("login"));
$("#signupButton").addEventListener("click", () => openAuth("signup"));
$("#closeAuth").addEventListener("click", closeOverlays);

document.querySelectorAll("[data-auth-mode]").forEach((button) => {
  button.addEventListener("click", () => setAuthMode(button.dataset.authMode));
});

$("#logoutButton").addEventListener("click", () => {
  localStorage.removeItem("urbancart-current-user");
  renderAuthState();
});

$("#authForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = $("#authName").value.trim();
  const email = $("#authEmail").value.trim().toLowerCase();
  const password = $("#authPassword").value;
  const users = savedUsers();

  if (authMode === "signup") {
    if (users.some((user) => user.email === email)) {
      $("#authStatus").textContent = "This email already has an account. Try login.";
      return;
    }
    const user = { name, email, password };
    users.push(user);
    localStorage.setItem("urbancart-users", JSON.stringify(users));
    localStorage.setItem("urbancart-current-user", JSON.stringify({ name, email }));
    $("#authStatus").textContent = "Account created. You are signed in.";
  } else {
    const user = users.find((entry) => entry.email === email && entry.password === password);
    if (!user) {
      $("#authStatus").textContent = "Invalid email or password. Create an account if you are new.";
      return;
    }
    localStorage.setItem("urbancart-current-user", JSON.stringify({ name: user.name, email: user.email }));
    $("#authStatus").textContent = "Login successful.";
  }

  event.target.reset();
  renderAuthState();
  setTimeout(closeOverlays, 700);
});

$("#searchInput").addEventListener("input", (event) => {
  state.filters.search = event.target.value;
  renderProducts();
});

$("#categoryFilter").addEventListener("change", (event) => {
  state.filters.category = event.target.value;
  renderProducts();
});

$("#sortFilter").addEventListener("change", (event) => {
  state.filters.sort = event.target.value;
  renderProducts();
});

$("#priceRange").addEventListener("input", (event) => {
  state.filters.maxPrice = Number(event.target.value);
  $("#priceValue").textContent = money.format(state.filters.maxPrice);
  renderProducts();
});

$("#clearFilters").addEventListener("click", () => {
  state.filters = { search: "", category: "all", sort: "featured", maxPrice: 1600 };
  $("#searchInput").value = "";
  $("#categoryFilter").value = "all";
  $("#sortFilter").value = "featured";
  $("#priceRange").value = "1600";
  $("#priceValue").textContent = "$1,600";
  renderProducts();
});

$("#couponForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const code = $("#couponInput").value.trim().toUpperCase();
  state.coupon = "";
  $("#checkoutStatus").textContent = code ? "25% off is already active on every product." : "25% off is active automatically.";
  renderCart();
});

$("#checkoutForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!state.cart.length) {
    $("#checkoutStatus").textContent = "Add at least one item before checkout.";
    return;
  }
  const totals = cartTotals();
  const order = {
    id: `KK-${Date.now().toString().slice(-6)}`,
    createdAt: new Date().toISOString(),
    total: totals.total,
    items: state.cart
  };
  const orders = JSON.parse(localStorage.getItem("urbancart-orders") || "[]");
  orders.push(order);
  localStorage.setItem("urbancart-orders", JSON.stringify(orders));
  try {
    await apiRequest("/api/orders", {
      method: "POST",
      body: JSON.stringify(order)
    });
  } catch {
    $("#checkoutStatus").textContent = "Order saved in this browser. Start the Node server to save it on the backend.";
  }
  state.cart = [];
  state.coupon = "";
  event.target.reset();
  renderCart();
  $("#checkoutStatus").textContent = `Order ${order.id} placed successfully for ${money.format(order.total)}.`;
});

$("#contactForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const form = new FormData(event.target);
  const message = {
    name: form.get("name"),
    email: form.get("email"),
    message: form.get("message"),
    createdAt: new Date().toISOString()
  };
  const messages = JSON.parse(localStorage.getItem("urbancart-messages") || "[]");
  messages.push(message);
  localStorage.setItem("urbancart-messages", JSON.stringify(messages));
  try {
    await apiRequest("/api/messages", {
      method: "POST",
      body: JSON.stringify(message)
    });
  } catch {
    // Local fallback already saved the message.
  }
  event.target.reset();
  $("#contactStatus").textContent = "Thanks. Your message has been received.";
});

$("#newsletterForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = $("#newsletterEmail").value.trim();
  const subscribers = JSON.parse(localStorage.getItem("urbancart-subscribers") || "[]");
  if (email && !subscribers.includes(email)) subscribers.push(email);
  localStorage.setItem("urbancart-subscribers", JSON.stringify(subscribers));
  try {
    await apiRequest("/api/subscribers", {
      method: "POST",
      body: JSON.stringify({ email })
    });
  } catch {
    // Local fallback already saved the subscriber.
  }
  event.target.reset();
  $("#newsletterStatus").textContent = "Subscribed. You will receive the next store update.";
});

$("#copyCoupon").addEventListener("click", async () => {
  applyDealCoupon();
  $("#copyCoupon").textContent = "25% off active";
});

$("#themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  $("#themeToggle").textContent = isDark ? "Light" : "Dark";
  localStorage.setItem("urbancart-theme", isDark ? "dark" : "light");
});

$(".menu-toggle").addEventListener("click", (event) => {
  const open = $("#navLinks").classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(open));
});

$("#navLinks").addEventListener("click", () => {
  $("#navLinks").classList.remove("open");
  $(".menu-toggle").setAttribute("aria-expanded", "false");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeOverlays();
});

if (localStorage.getItem("urbancart-theme") === "dark") {
  document.body.classList.add("dark");
  $("#themeToggle").textContent = "Light";
}

initializeFilters();
renderProducts();
renderCart();
renderAuthState();
