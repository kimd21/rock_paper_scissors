function rotate() {
  //document.getElementById("player").style.transform = "rotate(-90deg)";
  //document.getElementById("computer").style.transform = "rotate(90deg) scaleX(-1)";
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
  document.getElementById("result").innerHTML = computeResult(pstr, cstr);
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
        else {res = "You win!";}
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
