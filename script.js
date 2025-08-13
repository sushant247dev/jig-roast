document.addEventListener("DOMContentLoaded", function () {
  const roastButton = document.getElementById("roastButton");
  const roastText = document.getElementById("roastText");
  const roastImage = document.getElementById("roastImage");
  const bgMusic = document.getElementById("bgMusic");
  const scoreDisplay = document.getElementById("score");

  const soundEffects = [
    document.getElementById("soundBruh"),
    document.getElementById("soundSlap"),
    document.getElementById("soundHorn")
  ];

  const chakkaRoast = "Mummy: Ladka hua ya ladki? Doctor: Chakka hua hai 🧬😵";

  const allRoasts = [
    chakkaRoast,
    "Jigyanshu, tu roast nahi, tohast hai 🤡",
    "Tu itna boring hai, Netflix bhi tujhe 'Skip Intro' bol deta 📺⏩",
    "Tera sense of humor toh Windows 98 jaisa hai — outdated aur crash-prone 💾💥",
    "Tu vo typo hai jo autocorrect bhi ignore karta hai 🤖❌",
    "Tujhe dekhke lagta hai Photoshop bhi resign kar de 🎨🧼"
  ];

  let unusedRoasts = allRoasts.slice(1); // skip chakka
  let firstRoastDone = false;
  let roastCount = 0;
  let typingInterval = null;
  let isTyping = false;

  function typeRoast(text, el) {
    if (isTyping && typingInterval) clearInterval(typingInterval);
    isTyping = true;

    let i = 0;
    el.textContent = "";

    typingInterval = setInterval(() => {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typingInterval);
        isTyping = false;
      }
    }, 35);
  }

  roastButton.addEventListener("click", () => {
    if (isTyping) return;

    // Get Roast
    let roastLine = "";

    if (!firstRoastDone) {
      roastLine = chakkaRoast;
      firstRoastDone = true;
    } else {
      if (unusedRoasts.length === 0) unusedRoasts = allRoasts.slice(1);
      const index = Math.floor(Math.random() * unusedRoasts.length);
      roastLine = unusedRoasts.splice(index, 1)[0];
    }

    // Roast Animation
    roastText.classList.remove("animate", "burning");
    void roastText.offsetWidth;
    roastText.classList.add("animate", "burning");
    typeRoast(roastLine, roastText);

    // Music
    if (bgMusic.paused) {
      bgMusic.currentTime = 65;
      bgMusic.volume = 0.1;
      bgMusic.play().then(() => {
        let vol = 0.1;
        const fade = setInterval(() => {
          if (vol < 1) {
            vol += 0.05;
            bgMusic.volume = Math.min(vol, 1);
          } else {
            clearInterval(fade);
          }
        }, 50);
      }).catch(e => console.warn("Autoplay blocked:", e));
    }

    // Confetti
    confetti({ particleCount: 100, spread: 90, origin: { y: 0.6 } });

    // Glitch image
    roastImage.style.filter = "invert(1) hue-rotate(90deg)";
    roastImage.style.transform = "scale(1.2)";
    setTimeout(() => {
      roastImage.style.filter = "none";
      roastImage.style.transform = "scale(1)";
    }, 500);

    // Sound
    const sound = soundEffects[Math.floor(Math.random() * soundEffects.length)];
    sound.currentTime = 0;
    sound.play();

    // Title change
    const originalTitle = document.title;
    document.title = "🔥 Roasted Jigyanshu 🔥";
    setTimeout(() => {
      document.title = originalTitle;
    }, 2000);

    // Update Score
    roastCount++;
    scoreDisplay.textContent = "Roast Level: " + roastCount;
  });
});

