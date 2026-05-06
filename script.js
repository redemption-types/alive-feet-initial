// Item database: Dead Hand Collection
// Weights match real CS2 drop rates:
//   Mil-Spec ~79.92%, Restricted ~15.98%, Classified ~3.20%, Covert ~0.64%, Gloves ~0.26%
// Prices are ranges — rolled fresh each session for variance.
const items = [
  // ── Mil-Spec (avg ~$0.60, range $0.15–$2.50) ──────────────
  {
    name: "AK-47 | Slate (Mil-Spec)",
    rarity: "Mil-Spec",
    priceMin: 0.15,
    priceMax: 1.8,
    weight: 400,
    image: "blue - lmg_processed.png",
  },
  {
    name: "M4A4 | Magnesium (Mil-Spec)",
    rarity: "Mil-Spec",
    priceMin: 0.2,
    priceMax: 2.5,
    weight: 400,
    image: "blue - rifle_processed.png",
  },
  // ── Restricted (avg ~$4, range $1.50–$12) ─────────────────
  {
    name: "M4A1-S | Emphorosaur-S (Restricted)",
    rarity: "Restricted",
    priceMin: 2.5,
    priceMax: 12.0,
    weight: 55,
    image: "purple - rifle_processed.png",
  },
  {
    name: "USP-S | Cortex (Restricted)",
    rarity: "Restricted",
    priceMin: 1.5,
    priceMax: 9.0,
    weight: 55,
    image: "purple - deagle_processed.png",
  },
  {
    name: "Glock-18 | Weasel (Restricted)",
    rarity: "Restricted",
    priceMin: 1.8,
    priceMax: 8.0,
    weight: 50,
    image: "purple - deagle_processed.png",
  },
  // ── Classified (avg ~$22, range $8–$55) ───────────────────
  {
    name: "USP-S | Flashback (Classified)",
    rarity: "Classified",
    priceMin: 8.0,
    priceMax: 55.0,
    weight: 16,
    image: "pink - pistol_processed.png",
  },
  // ── Covert (avg ~$120, range $60–$250) ────────────────────
  {
    name: "AWP | Dragon Lore (Covert)",
    rarity: "Covert",
    priceMin: 60.0,
    priceMax: 250.0,
    weight: 3,
    image: "red - sniper_processed.png",
  },
  // ── Gloves (avg ~$850, range $400–$1800) ──────────────────
  {
    name: "Hand Wraps | Slaughter",
    rarity: "Gloves",
    priceMin: 400,
    priceMax: 1800,
    weight: 1,
    image: "gold - gloves_processed.bmp",
  },
  // Comment out the rest of gloves
  /*
    { name: "Hand Wraps | Badlands", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Hand Wraps | Duct Tape", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Hand Wraps | Arboreal", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Hand Wraps | Overprint", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Hand Wraps | Constrictor", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Hand Wraps | Giraffe", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Moto Gloves | Blood Pressure", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Moto Gloves | 3rd Commando Company", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Moto Gloves | Finish Line", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Moto Gloves | Polygon", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Moto Gloves | Transport", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Moto Gloves | POW!", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Moto Gloves | Turtle", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Moto Gloves | Boom!", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Specialist Gloves | Crimson Kimono", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Specialist Gloves | Emerald Web", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Specialist Gloves | Foundation", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Specialist Gloves | Forest DDPAT", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Specialist Gloves | Mogul", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Specialist Gloves | Fade", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Specialist Gloves | Buckshot", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Specialist Gloves | Crimson Web", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Specialist Gloves | Marble Fade", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Sport Gloves | Amphibious", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Sport Gloves | Arid", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Sport Gloves | Big Game", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Sport Gloves | Bronze Morph", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Sport Gloves | Vice", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Sport Gloves | Omega", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Sport Gloves | Superconductor", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Sport Gloves | Hedge Maze", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Sport Gloves | Nocts", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Driver Gloves | Crimson Weave", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Driver Gloves | Diamondback", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Driver Gloves | Imperial Plaid", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Driver Gloves | King Snake", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Driver Gloves | Overtake", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Driver Gloves | Racing Green", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Driver Gloves | Convoy", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Driver Gloves | Lunar Weave", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Hydra Gloves | Case Hardened", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Hydra Gloves | Rattler", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Hydra Gloves | Mangrove", rarity: "Gloves", price: 1000, weight: 1 },
    { name: "Hydra Gloves | Emerald", rarity: "Gloves", price: 1000, weight: 1 }
    */
];

// Compute total weight
let totalWeight = items.reduce((sum, item) => sum + item.weight, 0);

// Roll a random price within an item's range, rounded to 2dp
function rollPrice(item) {
  const raw = item.priceMin + Math.random() * (item.priceMax - item.priceMin);
  return Math.round(raw * 100) / 100;
}

// Weighted random picker — returns a copy with a freshly rolled price
function getRandomItem() {
  let random = Math.random() * totalWeight;
  let cumulative = 0;
  for (let item of items) {
    cumulative += item.weight;
    if (random < cumulative) {
      return { ...item, price: rollPrice(item) };
    }
  }
}

// Generate 6 offers
let offers = [];
for (let i = 0; i < 6; i++) {
  offers.push(getRandomItem());
}

let currentOfferIndex = 0;
let stats = {}; // Track what was pulled
let inventory = []; // Track what was accepted
let easterEggActive = false;
let hasInteracted = false; // Track if user has accepted or re-rolled

const output = document.getElementById("output");
const acceptBtn = document.getElementById("accept");
const rerollBtn = document.getElementById("reroll");
const counterText = document.getElementById("counter-text");
const statsList = document.getElementById("stats-list");
const inventoryList = document.getElementById("inventory-list");
const easterEgg = document.getElementById("easter-egg");
const terminal = document.getElementById("terminal");
const summaryOverlay = document.getElementById("summary-overlay");

// Typewriter effect
function typeWriter(text, element, speed = 50) {
  element.textContent = "";
  let i = 0;
  const timer = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}

// Rarity color map
const rarityColors = {
  "Mil-Spec": "#0066ff",
  Restricted: "#9933ff",
  Classified: "#ff1493",
  Covert: "#ff0000",
  Gloves: "#ffd700",
};

// Update statistics display
function updateStats() {
  let html = "";
  for (let rarity in stats) {
    html += `<div>${rarity}: ${stats[rarity]}</div>`;
  }
  statsList.innerHTML = html || "<div>None yet</div>";
  // Show stats panel only after at least one item has been resolved
  if (Object.keys(stats).length > 0) {
    document.getElementById("stats-panel").style.display = "block";
  }
}

// Update inventory display
function updateInventory() {
  let html = "";
  inventory.forEach((item) => {
    html += `<div style="color: ${rarityColors[item.rarity]}">${item.name} <span style="color:#aaa">$${item.price}</span></div>`;
  });
  inventoryList.innerHTML = html || "<div>Empty</div>";
  // Show inventory panel only if items exist
  if (inventory.length > 0) {
    document.getElementById("inventory-panel").style.display = "block";
  }
}

// Show current offer  (stats are NOT updated here — only on resolve)
function showOffer() {
  const item = offers[currentOfferIndex];
  const color = rarityColors[item.rarity] || "#b19cd9";

  // Update counter
  counterText.textContent = `${currentOfferIndex + 1}/6`;

  let html = "";
  if (item.image) {
    html += `<img src="low-poly/${item.image}" alt="${item.name}" style="max-width:180px; max-height:180px; margin-bottom:15px; animation: fadeInOffer 1s ease-in;">`;
  }
  html += `<div style="color: ${color}; font-weight: bold; font-size: 18px; margin-top: 10px; animation: fadeInOffer 1s ease-in; animation-delay: 0.3s; animation-fill-mode: both;">${item.name}</div>`;
  html += `<div style="margin-top: 10px; animation: fadeInOffer 1s ease-in; animation-delay: 0.6s; animation-fill-mode: both;"><strong>Rarity:</strong> <span style="color: ${color}; font-weight: bold;">${item.rarity}</span></div>`;
  html += `<div style="margin-top: 10px; animation: fadeInOffer 1s ease-in; animation-delay: 0.9s; animation-fill-mode: both;"><strong>Price:</strong> $${item.price}</div>`;
  output.innerHTML = html;
}

// Record a resolved item into stats (called after accept or re-roll)
function resolveItem(item) {
  const rarity = item.rarity;
  stats[rarity] = (stats[rarity] || 0) + 1;
  updateStats();
}

// Build and show the final summary screen
// Fades the terminal out over 1.5s, then after a brief black pause shows the summary overlay
function showSummary(rejected) {
  acceptBtn.disabled = true;
  rerollBtn.disabled = true;

  const totalValue = inventory.reduce((sum, item) => sum + item.price, 0);

  // Build summary HTML
  let html = `<div style="font-weight:bold; font-size:22px; color:#ffd700; margin-bottom:18px; letter-spacing:0.12em;">SESSION COMPLETE</div>`;

  // Stats breakdown
  html += `<div style="font-size:12px; color:#888; margin-bottom:4px; text-transform:uppercase; letter-spacing:0.15em;">— Rolls Summary —</div>`;
  html += `<div style="display:inline-flex; gap:20px; flex-wrap:wrap; justify-content:center; margin-bottom:14px;">`;
  for (let rarity in stats) {
    const color = rarityColors[rarity] || "#b19cd9";
    html += `<span style="font-size:12px; color:${color};">${rarity}: <strong>${stats[rarity]}</strong></span>`;
  }
  html += `</div>`;

  // Acquired items
  if (inventory.length > 0) {
    html += `<div style="font-size:12px; color:#888; margin-bottom:6px; text-transform:uppercase; letter-spacing:0.15em;">— Acquired —</div>`;
    inventory.forEach((item) => {
      const color = rarityColors[item.rarity] || "#b19cd9";
      html += `<div style="font-size:13px; color:${color}; margin-bottom:3px;">${item.name} <span style="color:#666;">$${item.price}</span></div>`;
    });
    html += `<div style="font-size:15px; color:#ffd700; margin-top:14px; border-top:1px solid #4a148c; padding-top:10px;">Total Value: <strong>$${totalValue.toFixed(2)}</strong></div>`;
  } else {
    html += `<div style="font-size:13px; color:#555; margin-top:10px;">Nothing acquired.</div>`;
  }

  if (rejected) {
    html += `<div style="font-size:11px; color:#444; margin-top:16px; letter-spacing:0.1em;">All offers rejected.</div>`;
  }

  // Drop rate disclosure
  html += `
    <div style="margin-top:24px; border-top:1px solid #1e1e2e; padding-top:16px;">
      <div style="font-size:10px; color:#555; text-transform:uppercase; letter-spacing:0.18em; margin-bottom:10px;">— drop rate disclosure —</div>
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:4px 24px; font-size:10px; max-width:320px; margin:0 auto; text-align:left;">
        <span style="color:#0066ff;">Mil-Spec</span>     <span style="color:#444;">79.92%</span>
        <span style="color:#9933ff;">Restricted</span>   <span style="color:#444;">15.98%</span>
        <span style="color:#ff1493;">Classified</span>   <span style="color:#444;"> 3.20%</span>
        <span style="color:#ff0000;">Covert</span>       <span style="color:#444;"> 0.64%</span>
        <span style="color:#ffd700;">Gloves</span>       <span style="color:#444;"> 0.26%</span>
      </div>
      <div style="font-size:9px; color:#333; margin-top:10px; letter-spacing:0.08em;">prices roll within tier ranges each session</div>
    </div>
  `;

  // Fade terminal to black, then reveal overlay
  terminal.classList.add("fading");
  setTimeout(() => {
    terminal.style.display = "none";
    summaryOverlay.innerHTML = html;
    summaryOverlay.style.display = "block";
  }, 1800);
}

// Initial show
showOffer();

// Re-roll / Decline button
rerollBtn.addEventListener("click", () => {
  hasInteracted = true;
  const resolved = offers[currentOfferIndex];
  resolveItem(resolved);

  if (currentOfferIndex < 5) {
    currentOfferIndex++;
    showOffer();
  } else {
    // Final offer declined - show summary
    showSummary(true);
  }
});

// Accept button
acceptBtn.addEventListener("click", () => {
  hasInteracted = true;
  const item = offers[currentOfferIndex];
  inventory.push(item);
  updateInventory();
  resolveItem(item);

  if (currentOfferIndex < 5) {
    currentOfferIndex++;
    showOffer();
  } else {
    // Final offer accepted - show summary
    showSummary();
  }
});

// Easter egg - type "gold" to get ohya image and guarantee gold next offer
let keySequence = "";
document.addEventListener("keydown", (e) => {
  keySequence += e.key.toLowerCase();
  if (keySequence.includes("gold")) {
    if (!easterEggActive) {
      easterEggActive = true;
      easterEgg.innerHTML =
        '<img src="low-poly/ohye_processed.bmp" alt="GOLD" style="filter: brightness(1.5) drop-shadow(0 0 10px #ffd700);">';
      easterEgg.style.display = "block";

      // Guarantee next offer is gold rarity
      if (currentOfferIndex < 5) {
        const eggItem = {
          name: "Hand Wraps | Destiny",
          rarity: "Gloves",
          priceMin: 400,
          priceMax: 1800,
          weight: 1,
          image: "gold - gloves_processed.bmp",
        };
        offers[currentOfferIndex + 1] = {
          ...eggItem,
          price: rollPrice(eggItem),
        };
      }

      // Hide easter egg after 2 seconds
      setTimeout(() => {
        easterEgg.style.display = "none";
        easterEggActive = false;
      }, 2000);
    }
    keySequence = "";
  }
  // Keep sequence manageable
  if (keySequence.length > 10) {
    keySequence = keySequence.slice(-10);
  }
});
