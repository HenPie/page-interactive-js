// Fonctionnalité 1
var myFooter = document.getElementsByTagName("footer");
let nbClic = 0;

var onClickFooter = function() {
  nbClic ++;
  console.log("clique numéro : ${nbClic}");
}

myFooter[0].addEventListener("click", onClickFooter);

// Fonctionnalité 2
let header = document.getElementsByTagName("header");

function menuToggle() {
  let menuBtn = document.getElementById("navbarHeader");
  menuBtn.classList.toggle("collapse");
}
header[0].addEventListener("click", menuToggle);

// Fonctionnalité 3
let firstCard = document.getElementsByClassName("col-md-4");
let btnEdit = document.getElementsByClassName("btn btn-sm btn-outline-secondary");
console.log(btnEdit[0]);

function redBtn() {
  firstCard[0].style.color = "red";
}

btnEdit[0].addEventListener("click", redBtn);

// Fonctionnalité 4
let secondCard = document.getElementsByClassName("col-md-4")[1];
let btnEdit2 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];
let btnStatus = false
console.log(btnEdit2);

function greenBtn() {
  if (btnStatus === true) {
    secondCard.style.color = "green";
    btnStatus = false;
  }
  else if (btnStatus === false) {
    secondCard.style.color = "";
    btnStatus = true;
  }
}

btnEdit2.addEventListener("click", greenBtn);

// Fonctionnalité 5
let headerStatus = document.styleSheets[0];
function dblClickHeader() {
  if (headerStatus.disabled === false) {
    headerStatus.disabled = true;
  } else {
    headerStatus.disabled = false
  }
}

header[0].addEventListener("dblclick", dblClickHeader);

// Fonctionnalité 6
let cardElts = document.getElementsByClassName("card");
for (let count = 0; count < cardElts.length; count++) {
  let cardTxt = cardElts[count].getElementsByClassName("card-text")[0];
  let cardImg = cardElts[count].getElementsByClassName("card-img-top")[0];
  console.log(cardImg);
  let btnView = cardElts[count].getElementsByClassName("btn btn-sm btn-success")[0];
    function smallView() {
      if (cardImg.style.width === "20%") {
        cardImg.style = "";
        cardTxt.classList.toggle("collapse");
      } else {
        cardImg.style.width = "20%";
        cardTxt.classList.toggle("collapse");
      }
    }
  btnView.addEventListener('mouseover', smallView);
}