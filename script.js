document.addEventListener("DOMContentLoaded", function () {
  const roastButton = document.getElementById("roastButton");
  const roastText = document.getElementById("roastText");
  const bgMusic = document.getElementById("bgMusic");

  
    const roastLines = [
  "muummy: ladka hua ya ladki doctor:Chakka hua hai🧬😵",
  "Tu itna boring hai, Netflix bhi tujhe 'Skip Intro' bol deta 📺⏩",
  "Tera sense of humor toh Windows 98 jaisa hai — outdated aur crash-prone 💾💥",
  "Tu vo typo hai jo autocorrect bhi ignore karta hai 🤖❌",
  "Jigyanshu, tu roast nahi, tohast hai 🤡"];

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
