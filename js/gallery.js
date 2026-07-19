// =====================================
// GALLERY LIGHTBOX
// =====================================

const galleryImages = document.querySelectorAll(".gallery-container img");

const lightbox = document.createElement("div");
lightbox.id = "lightbox";

lightbox.innerHTML = `
    <span id="closeLightbox">&times;</span>

    <button id="prevPhoto">❮</button>

    <img id="lightboxImage">

    <button id="nextPhoto">❯</button>
`;

document.body.appendChild(lightbox);

const lightboxImage = document.getElementById("lightboxImage");
const closeLightbox = document.getElementById("closeLightbox");
const prevPhoto = document.getElementById("prevPhoto");
const nextPhoto = document.getElementById("nextPhoto");

let currentIndex = 0;

// =====================================
// OPEN
// =====================================

function openImage(index) {
  currentIndex = index;

  lightbox.style.display = "flex";

  setTimeout(() => {
    lightbox.classList.add("show");
  }, 10);

  lightboxImage.src = galleryImages[currentIndex].src;
}

// =====================================
// CLOSE
// =====================================

function closeImage() {
  lightbox.classList.remove("show");

  setTimeout(() => {
    lightbox.style.display = "none";
  }, 300);
}

// =====================================
// NEXT
// =====================================

function nextImage() {
  currentIndex++;

  if (currentIndex >= galleryImages.length) {
    currentIndex = 0;
  }

  lightboxImage.src = galleryImages[currentIndex].src;
}

// =====================================
// PREVIOUS
// =====================================

function prevImage() {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = galleryImages.length - 1;
  }

  lightboxImage.src = galleryImages[currentIndex].src;
}

// =====================================
// EVENT
// =====================================

galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    openImage(index);
  });
});

closeLightbox.onclick = closeImage;

nextPhoto.onclick = nextImage;

prevPhoto.onclick = prevImage;

// klik luar gambar
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    closeImage();
  }
});

// keyboard
document.addEventListener("keydown", (e) => {
  if (lightbox.style.display != "flex") return;

  if (e.key === "ArrowRight") nextImage();

  if (e.key === "ArrowLeft") prevImage();

  if (e.key === "Escape") closeImage();
});

// =====================================
// SWIPE HP
// =====================================

let startX = 0;

lightbox.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

lightbox.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;

  if (startX - endX > 60) {
    nextImage();
  }

  if (endX - startX > 60) {
    prevImage();
  }
});
