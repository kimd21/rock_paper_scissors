var res = '';
var playerWinCount = 0;
var computerWinCount = 0;
function winCountSet() {
  document.querySelector("#pwincnt").innerHTML = playerWinCount;
  document.querySelector("#cwincnt").innerHTML = computerWinCount;
}

function playGame() {
  let pstr = event.target.innerHTML;
  let cstr = computerPlay();
  switch (pstr) {
    case "Rock":
      document.getElementById("player").firstChild.src = "images/rock.png";
      break;
    case "Paper":
      document.getElementById("player").firstChild.src = "images/paper.png";
      break;
    default:
      document.getElementById("player").firstChild.src = "images/scissors.png";
  }

  switch (cstr) {
    case "Rock":
      document.getElementById("computer").firstChild.src = "images/rock.png";
      break;
    case "Paper":
      document.getElementById("computer").firstChild.src = "images/paper.png";
      break;
    default:
      document.getElementById("computer").firstChild.src = "images/scissors.png";
  }
  res = computeResult(pstr, cstr);
  if (res === "You lose :(") {computerWinCount++;}
  if (res === "You win!") {playerWinCount++;}

  document.getElementById("result").innerHTML = res;
  document.querySelector("#pwincnt").innerHTML = playerWinCount;
  document.querySelector("#cwincnt").innerHTML = computerWinCount;

  if (playerWinCount === 5) {
    document.getElementById("result").innerHTML = "You Won the Match!!!";
    playerWinCount = 0;
    computerWinCount = 0;
  }
  if (computerWinCount === 5) {
    document.getElementById("result").innerHTML = "You Lost the Match!!!";
    playerWinCount = 0;
    computerWinCount = 0;
  }
}



function computerPlay() {
  let set = ["Rock", "Paper", "Scissors"];
  let idx = Math.floor(Math.random() * set.length);
  return set[idx];
}

function computeResult(pstr, cstr) {
  let res = "";
  if (pstr === cstr) {
    res = "You tied, try again.";
  }
  else {
    if (pstr === "Rock") {
        if (cstr === "Paper") {res = "You lose :(";}
        else {res = "You win!"; }
    }
    else if (pstr === "Paper") {
        if (cstr === "Scissors") {res = "You lose :(";}
        else {res = "You win!";}
    }
    else {
        if (cstr === "Rock") {res = "You lose :(";}
        else {res = "You win!";}
    }
  }
  return res;
}


