const format = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 2
});

const state = {
  model: "pro",
  color: "Cosmic Orange",
  tone: "#d66a2c",
  storage: "256GB",
  storageExtra: 0,
  tradeIn: false,
  tradeCredit: 62700,
  care: false
};

const colorImages = {
  "Cosmic Orange": "assets/sections/iphone-17-pro-cosmic-orange.png",
  "Deep Blue": "assets/sections/iphone-17-pro-deep-blue.png",
  "Silver": "assets/sections/iphone-17-pro-silver.png",
  "Space Black": "assets/sections/iphone-17-pro-space-black.png",
  "Natural Titanium": "assets/sections/iphone-17-pro-natural-titanium.png"
};

const models = {
  pro: {
    name: "iPhone 17 Pro",
    display: "15.9 cm (6.3-inch)",
    base: 134900,
    image: "assets/sections/iphone-17-pro-cosmic-orange.png"
  },
  max: {
    name: "iPhone 17 Pro Max",
    display: "17.4 cm (6.9-inch)",
    base: 149900,
    image: "assets/sections/iphone-17-pro-cosmic-orange.png"
  }
};

function $(selector) {
  return document.querySelector(selector);
}

function price() {
  const tradeCredit = state.tradeIn ? state.tradeCredit : 0;
  const careCost = state.care ? 20900 : 0;
  return models[state.model].base + state.storageExtra + careCost - tradeCredit;
}

function updateSummary() {
  const model = models[state.model];
  const total = price();
  const monthly = Math.ceil(total / 6);
  $("#phoneImage").src = colorImages[state.color] || model.image;
  $("#priceLine").textContent = `From ${format.format(model.base)} or ${format.format(Math.ceil(model.base / 6))}/mo.`;
  $("#colorNote").textContent = `Colour: ${state.color}`;
  $("#summaryTitle").textContent = `${model.name} ${state.storage}`;
  $("#summaryMeta").textContent = `${state.color} | ${model.display} | ${state.tradeIn ? `Trade-in ${format.format(state.tradeCredit)}` : "No trade-in"} | ${state.care ? "Protection added" : "No protection"}`;
  $("#summaryPrice").textContent = `${format.format(total)} or ${format.format(monthly)}/mo.`;
  document.documentElement.style.setProperty("--focus", `${state.tone}30`);
  document.querySelector(".hero-image").style.background =
    `radial-gradient(circle at 72% 20%, ${state.tone}30, transparent 34%), linear-gradient(145deg, #fff, #ececf1)`;
}

function setActive(button, selector) {
  document.querySelectorAll(selector).forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
}

function setColor(color, tone) {
  state.color = color;
  state.tone = tone;
  document.querySelectorAll("[data-color]").forEach((item) => {
    item.classList.toggle("active", item.dataset.color === color);
  });
  document.querySelectorAll("[data-gallery-color]").forEach((item) => {
    item.classList.toggle("active", item.dataset.galleryColor === color);
  });
  updateSummary();
}

document.querySelectorAll("[data-model]").forEach((button) => {
  button.addEventListener("click", () => {
    state.model = button.dataset.model;
    setActive(button, "[data-model]");
    updateSummary();
  });
});

document.querySelectorAll("[data-color]").forEach((button) => {
  button.style.setProperty("--tone", button.dataset.tone);
  button.addEventListener("click", () => {
    setColor(button.dataset.color, button.dataset.tone);
  });
});

document.querySelectorAll("[data-gallery-color]").forEach((button) => {
  button.addEventListener("click", () => {
    const swatch = document.querySelector(`[data-color="${button.dataset.galleryColor}"]`);
    setColor(swatch.dataset.color, swatch.dataset.tone);
  });
});

document.querySelectorAll("[data-storage]").forEach((button) => {
  button.addEventListener("click", () => {
    state.storage = button.dataset.storage;
    state.storageExtra = Number(button.dataset.extra);
    setActive(button, "[data-storage]");
    updateSummary();
  });
});

$("#tradeIn").addEventListener("change", (event) => {
  state.tradeIn = event.target.checked;
  $("#tradeBox").hidden = !state.tradeIn;
  updateSummary();
});

$("#oldPhone").addEventListener("change", (event) => {
  state.tradeCredit = Number(event.target.value);
  $("#tradeNote").textContent = `Estimated credit: ${format.format(state.tradeCredit)}`;
  updateSummary();
});

$("#carePlan").addEventListener("change", (event) => {
  state.care = event.target.checked;
  updateSummary();
});

$("#pinForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const pin = $("#pinCode").value.trim();
  $("#deliveryNote").textContent = pin.length === 6
    ? `Delivery available to ${pin}. Estimated arrival in 2-4 business days.`
    : "Enter a valid 6-digit PIN code.";
});

$("#addConfigured").addEventListener("click", async () => {
  const model = models[state.model];
  const order = {
    id: `KK-PRO-${Date.now().toString().slice(-6)}`,
    createdAt: new Date().toISOString(),
    total: price(),
    items: [{
      id: 19,
      qty: 1,
      name: `${model.name} ${state.storage} ${state.color}`,
      price: price()
    }],
    configuration: { ...state }
  };

  const orders = JSON.parse(localStorage.getItem("urbancart-orders") || "[]");
  orders.push(order);
  localStorage.setItem("urbancart-orders", JSON.stringify(orders));

  try {
    await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order)
    });
  } catch {
    // The browser copy is already saved.
  }

  $("#bagStatus").textContent = `${order.id} added. Continue shopping on the main store.`;
});

document.querySelectorAll("[data-scroll]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(button.dataset.scroll)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelector("[data-storage-guide]").addEventListener("click", () => {
  document.querySelector('[data-storage="512GB"]').click();
});

document.querySelectorAll("[data-pick-model]").forEach((button) => {
  button.addEventListener("click", () => {
    const modelButton = document.querySelector(`[data-model="${button.dataset.pickModel}"]`);
    modelButton.click();
    document.querySelector("#buy").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

updateSummary();
