let PlayerChoose = document.querySelectorAll(".playerChoose");
let PlearC = 0;
let PlearT = "";
let Choser = document.querySelector(".choser");
let Play = document.querySelector(".play");
let player = document.querySelector(".player");
let compeoter = document.querySelector(".compeoter");
let nomper = ["rock", "paper", "scissors"];
let aeche = Math.floor(Math.random() * 3);
let H = document.querySelector(".result h2");
let score = document.querySelector(".score span");
let scoreNom = 0;

PlayerChoose.forEach((element) => {
  element.addEventListener("click", function torngame() {
    PlearT = element.dataset.type;
    PlearC = this.dataset.score;
    Choser.style.display = "none";
    Play.style.display = "flex";
    setTimeout(() => {
      player.innerHTML = `
        <h2>you picked</h2>
        <img class=${PlearT} src="./images/icon-${PlearT}.svg" alt="">
    `;
    }, 0);
    let N = 0;
    let intervalID = setInterval(() => {
      if (N === 0) {
        compeoter.innerHTML = `
        <h2>compeoter picked</h2>
        <img class="rock" src="./images/icon-rock.svg" alt="">
    `;
      } else if (N === 1) {
        compeoter.innerHTML = `
        <h2>compeoter picked</h2>
        <img class="paper" src="./images/icon-paper.svg" alt="">
    `;
      } else if (N === 2) {
        compeoter.innerHTML = `
        <h2>compeoter picked</h2>
        <img class="scissors" src="./images/icon-scissors.svg" alt="">
    `;
      } else {
        N = -1;
      }
      N += 1;
    }, 100);
    setTimeout(() => {
      clearInterval(intervalID);
      compeoter.innerHTML = `
        <h2>compeoter picked</h2>
        <img class=${nomper[aeche]} src="./images/icon-${nomper[aeche]}.svg" alt="">
    `;
    }, 3000);
    setTimeout(() => {
      if (+PlearC == 2 && +aeche == 0) {
        aeche = 3;
      } else if (+aeche == 2 && +PlearC == 0) {
        PlearC = 3;
      }
      console.log(aeche);
      if (PlearC > aeche) {
        H.append("you win");
        score.innerHTML = scoreNom += 1;
      } else if (PlearC == aeche) {
        H.append("tadol");
      } else {
        H.append("compeoter win");
      }
    }, 4000);
  });
});
