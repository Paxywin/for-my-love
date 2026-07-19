// ===========================
// ELEMENT
// ===========================

const loading = document.getElementById("loading");
const startBtn = document.getElementById("startBtn");
const envelope = document.getElementById("envelope");
const envelopeSection = document.getElementById("envelopeSection");
const letter = document.getElementById("letter");
const bgm = document.getElementById("bgm");
const hugBtn = document.getElementById("hugBtn");
const quizResult = document.getElementById("quizResult");
const answers = document.querySelectorAll(".answer");
const loveTime = document.getElementById("loveTime");
const timelineItems = document.querySelectorAll(".timeline-item");

let opened = false;

// ===========================
// LOADING
// ===========================

window.addEventListener("load", () => {
  setTimeout(() => {
    loading.style.opacity = "0";
    loading.style.pointerEvents = "none";

    setTimeout(() => {
      loading.style.display = "none";
    }, 600);
  }, 1800);
});

// ===========================
// START
// ===========================

startBtn.addEventListener("click", () => {
  envelopeSection.scrollIntoView({
    behavior: "smooth",
  });
});

// ===========================
// MUSIC FADE IN
// ===========================

function playMusic() {
  bgm.volume = 0;

  bgm.play();

  let volume = 0;

  const fade = setInterval(() => {
    volume += 0.05;

    if (volume >= 1) {
      volume = 1;
      clearInterval(fade);
    }

    bgm.volume = volume;
  }, 200);
}

// ===========================
// OPEN LETTER
// ===========================

function openLetter() {
  if (opened) return;

  opened = true;

  envelope.style.transform = "scale(1.15)";

  setTimeout(() => {
    envelope.src = "images/envelope-open.png";
  }, 250);

  playMusic();

  setTimeout(() => {
    letter.scrollIntoView({
      behavior: "smooth",
    });
  }, 1000);
}

envelope.addEventListener("click", openLetter);

// ===========================
// TIMELINE ANIMATION
// ===========================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.3,
  },
);

timelineItems.forEach((item) => {
  observer.observe(item);
});

// ===========================
// LOVE COUNTER
// ===========================

// GANTI TANGGAL JADIAN KALIAN
const startDate = new Date("2026-01-28T20:00:00");

function updateCounter() {
  const now = new Date();

  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;

  const minutes = Math.floor(diff / (1000 * 60)) % 60;

  const seconds = Math.floor(diff / 1000) % 60;

  loveTime.innerHTML = `${days} Hari <br>
         ${hours} Jam ${minutes} Menit ${seconds} Detik`;
}

updateCounter();

setInterval(updateCounter, 1000);

// ===========================
// QUIZ
// ===========================

answers.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("correct")) {
      quizResult.innerHTML = "❤️ Yeay! betul sayanggg ❤️";
      quizResult.style.color = "#E85D75";

      createHearts(30);
    } else {
      quizResult.innerHTML = "🙈 Salah wleee, Hehe... coba lagi ya.";
      quizResult.style.color = "#555";
    }
  });
});

// ===========================
// HEART EFFECT
// ===========================

function createHearts(total) {
  for (let i = 0; i < total; i++) {
    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.top = "100vh";

    heart.style.fontSize = 18 + Math.random() * 30 + "px";

    heart.style.animationDuration = 2 + Math.random() * 2 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }
}

// ===========================
// HUG BUTTON
// ===========================

hugBtn.addEventListener("click", () => {
  createHearts(120);

  setTimeout(() => {
    alert("🤗\n\nVirtual Hug\n\nI Love You ❤️");
  }, 800);
});
