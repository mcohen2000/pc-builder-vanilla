console.log("JAVASCRIPT LOADED!!!");
import cpuData from "../../../data/cpu.json" assert { type: "json" };
import motherboardData from "../../../data/motherboards.json" assert { type: "json" };
const contentWrapper = document.getElementById("content-wrapper");

function makeCard(data) {
  const newCard = document.createElement("div");
  newCard.id = "products-wrapper";
  const cardTitle = document.createElement("h4");
  cardTitle.innerText = data.title;
  const closeButton = document.createElement("button");
  closeButton.innerText = "x";
  closeButton.addEventListener("click", () => {
    newCard.outerHTML = "";
  });
  newCard.append(cardTitle);
  newCard.append(closeButton);

  // load options and append to newCard

  contentWrapper.append(newCard);
  console.log("JSON:", data);
}
// const makeCard = (data) => {
//     // const newCard = document.createElement('div');
//     console.log("JSON:", data)
// }

// dom elements
const cpuButton = document.getElementById("picker-cpu");
cpuButton.addEventListener("click", () => {
  if (document.getElementById("products-wrapper")) {
    document.getElementById("products-wrapper").outerHTML = "";
  }
  makeCard(cpuData);
});

const cpuCoolerButton = document.getElementById("picker-cpu-cooler");
cpuCoolerButton.addEventListener("click", () => {
  if (document.getElementById("products-wrapper")) {
    document.getElementById("products-wrapper").outerHTML = "";
  }
});

const motherboardButton = document.getElementById("picker-motherboard");
motherboardButton.addEventListener("click", () => {
  if (document.getElementById("products-wrapper")) {
    document.getElementById("products-wrapper").outerHTML = "";
  }
  makeCard(motherboardData);
});
