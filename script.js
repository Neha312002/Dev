document.getElementById("home").style.display = "block";
let countdownInterval;
startCountdown();
function showBirthdayPage() {
  document.getElementById("home").style.display = "none";
  document.getElementById("birthdayPage").style.display = "block";
  startPhotoSlider();
  setTimeout(showWish, 14000);
  createHearts(20);
  let message =
    "You are one of the most amazing people in my life. Thank you for all the memories, the laughter, and your endless support. Here's to many more beautiful and memorable moments together Bevarsiii 🎉❤️";
  typeWriter(message, 0, 60);
  document.getElementById("birthdayMusic").play();
}

let photoIndex = 2; // start from 3rd image
const images = ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.JPG"];
const flipCardInner = document.getElementById("flipCardInner");
const frontImage = document.getElementById("sliderFrontImage");
const backImage = document.getElementById("sliderBackImage");

function startPhotoSlider() {
  setInterval(() => {
    // Flip card
    flipCardInner.classList.toggle("flipped");

    // After half flip (500ms), change back image src
    setTimeout(() => {
      if (flipCardInner.classList.contains("flipped")) {
        backImage.src = `assets/images/${images[photoIndex]}`;
      } else {
        frontImage.src = `assets/images/${images[photoIndex]}`;
      }

      // Move to next image
      photoIndex = (photoIndex + 1) % images.length;
    }, 500);
  }, 3000);
}

// Add flipped class CSS
const style = document.createElement("style");
style.innerHTML = `
  .flip-card-inner.flipped {
    transform: rotateY(180deg);
  }
`;
document.head.appendChild(style);

function showWish() {
  document.getElementById("happyWish").style.display = "block";
  confetti({ particleCount: 400, spread: 120, origin: { y: 0.6 } });
}

document.getElementById("cakeButton").addEventListener("click", function () {
  document.getElementById("cakeModal").style.display = "block";
  confetti({ particleCount: 300, spread: 100, origin: { y: 0.6 } });
});

document
  .getElementById("closeCakeModal")
  .addEventListener("click", function () {
    document.getElementById("cakeModal").style.display = "none";
  });

function showMemories() {
  document.getElementById("birthdayPage").style.display = "none";
  document.getElementById("memories").style.display = "block";
  confetti({ particleCount: 500, spread: 150, origin: { y: 0.6 } });
}

document.getElementById("closeMemories").addEventListener("click", function () {
  document.getElementById("memories").style.display = "none";
  document.getElementById("birthdayPage").style.display = "block";
});

function createHearts(count) {
  for (let i = 0; i < count; i++) {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 5 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
  }
}
function typeWriter(text, i, speed) {
  if (i < text.length) {
    document.getElementById("feelingsText").innerHTML += text.charAt(i);
    i++;
    setTimeout(() => typeWriter(text, i, speed), speed);
  }
}

function openBirthdayCard() {
  document.getElementById("birthdayCardModal").style.display = "block";
  confetti({
    particleCount: 300,
    spread: 120,
    origin: { y: 0.6 },
  });
}
function closeBirthdayCard() {
  document.getElementById("birthdayCardModal").style.display = "none";
}
// Lightbox functionality
const memoryCards = document.querySelectorAll(".memory-card img");
const lightboxModal = document.getElementById("lightboxModal");
const lightboxImage = document.getElementById("lightboxImage");

memoryCards.forEach((img) => {
  img.addEventListener("click", () => {
    lightboxModal.style.display = "block";
    lightboxImage.src = img.src;
  });
});

function closeLightbox() {
  lightboxModal.style.display = "none";
}
// function playVoiceMessage() {
//   const voice = document.getElementById("voiceMessage");
//   const voiceImage = document.getElementById("voicePlayingImage");

//   voice.play();
//   voiceImage.style.display = "block";

//   // Hide image when audio ends
//   voice.onended = () => {
//     voiceImage.style.display = "none";
//   };
// }
function playVoiceMessage() {
  const voice = document.getElementById("voiceMessage");
  const bgMusic = document.getElementById("birthdayMusic");
  const voiceImage = document.getElementById("voicePlayingImage");

  // Pause background music
  bgMusic.pause();

  // Reset and play voice message
  voice.pause();
  voice.currentTime = 0;
  voice.play();
  voiceImage.style.display = "block";

  // When voice message ends
  voice.onended = () => {
    bgMusic.play();
    voiceImage.style.display = "none";
  };
}

document.getElementById("secretHeart").addEventListener("click", function () {
  document.getElementById("secretModal").style.display = "block";
});
document
  .getElementById("closeSecretModal")
  .addEventListener("click", function () {
    document.getElementById("secretModal").style.display = "none";
  });
document.getElementById("secretStar").addEventListener("click", function () {
  document.getElementById("secretStarModal").style.display = "block";
});
document
  .getElementById("closeSecretStarModal")
  .addEventListener("click", function () {
    document.getElementById("secretStarModal").style.display = "none";
  });
document.getElementById("secretFlower").addEventListener("click", function () {
  document.getElementById("secretFlowerModal").style.display = "block";
});
document
  .getElementById("closeSecretFlowerModal")
  .addEventListener("click", function () {
    document.getElementById("secretFlowerModal").style.display = "none";
  });
// document.getElementById("giftBox").addEventListener("click", function () {
//   document.getElementById("giftBox").style.display = "none";
//   document.getElementById("giftModal").style.display = "block";
//   confetti({ particleCount: 200, spread: 120, origin: { y: 0.6 } });
// });
// document
//   .getElementById("closeGiftModal")
//   .addEventListener("click", function () {
//     document.getElementById("giftModal").style.display = "none";
//   });
// Declare it globally so you can clear it later

// function startCountdown() {
//   const countDownDate = new Date("July 06, 2025 00:00:00").getTime();
//   const timerElement = document.getElementById("timer");

//   const countdownInterval = setInterval(() => {
//     const now = new Date().getTime();
//     const distance = countDownDate - now;

//     if (distance < 0) {
//       clearInterval(countdownInterval);
//       timerElement.innerHTML = "🎉 It's time to celebrate! 🎂";

//       // // ✅ Automatically open the birthday page after 2 seconds
//       // setTimeout(showBirthdayPage, 4000);
//       setTimeout(() => {
//         document.getElementById("lightOnOverlay").style.display = "block";
//       }, 2000);

//       return;
//     }

//     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     const hours = Math.floor(
//       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );
//     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     timerElement.innerHTML = ` ${days}d ${hours}h ${minutes}m ${seconds}s`;
//   }, 1000);
// }
function startCountdown() {
  const countDownDate = new Date("July 13, 2025 00:00:00").getTime();
  const timerElement = document.getElementById("timer");

  countdownInterval = setInterval(() => {
    // <-- remove const here
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
      clearInterval(countdownInterval);
      timerElement.innerHTML = "🎉 It's time to celebrate! 🎂";

      setTimeout(() => {
        document.getElementById("lightOnOverlay").style.display = "block";
      }, 2000);

      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerElement.innerHTML = ` ${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}

 

// document.getElementById("skipCountdownButton").addEventListener("click", () => {
//   clearInterval(countdownInterval); // Stop the countdown
//   document.getElementById("countdown").style.display = "none";
//   document.getElementById("skipCountdownButton").style.display = "none";
//   showBirthdayPage();
// });
// document
//   .getElementById("turnLightOnButton")
//   .addEventListener("click", function () {
//     const lightSound = document.getElementById("lightSwitchSound");
//     lightSound.play();

//     // Start fading out overlay
//     const overlay = document.getElementById("lightOnOverlay");
//     overlay.style.transition = "opacity 1s ease";
//     overlay.style.opacity = 0;

//     // Show birthday page immediately
//     showBirthdayPage();

//     // Remove overlay after fade completes
//     setTimeout(() => {
//       overlay.style.display = "none";
//     }, 1000);
//   });
// document
//   .getElementById("turnLightOnButton")
//   .addEventListener("click", function () {
//     const lightSound = document.getElementById("lightSwitchSound");
//     lightSound.play();

//     // Show flash effect
//     const flash = document.getElementById("flashEffect");
//     flash.style.opacity = 1;

//     // Start fading out overlay
//     const overlay = document.getElementById("lightOnOverlay");
//     overlay.style.transition = "opacity 1s ease";
//     overlay.style.opacity = 0;

//     // After flash, hide it and show birthday page
//     setTimeout(() => {
//       flash.style.opacity = 0;
//       showBirthdayPage();
//       overlay.style.display = "none";
//     }, 800);

//     // Optional: burst confetti
//     confetti({
//       particleCount: 300,
//       spread: 150,
//       origin: { y: 0.5 },
//     });
//   });
document
  .getElementById("turnLightOnButton")
  .addEventListener("click", function () {
    const lightSound = document.getElementById("lightSwitchSound");
    lightSound.play();

    // Show flash effect
    const flash = document.getElementById("flashEffect");
    flash.style.opacity = 1;

    // Start fading out overlay
    const overlay = document.getElementById("lightOnOverlay");
    overlay.style.transition = "opacity 1s ease";
    overlay.style.opacity = 0;

    // After flash, hide overlay and flash, then show Oops page
    setTimeout(() => {
      flash.style.opacity = 0;
      overlay.style.display = "none";
      document.getElementById("oopsPage").style.display = "block";
    }, 800);

    // Optional: burst confetti
    confetti({
      particleCount: 300,
      spread: 150,
      origin: { y: 0.5 },
    });
  });
document.getElementById("proceedButton").addEventListener("click", function () {
  document.getElementById("oopsPage").style.display = "none";
  showBirthdayPage();
});
function createStars(count) {
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.top = Math.random() * window.innerHeight + "px";
    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.animationDuration = Math.random() * 3 + 1 + "s";
    document.body.appendChild(star);
  }
}

createStars(150); // Adjust star count here
