//alert("hello");

// challenge 1 your age in year
function clickOnMe() {
  var dob = prompt("what is yours dob in formate m/d/y?");
  var time = new Date();
  var birthdate = new Date(dob);
  var yourYear = time.getFullYear() - birthdate.getFullYear();
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode("You are " + yourYear + " year Old");
  h1.setAttribute("id", "yourAge");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("yourAge").remove();
}

// challenge 2 generate doremon
function generateDoremon() {
  var image = document.createElement("img");
  var div = document.getElementById("flex-doremon");
  image.src =
    "https://media.tenor.com/images/66a17036414681a6071c680d70cbca7b/tenor.gif";
  div.appendChild(image);
}

// challenge 3 rock paper scissorse
function rpsFunction(yourChoice) {
  console.log(yourChoice);
  var humanChoice, computerChoice;
  humanChoice = yourChoice.id;
  computerChoice = randomFuction();
  // this both method are logic of clever programming youtube channel
  //score = decideWinnerMethod(humanChoice, computerChoice);
  //message = finalMessage([yourScore, computerScore]);
  messageinfo = decideWinner(humanChoice, computerChoice);
  rpsFrontEnd(humanChoice, computerChoice, messageinfo);
}

function randomFuction() {
  const rpsArray = ["rock", "paper", "scissors"];
  // Math.random get us an decimal format value to ignor that decimal we use math.floor
  const randomSelection = rpsArray[Math.floor(Math.random() * rpsArray.length)];
  return randomSelection;
}

/*function decideWinnerMethod(humanChoice, computerChoice) {
  //  the object is depend on the computer choice
  var rpsDataBase = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    scissors: { rock: 0, scissors: 0.5, paper: 1 },
    paper: { rock: 1, paper: 0.5, scissors: "0" },
  };
  var yourScore = rpsDataBase[humanChoice][computerChoice];
  var computerScore = rpsDataBase[computerChoice][humanChoice];
  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return { message: "--You Lost--", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "Match Draw", color: "yellow" };
  } else {
    return { message: "You Wom!!!!", color: "green" };
  }
}*/
// this is my logic
function decideWinner(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "scissors")
  ) {
    console.log("Match Draw");
    return { message: "Match Draw", color: "gold" };
  }
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("YOU WON!!!!");
    return { message: "You Won!!!!", color: "green" };
  }
  if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    console.log("-- YOU LOST--");
    return { message: "--You Lost--", color: "red" };
  }
}

function rpsFrontEnd(humanImageChoice, computerImageChoice, finalMessage) {
  // getting all imageses link
  var imageDatabase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };
  // remove all images form the container
  // where remove() is function
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  // create a div element
  var humanDiv = document.createElement("div");
  var computerDiv = document.createElement("div");
  var messageDiv = document.createElement("div");

  // get the human and computer selected image with message
  humanDiv.innerHTML =
    "<img src='" +
    imageDatabase[humanImageChoice] +
    "'  height=250 width=150 style = 'box-shadow: 0px 10px 50px orangered'/><span style='display:block;padding:20px;color:orangered'><h2>You</h2></span>";

  computerDiv.innerHTML =
    "<img src='" +
    imageDatabase[computerImageChoice] +
    "'  height=250 width=150 style = 'box-shadow: 0px 10px 50px blue'/><span style='display:block;padding:20px;color:blue'><h2>Computer</h2></span>";

  messageDiv.innerHTML =
    "<h1 style='color:" +
    finalMessage["color"] +
    "; font-size: 60px;padding:30px;'>" +
    finalMessage["message"] +
    "</h1>";
  // then append it to conatiner id
  document.getElementById("flex-rps-div").appendChild(humanDiv);
  document.getElementById("flex-rps-div").appendChild(messageDiv);
  document.getElementById("flex-rps-div").appendChild(computerDiv);
}

// Challenge 4: Change  the Color of All Button
var all_buttons = document.getElementsByTagName("button");
console.log(all_buttons);
var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++) {
  copyAllButtons.push(all_buttons[i].classList[1]);
}
console.log(copyAllButtons);

function butttonColorChange(buttonThingy) {
  if (buttonThingy.value === "red") {
    buttonsRed();
  } else if (buttonThingy.value === "green") {
    buttonsGreen();
  } else if (buttonThingy.value === "reset") {
    buttonsColorReset();
  } else if (buttonThingy.value === "random") {
    randomColors();
  }
}

function buttonsRed() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-danger");
  }
}

function buttonsGreen() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-success");
  }
}

function buttonsColorReset() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}

function randomColors() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(randomColorFunction());
  }
}

function randomColorFunction() {
  var colorArray = ["btn-primary", "btn-danger", "btn-warning", "btn-success"];
  // Math.random get us an decimal format value to ignor that decimal we use math.floor
  const randomSelection =
    colorArray[Math.floor(Math.random() * colorArray.length)];
  return randomSelection;
}

// Challenge 5 : Blackjack
let blackjackGame = {
  you: { scoreSpan: "#yourscore", div: "#yourbox", score: 0 },
  bot: { scoreSpan: "#botscore", div: "#computerbox", score: 0 },
  cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "K", "J", "Q", "A"],
  // this is the map where key value is card name and value is it score for every card
  // where K,J,Q is 10 value and A is 11 /1 and number cards is same value as there  card number
  cardValue: {
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    K: 10,
    J: 10,
    Q: 10,
    A: [1, 11],
  },
  wins: 0,
  losses: 0,
  draws: 0,
  isStand: false,
  isturnOver: false,
  isHit: false,
};

const YOU = blackjackGame["you"];
const COMPUTER = blackjackGame["bot"];

const hitSound = new Audio("static/sound/swish.m4a");
const winSound = new Audio("static/sound/cash.mp3");
const lossSound = new Audio("static/sound/aww.mp3");

// if somebody click that hit button the eventlistener will click and go to blackjackhit() method
// so we don't have to write a code in html like onclick()
// we can directly write it into javascript language
// click hit button
document
  .querySelector("#blackjack-hitButton")
  .addEventListener("click", blackjackHit);
// click deal button
document
  .querySelector("#blackjack-dealButton")
  .addEventListener("click", blackjackDeal);
// click stand button
document
  .querySelector("#blackjack-standButton")
  .addEventListener("click", computerLogic);

function blackjackHit() {
  if (blackjackGame["isStand"] === false) {
    blackjackGame["isHit"] = true;
    let card = randomCardFunction();
    showCard(card, YOU);
    updateSore(card, YOU);
    showScore(YOU);
  }
}

function showCard(card, activePlayer) {
  if (activePlayer["score"] <= 21) {
    let cardImage = document.createElement("img");
    cardImage.src = `static/images/${card}.png`;
    document.querySelector(activePlayer["div"]).appendChild(cardImage);
    hitSound.play();
  }
}

function randomCardFunction() {
  // Math.random get us an decimal format value to ignor that decimal we use math.floor
  const randomSelection =
    blackjackGame["cards"][
      Math.floor(Math.random() * blackjackGame["cards"].length)
    ];
  return randomSelection;
}

// when ever soem one click to deal button all the  cards images should go away

function blackjackDeal() {
  if (
    blackjackGame["isHit"] === true &&
    blackjackGame["isStand"] === true &&
    blackjackGame["isturnOver"] === true
  ) {
    blackjackGame["isHit"] = false;
    blackjackGame["isStand"] = false;
    // showResult(computeWinner());
    // this will gives us all the images form your box and dealer box
    let yourImages = document.querySelector("#yourbox").querySelectorAll("img");
    let dealerImages = document
      .querySelector("#computerbox")
      .querySelectorAll("img");

    for (i = 0; i < yourImages.length; i++) {
      yourImages[i].remove();
    }

    for (i = 0; i < dealerImages.length; i++) {
      dealerImages[i].remove();
    }
    YOU["score"] = 0;
    COMPUTER["score"] = 0;
    document.querySelector("#yourscore").textContent = 0;
    document.querySelector("#botscore").textContent = 0;
    document.querySelector("#yourscore").style.color = "white";
    document.querySelector("#botscore").style.color = "white";
    document.querySelector("#blackjack-result").textContent = "Let's Play";
    document.querySelector("#blackjack-result").style.color = "black";
  }
}
// to update the score whenever hit button click the card vale added to the actual score
// by passing the specific div box i.e you or bot and the card
function updateSore(card, activePlayer) {
  /*    if card is A then the value can be 11 or  1
   so if after adding 11 to the total score  if it less
  then or equal to 21 the allow to add 11 or else add 1 */
  if (card === "A") {
    if (activePlayer["score"] + blackjackGame["cardValue"][card][1] <= 21) {
      activePlayer["score"] += blackjackGame["cardValue"][card][1];
      console.log(activePlayer.score);
    } else {
      activePlayer["score"] += blackjackGame["cardValue"][card][0];
      console.log(activePlayer.score);
    }
  } else {
    // we have to add else keyword to avoid the score value to 01,11 bz it add he index value
    activePlayer["score"] += blackjackGame["cardValue"][card];
  }
}

function showScore(activePlayer) {
  if (activePlayer["score"] > 21) {
    document.querySelector(activePlayer["scoreSpan"]).textContent = "BUST!";
    document.querySelector(activePlayer["scoreSpan"]).style.color = "red";
  } else {
    document.querySelector(activePlayer["scoreSpan"]).textContent =
      activePlayer["score"];
  }
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function computerLogic() {
  if (blackjackGame["isHit"] === true) {
    blackjackGame["isStand"] = true;
    while (COMPUTER["score"] < 16 && blackjackGame["isStand"] === true) {
      let card = randomCardFunction();
      showCard(card, COMPUTER);
      updateSore(card, COMPUTER);
      showScore(COMPUTER);
      /* the awit operator is used to wait for a Promise
      It can be used inside an Async block only.The keyWord
      Await makes javascript wait until the promise return a result*/
      await sleep(1000);
    }

    blackjackGame["isturnOver"] = true;
    let winner = computeWinner();
    showResult(winner);
  }
}

function computeWinner() {
  let winner;
  // if your score is less then or equal to 21
  // then if your score is > then bot or bot bust mean score is >21
  // the you won
  if (YOU["score"] <= 21) {
    //if your score <=21 or computer score >21 mean computer bust
    // first we will look at the your wining chance
    if (YOU["score"] > COMPUTER["score"] || COMPUTER["score"] > 21) {
      console.log("you won!");
      winner = YOU;
      blackjackGame["wins"]++;
    } else if (YOU["score"] < COMPUTER["score"]) {
      // if your score is less then computer score then you lost
      console.log("You Lost!");
      winner = COMPUTER;
      blackjackGame["losses"]++;
    } else if (YOU["score"] === COMPUTER["score"]) {
      // your score is == to computer score the draw
      console.log("You drew!");
      blackjackGame["draws"]++;
    }
  } else if (YOU["score"] > 21 && COMPUTER["score"] <= 21) {
    // if you bust mean your score is > 21 and computer score <=21 then you loss
    console.log("You Lost!");
    winner = COMPUTER;
    blackjackGame["losses"]++;
  } else if (YOU["score"] > 21 && COMPUTER["score"] > 21) {
    // if both computer and you bust
    console.log("You drew!");
    blackjackGame["draws"]++;
  }
  console.log("winner is ", winner);
  return winner;
}

function showResult(winner) {
  if (blackjackGame["isturnOver"] === true) {
    let message, messageColor;

    if (winner === YOU) {
      message = "You Won!";
      messageColor = "green";
      winSound.play();
    } else if (winner === COMPUTER) {
      message = "You Lost!";
      messageColor = "red";
      lossSound.play();
    } else {
      message = "You Drew!";
      messageColor = "black";
    }
    document.querySelector("#blackjack-result").textContent = message;
    document.querySelector("#blackjack-result").style.color = messageColor;
    document.querySelector("#wins").textContent = blackjackGame["wins"];
    document.querySelector("#losses").textContent = blackjackGame["losses"];
    document.querySelector("#draws").textContent = blackjackGame["draws"];
  }
}
