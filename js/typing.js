// ===============================
// TYPEWRITER LETTER
// ===============================

const typing = document.getElementById("typing");

const letterText = `Hai Dwi Rahayu, Orang yang selalu kucinta❤️

Selamat ulang tahun ya...

Semoga di umurmu yang yang ke-23 ini, kamu selalu diberi kesehatan, kebahagiaan, dan semua impianmu bisa tercapai.

Terima kasih karena sudah hadir di hidupku.

Terima kasih sudah menjadi tempatku bercerita.

Terima kasih sudah bertahan sampai hari ini.

Aku mungkin bukan orang yang sempurna.

Aku masih sering melakukan kesalahan.

Kadang membuatmu kecewa.

Kadang membuatmu kesal.

Tapi percayalah...

Setiap hari aku selalu berusaha menjadi seseorang yang lebih baik untukmu.

Aku bersyukur dipertemukan dengan perempuan sebaik kamu.

Aku suka caramu tersenyum.

Aku suka caramu tertawa.

Aku suka semua hal kecil tentangmu.

Semoga nanti...

Masih ada banyak ulang tahun yang bisa kita rayakan bersama.

Masih ada banyak foto yang akan kita ambil bersama.

Masih ada banyak mimpi yang akan kita wujudkan bersama.

Dan...

Semoga orang yang menemanimu sampai tua nanti...

Tetap aku.

❤️

I Love You,
More Than Yesterday,
Less Than Tomorrow.

Happy Birthday My Love ❤️`;

let index = 0;
let typingStarted = false;

// ===============================
// OPTIONAL TYPING SOUND
// ===============================

const typeSound = new Audio("music/type.mp3");
typeSound.volume = 0.15;

// ===============================
// TYPE FUNCTION
// ===============================

function typeWriter() {
  if (index >= letterText.length) return;

  const char = letterText.charAt(index);

  typing.innerHTML += char === "\n" ? "<br>" : char;

  index++;

  if (char.trim() !== "") {
    typeSound.currentTime = 0;
    typeSound.play().catch(() => {});
  }

  let speed = 35;

  if (char === "." || char === "!" || char === "?") {
    speed = 500;
  }

  if (char === ",") {
    speed = 180;
  }

  if (char === "\n") {
    speed = 700;
  }

  setTimeout(typeWriter, speed);
}

// ===============================
// START WHEN LETTER APPEARS
// ===============================

const letterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !typingStarted) {
        typingStarted = true;

        typeWriter();
      }
    });
  },
  {
    threshold: 0.6,
  },
);

letterObserver.observe(document.getElementById("letter"));
