// PAGE NAVIGATION

function goToPage(pageNumber) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById("page" + pageNumber).classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// BACKGROUND FLOATING HEARTS

const background = document.getElementById("backgroundHearts");

const backgroundSymbols = ["💕", "💗", "💖", "🌸", "✨"];

for (let i = 0; i < 25; i++) {
  const heart = document.createElement("div");

  heart.className = "bg-heart";
  heart.innerText = backgroundSymbols[
    Math.floor(Math.random() * backgroundSymbols.length)
  ];

  heart.style.left = Math.random() * 100 + "%";
  heart.style.fontSize = (15 + Math.random() * 20) + "px";
  heart.style.animationDuration = (9 + Math.random() * 12) + "s";
  heart.style.animationDelay = (Math.random() * 10) + "s";

  background.appendChild(heart);
}


// LOVE TREE HEARTS

const tree = document.getElementById("treeCrown");

const heartColors = [
  "#ff6fa8",
  "#ff91bd",
  "#d98bff",
  "#b68cff",
  "#ffd166",
  "#ffb347",
  "#ff83a8",
  "#c77dff"
];

function createHeart(x, y, size, color, delay) {
  const heart = document.createElement("div");

  heart.className = "tree-heart";
  heart.innerText = "♥";

  heart.style.left = x + "%";
  heart.style.top = y + "%";
  heart.style.fontSize = size + "px";
  heart.style.color = color;
  heart.style.animationDelay = delay + "s";

  tree.appendChild(heart);
}


// Fill the entire crown densely with hearts

for (let i = 0; i < 520; i++) {
  const angle = Math.random() * Math.PI * 2;
  const radius = Math.sqrt(Math.random());

  const x = 50 + Math.cos(angle) * radius * 47;
  const y = 50 + Math.sin(angle) * radius * 43;

  const size = 25 + Math.random() * 19;
  const color = heartColors[
    Math.floor(Math.random() * heartColors.length)
  ];

  createHeart(
    x,
    y,
    size,
    color,
    Math.random() * 3
  );
}


// Extra outer hearts for a fuller crown

for (let i = 0; i < 100; i++) {
  const angle = Math.random() * Math.PI * 2;

  const x = 50 + Math.cos(angle) * (39 + Math.random() * 10);
  const y = 50 + Math.sin(angle) * (34 + Math.random() * 9);

  createHeart(
    x,
    y,
    28 + Math.random() * 18,
    heartColors[Math.floor(Math.random() * heartColors.length)],
    Math.random() * 2
  );
}


// Branch and trunk hearts

for (let i = 0; i < 45; i++) {
  const x = 25 + Math.random() * 50;
  const y = 70 + Math.random() * 25;

  createHeart(
    x,
    y,
    25 + Math.random() * 12,
    heartColors[Math.floor(Math.random() * heartColors.length)],
    Math.random() * 2
  );
}


// SORRY NOTES HANGING FROM THE TREE

const sorryMessages = [
  "I'm Sorry ❤️",
  "Please Forgive Me 🌸",
  "I Truly Care 💗",
  "Stay Happy 🦋",
  "You Matter 🌷",
  "My Apologies 💕",
  "Keep Smiling ✨",
  "Take Care ❤️",
  "I'm Really Sorry 🥺",
  "Sending Love 🌸"
];

for (let i = 0; i < 13; i++) {
  const note = document.createElement("div");

  note.className = "sorry-note";
  note.innerText = sorryMessages[i % sorryMessages.length];

  const x = 12 + Math.random() * 76;
  const y = 20 + Math.random() * 45;

  note.style.left = x + "%";
  note.style.top = y + "%";
  note.style.animationDelay = Math.random() * 2 + "s";

  const string = document.createElement("div");
  string.className = "sorry-string";

  note.appendChild(string);
  tree.appendChild(note);
}


// FLOWER GARDEN

const flowerGarden = document.getElementById("flowerGarden");
const flowerMessage = document.getElementById("flowerMessage");

const flowers = [
  {
    icon: "🌸",
    message: "A little flower to remind you that you deserve happiness. ❤️"
  },
  {
    icon: "🌷",
    message: "I hope your days are always filled with beautiful moments. 🌷"
  },
  {
    icon: "🌼",
    message: "Never stop smiling. Your smile makes the world brighter. 💛"
  },
  {
    icon: "🌺",
    message: "Sending you a little warmth and lots of good wishes. 💗"
  },
  {
    icon: "💐",
    message: "You deserve all the beautiful things life has to offer. 🥰"
  },
  {
    icon: "🪻",
    message: "May your heart always find peace and happiness. 💜"
  },
  {
    icon: "🌻",
    message: "Keep shining, keep growing and always believe in yourself. ☀️"
  },
  {
    icon: "🌹",
    message: "Some people make ordinary moments special. Thank you for that. ❤️"
  }
];

flowers.forEach((flower, index) => {
  const element = document.createElement("div");

  element.className = "garden-flower";
  element.innerText = flower.icon;

  element.style.animationDelay = (index * 0.2) + "s";

  element.addEventListener("click", () => {
    flowerMessage.innerText = flower.message;
  });

  flowerGarden.appendChild(element);
});


// SPECIAL LILY FLOWER

const lily = document.createElement("div");

lily.className = "garden-flower special";
lily.innerText = "🌸";

lily.addEventListener("click", () => {
  flowerMessage.innerText =
    "Lily, this special flower is just for you. I hope you always stay happy, peaceful and keep smiling. You deserve the best. ❤️🌸";
});

flowerGarden.appendChild(lily);


// FINAL LETTER

function openLetter() {
  document.getElementById("letterOverlay").classList.add("show");
  document.body.style.overflow = "hidden";
}

function closeLetter() {
  document.getElementById("letterOverlay").classList.remove("show");
  document.body.style.overflow = "auto";
}


// Close letter by clicking outside

document.getElementById("letterOverlay").addEventListener("click", function(event) {
  if (event.target === this) {
    closeLetter();
  }
});


// ESCAPE KEY TO CLOSE LETTER

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeLetter();
  }
});
