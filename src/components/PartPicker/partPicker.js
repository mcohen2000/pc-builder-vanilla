console.log("JAVASCRIPT LOADED!!!");
import cpuData from "../../../data/cpu.json" assert { type: "json" };
import motherboardData from "../../../data/motherboards.json" assert { type: "json" };
const contentWrapper = document.getElementById("content-wrapper");

function makeCard(data) {
  //make card
  const newCard = document.createElement("div");
  newCard.id = "products-wrapper";
  const cardHeader = document.createElement("div");
  cardHeader.id = "products-header";
  const cardTitle = document.createElement("h4");
  cardTitle.innerText = data.title;
  const closeButton = document.createElement("button");
  closeButton.innerText = "x";
  closeButton.addEventListener("click", () => {
    newCard.outerHTML = "";
  });
  cardHeader.append(cardTitle);
  cardHeader.append(closeButton);
  newCard.append(cardHeader);
  
  const productsList = document.createElement("div");
  productsList.id = "products-list";
  // load options and append to newCard
  for (let i = 0; i < data.products.length; i++) {
    console.log(data.products[i]);
    const productWrapper = document.createElement("div");
    productWrapper.classList += "product";
    const productTitle = document.createElement("p");
    productTitle.innerText = `${data.products[i].manufacturer} ${data.products[i].name}`;
    productWrapper.append(productTitle);
    productWrapper.addEventListener("click", () => {
      const selectionWrapper = document.getElementById(`${data.title.toLowerCase()}-selection`);
      selectionWrapper.innerText = `${data.products[i].manufacturer} ${data.products[i].name}`;
    })
    productsList.append(productWrapper);
  }
  newCard.append(productsList);

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
