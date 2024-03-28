// selecting all reuired elements
const SelctBox = document.querySelector(".select-box"),
  SelctXBtn = SelctBox.querySelector(".playerX"),
  SelctOBtn = SelctBox.querySelector(".playerO"),
  playerBoard = document.querySelector(".play-board"),
  allBox = document.querySelectorAll("section span"),
  players = document.querySelector(".players"),
  resultBox = document.querySelector(".result-box"),
  wonText = resultBox.querySelector(".won-text"),
  replatBtn = resultBox.querySelector("button");

window.onload = () => {
  // once window loaded
  for (let i = 0; i < allBox.length; i++) {
    // add onclick atreprots in all
    allBox[i].setAttribute("onclick", "clickedBox(this)");
  }
  SelctXBtn.onclick = () => {
    SelctBox.classList.add("hide"); //hide the slector
    playerBoard.classList.add("show"); // show the playbord
  };
  SelctOBtn.onclick = () => {
    SelctBox.classList.add("hide"); //hide the slector
    playerBoard.classList.add("show"); // show the playbord
    players.setAttribute("class", "players active player");
  };
};

let playerXIcon = "X";
let playerOIcon = "O";
let playerSign = "X";
let runBot = true;

// user click function
function clickedBox(element) {
  if (players.classList.contains("player")) {
    element.innerHTML = `<i > ${playerOIcon} </i>`;
    players.classList.add("active");
    //
    playerSign = "O";
    element.setAttribute("id", playerSign);
  } else {
    element.innerHTML = `<i > ${playerXIcon} </i>`;
    players.classList.add("active");
    element.setAttribute("id", playerSign);
  }
  selectWinner();
  players.style.pointerEvents = "none"; // to stop select ane wen weneeer
  element.style.pointerEvents = "none";
  let randomDelayTime = (Math.random() * 1000 + 200).toFixed();

  setTimeout(() => {
    bot(runBot);
  }, randomDelayTime);
}

// bot click function
function bot(runBot) {
  if (runBot) {
    playerSign = "O";
    let array = [];
    for (let i = 0; i < allBox.length; i++) {
      if (allBox[i].childElementCount == 0) {
        array.push(i);
      }
    }
    let randomBox = array[Math.floor(Math.random() * array.length)];
    if (array.length > 0) {
      if (players.classList.contains("player")) {
        allBox[randomBox].innerHTML = `<i > ${playerXIcon} </i>`;
        players.classList.remove("active");
        //
        playerSign = "X";
        allBox[randomBox].setAttribute("id", playerSign);
      } else {
        allBox[randomBox].innerHTML = `<i > ${playerOIcon} </i>`;
        players.classList.remove("active");
        //
        allBox[randomBox].setAttribute("id", playerSign);
      }
      selectWinner();
    }
    allBox[randomBox].style.pointerEvents = "none";
    players.style.pointerEvents = "auto"; // to stop select ane wen weneeer
    playerSign = "X";
  }
}

// how the winner
function getClass(idname) {
  return document.querySelector(".box" + idname).id;
}
function checkClasses(val1, val2, val3, sign) {
  if (
    getClass(val1) == sign &&
    getClass(val2) == sign &&
    getClass(val3) == sign
  ) {
    return true;
  }
}
function selectWinner() {
  if (
    checkClasses(1, 2, 3, playerSign) ||
    checkClasses(4, 5, 6, playerSign) ||
    checkClasses(7, 8, 9, playerSign) ||
    checkClasses(1, 4, 7, playerSign) ||
    checkClasses(2, 5, 8, playerSign) ||
    checkClasses(3, 6, 9, playerSign) ||
    checkClasses(1, 5, 9, playerSign) ||
    checkClasses(3, 5, 7, playerSign)
  ) {
    runBot = false;
    bot(runBot);
    setTimeout(() => {
      playerBoard.classList.remove("show");
      resultBox.classList.add("show");
    }, 700);
    wonText.innerHTML = `player <p> ${playerSign} </p> won the game!`;
  } else {
    if (
      getClass(1) != "" &&
      getClass(2) != "" &&
      getClass(3) != "" &&
      getClass(4) != "" &&
      getClass(5) != "" &&
      getClass(6) != "" &&
      getClass(7) != "" &&
      getClass(8) != "" &&
      getClass(9) != ""
    ) {
      runBot = false;
      bot(runBot);
      setTimeout(() => {
        playerBoard.classList.remove("show");
        resultBox.classList.add("show");
      }, 700);
      wonText.innerHTML = `Match Has Been Drawn !`;
    }
  }
}

replatBtn.onclick = () => {
  window.location.reload();
};
