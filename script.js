document.addEventListener("DOMContentLoaded", function () {
  const roastButton = document.getElementById("roastButton");
  const roastText = document.getElementById("roastText");
  const roastImage = document.getElementById("roastImage");
  const bgMusic = document.getElementById("bgMusic");
  const memeDance = document.getElementById("memeDance");
  const scoreDisplay = document.getElementById("score");

  const soundEffects = [
    document.getElementById("soundBruh"),
    document.getElementById("soundSlap"),
    document.getElementById("soundHorn")
  ];

  const chakkaRoast = "Muummy: Ladka hua ya ladki? Doctor: Chakka hua hai 🧬😵";

  const allRoasts = [
    chakkaRoast,
    "Tu itna boring hai, Netflix bhi tujhe 'Skip Intro' bol deta 📺⏩",
    "Tera sense of humor toh Windows 98 jaisa hai — outdated aur crash-prone 💾💥",
    "Tu vo typo hai jo autocorrect bhi ignore karta hai 🤖❌",
    "Jigyanshu, tu roast nahi, tohast hai 🤡",
    "Tu jitna slow hai, lagta hai dial-up se train karta hai 🚂📞",
    "Jigyanshu: Lagta hai download incomplete ho gaya tha 😂",
    "Tujhe dekhke lagta hai Photoshop bhi resign kar de 🎨🧼",
    "Tu vo bug hai jo developer fix karne se pehle hi burnout ho jaata hai 🐞🔥",
    "Tera existence ek April Fool’s joke lagta hai — har din 🤡📆",
    "Tere dimaag mein RAM kam aur virus zyada hai 🧠🦠",
    "Google bhi tujhe search nahi karta 🔍🚫",
    "Tu roast nahi, evolution ka April Fool hai 🐒💀"
  ];

  let unusedRoasts = allRoasts.slice(1);
  let roastCount = 0;
  let firstRoastDone = false;

  function typeRoast(text, el) {
    let i = 0;
    el.textContent = "";
    const interval = setInterval(() => {
      el.textContent += text.charAt(i);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 35);
  }

  roastButton.addEventListener("click", () => {
    roastCount++;

    // 🎵 Instant music playback
    if (bgMusic.paused) {
      bgMusic.currentTime = 65;
      bgMusic.volume = 1.0;
      bgMusic.play().catch(e => console.warn("Autoplay blocked:", e));
    }

    // 🎉 Confetti
    confetti({ particleCount: 100, spread: 90, origin: { y: 0.6 } });

    // 🔥 Get next roast
    let randomRoast = "";

    if (!firstRoastDone) {
      randomRoast = chakkaRoast;
      firstRoastDone = true;
    } else {
      if (unusedRoasts.length === 0) unusedRoasts = allRoasts.slice(1);
      const index = Math.floor(Math.random() * unusedRoasts.length);
      randomRoast = unusedRoasts.splice(index, 1)[0];
    }

    // 🔥 Animate roast text
    roastText.classList.remove("animate", "burning");
    void roastText.offsetWidth;
    roastText.classList.add("animate", "burning");

    // ✍️ Type roast
    typeRoast(randomRoast, roastText);

    // 🔁 Title blink
    const originalTitle = document.title;
    document.title = "🔥 Roasted Jigyanshu 🔥";
    setTimeout(() => document.title = originalTitle, 2000);

    // ⚡ Glitch effect
    roastImage.style.filter = "invert(1) hue-rotate(90deg)";
    roastImage.style.transform = "scale(1.2)";
    setTimeout(() => {
      roastImage.style.filter = "none";
      roastImage.style.transform = "scale(1)";
    }, 500);

    // 🔊 Meme sound
    const sound = soundEffects[Math.floor(Math.random() * soundEffects.length)];
    sound.currentTime = 0;
    sound.play();

    // 🕺 Meme dance gif
    memeDance.style.display = "block";
    setTimeout(() => {
      memeDance.style.display = "none";
    }, 3000);

    // 📈 Update roast score
    scoreDisplay.textContent = "Roast Level: " + roastCount;
  });
});
