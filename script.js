"use strict";

let sum = 0;

const priceTotal = document.querySelector(".total");

const cola = document.querySelector(".limeCola");
const peanuts = document.querySelector(".saltedPeanuts");
const choco = document.querySelector(".chocolateBar");
const gummies = document.querySelector(".fruitGummies");

cola.addEventListener("click", () => {
  (sum += 2), (priceTotal.textContent = `Total: $ ${sum}`);
});
peanuts.addEventListener("click", () => {
  (sum += 3), (priceTotal.textContent = `Total: $ ${sum}`);
});
choco.addEventListener("click", () => {
  (sum += 4), (priceTotal.textContent = `Total: $ ${sum}`);
});
gummies.addEventListener("click", () => {
  (sum += 6), (priceTotal.textContent = `Total: $ ${sum}`);
});

//make Money
// const changeJar = document.querySelector(".changeJar");

// let coinAmount = document.querySelector("#number");
// let coinChosen = document.querySelector("#coins");

// let newPenny = document.createElement("div");
// newPenny.textContent = "Penny";
// newPenny.setAttribute("class", "pennyImg");

// makeMoney.append(newPenny);

// moneyButton.addEventListener("click", () => {});

const changeForm = document.querySelector(".change-form");
const coinContainer = document.querySelector(".coin-container");

changeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const amount = document.querySelector("#amount").value;
  const type = document.querySelector("#type").value;
  for (let i = 0; i < amount; i++) {
    const newCoin = document.createElement("li");
    newCoin.classList.add("coin", type);
    newCoin.textContent = type;
    coinContainer.append(newCoin);
    newCoin.addEventListener("click", () => {
      newCoin.remove();
    });
  }
});
