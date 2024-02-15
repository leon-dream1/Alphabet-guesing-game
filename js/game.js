function generateRandomAlphabet() {
  const allAlphabetString = "abcdefghijklmnopqrstuvwxyz";

  const allAlphabetArray = allAlphabetString.split("");

  const index = Math.round(Math.random() * 25);
  return allAlphabetArray[index];
}

function setBackGroundKey(id) {
  document.getElementById(id).style.background = "#FFA500";
  document.getElementById(id).style.borderRadius = "10px";
}

function removeBackGroundKey(id) {
  document.getElementById(id).style.background = "";
  document.getElementById(id).style.borderRadius = "";
}

function updateLifeOrScore(id, value) {
  const score = parseInt(document.getElementById(id).innerText);
  return score + value;
}

document.addEventListener("keyup", function (e) {
  const generatedAlphabet =
    document.getElementById("artBoard-alphabet").innerText;

  if (generatedAlphabet.toLowerCase() === e.key) {
    const score = updateLifeOrScore("score", 1);
    document.getElementById("score").innerText = score;
    removeBackGroundKey(generatedAlphabet.toLowerCase());
    continueGame();
  } else {
    const remainingLife = updateLifeOrScore("life", -1);
    document.getElementById("life").innerText = remainingLife;
  }

  const life = parseInt(document.getElementById("life").innerText);
  if (life === 0) {
    removeFromGame();
    removeBackGroundKey(generatedAlphabet.toLowerCase());
  }
});

function continueGame() {
  let generatedAlphabet = generateRandomAlphabet();
  document.getElementById("artBoard-alphabet").innerText = generatedAlphabet;
  setBackGroundKey(generatedAlphabet);
}

function startGame() {
  document.getElementById("play-now-section").classList.add("hidden");
  document.getElementById("playground-section").classList.remove("hidden");
  continueGame();
}

document.addEventListener("keyup", function (e) {
  console.log(e.key);
  if (e.key === "Enter") {
    restartGame();
  }
  if (e.key === "Escape") {
    removeFromGame();
  }
});

function removeFromGame() {
  document.getElementById("playground-section").classList.add("hidden");
  document.getElementById("final-score").classList.remove("hidden");
  const finalScore = document.getElementById("score").innerText;
  document.getElementById("ultimate-score").innerText = finalScore;
  const generatedAlphabet = document.getElementById("artBoard-alphabet").innerText;
  removeBackGroundKey(generatedAlphabet.toLowerCase());

}

function restartGame() {
  document.getElementById("final-score").classList.add("hidden");
  document.getElementById("play-now-section").classList.add("hidden");
  document.getElementById("playground-section").classList.remove("hidden");
  document.getElementById("life").innerText = "5";
  document.getElementById("score").innerText = "0";
  continueGame();
}
