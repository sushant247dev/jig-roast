document.addEventListener("DOMContentLoaded", function () {
  const roastButton = document.getElementById("roastButton");
  const roastText = document.getElementById("roastText");
  const bgMusic = document.getElementById("bgMusic");

  const hindiRoasts = [
    "Tere jaise toh school ke toilet mein bhi nahi milte.",
    "Tere IQ se zyada toh mere jute ke size hain.",
    "Tujhe dekhke toh WiFi bhi signal chhod deta hai.",
    "Tere jokes se zyada boring toh maths ka lecture hai.",
    "Teri DP dekh ke toh phone bhi hang ho gaya.",
    "Tu itna funny hai, ki log tujhe dekh ke rona chhod dete hain.",
    "Jigyanshu, tu roast nahi, tohast hai 🤡"
  ];

  roastButton.addEventListener("click", () => {
    // Play audio from 1:05
    if (bgMusic.paused) {
      bgMusic.currentTime = 65;
      bgMusic.play().catch(e => console.log("Autoplay blocked:", e));
    }

    // Show a random roast
    const randomRoast = hindiRoasts[Math.floor(Math.random() * hindiRoasts.length)];
    roastText.textContent = randomRoast;
  });
});
