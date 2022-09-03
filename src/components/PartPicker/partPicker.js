console.log("JAVASCRIPT LOADED!!!");

const getData = async (id) => {
  const res = await fetch(`../../../data/${id}.json`);
  const data = await res.json();
  console.log("INSIDE ASYNC GET DATA", data);
  return data
};

const contentWrapper = document.getElementById("content-wrapper");

function makeCard(data) {
  // check for previous card and clear for new card
  if (document.getElementById("products-wrapper")) {
    document.getElementById("products-wrapper").outerHTML = "";
  }
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
    // console.log(data.products[i]);
    const productWrapper = document.createElement("div");
    productWrapper.classList += "product";
    const productTitle = document.createElement("p");
    if (data.title == "CPU") {
      productTitle.innerText = `${data.products[i].manufacturer} ${data.products[i].name}`;
    }
    if (data.title == "CPU Cooler") {
      productTitle.innerText = `${data.products[i].manufacturer} ${data.products[i].name}`;
    }
    if (data.title == "Motherboard") {
      productTitle.innerText = `${data.products[i].manufacturer} ${data.products[i].series} ${data.products[i].name} ${data.products[i].socket}`;
    }
    if (data.title == "GPU") {
      productTitle.innerText = `${data.products[i].manufacturer} ${data.products[i].chipset} ${data.products[i].memory} ${data.products[i].name}`;
    }
    productWrapper.append(productTitle);
    productWrapper.addEventListener("click", () => {
      //set selection on list
      let selectionWrapper = document.getElementById(
        `picker-${data.title.toLowerCase()}`
      );
      if (data.title == "CPU") {
        selectionWrapper.innerText = `${data.products[i].manufacturer} ${data.products[i].name}`;
      }
      if (data.title == "GPU") {
        selectionWrapper.innerText = `${data.products[i].manufacturer} ${data.products[i].chipset} ${data.products[i].memory} ${data.products[i].name}`;
      }
      if (data.title == "CPU Cooler") {
        selectionWrapper = document.getElementById("picker-cpu-cooler");
        selectionWrapper.innerText = `${data.products[i].manufacturer} ${data.products[i].name}`;
      }
      if (data.title == "Motherboard") {
        selectionWrapper.innerText = `${data.products[i].manufacturer} ${data.products[i].series} ${data.products[i].name} ${data.products[i].socket}`;
      }
      //set price on list
      let priceWrapper = document.getElementById(
        `${data.title.toLowerCase()}-price`
      );
      if (data.title == "CPU Cooler") {
        priceWrapper = document.getElementById(`cpu-cooler-price`);
      }
      priceWrapper.innerText = `$${data.products[i].price}`;

      function updatePriceTotal() {
        const totalPriceEl = document.getElementById("total-price");
        let totalPrice = 0;
        let prices = document.getElementsByClassName("component-price");
        for (let i = 0; i < prices.length; i++) {
          console.log(prices[i].innerText.slice(1));
          totalPrice += parseFloat(prices[i].innerText.slice(1));
        }
        totalPriceEl.innerText = `$${totalPrice.toFixed(2)}`;
      }
      updatePriceTotal();
    });
    productsList.append(productWrapper);
  }
  newCard.append(productsList);
  //testing
  contentWrapper.append(newCard);
  // contentWrapper.append(newCard);
  console.log("JSON:", data);
}
const cpuData = await getData("cpu");
const cpuCoolerData = await getData("cpu-cooler");
const motherboardData = await getData("motherboards");
const gpuData = await getData("gpu");
// const cpuData = await getCPUData("cpu");
// const cpuCoolerData = await getCPUCoolerData("cpu-cooler");
// const motherboardData = await getMotherboardData("motherboards");
// const gpuData = await getGPUData("gpu");
const cpuButton = document.getElementById("picker-cpu");
const cpuCoolerButton = document.getElementById("picker-cpu-cooler");
const motherboardButton = document.getElementById("picker-motherboard");
const gpuButton = document.getElementById("picker-gpu");

cpuButton.addEventListener("click", function (e) {
  makeCard(cpuData);
});

cpuCoolerButton.addEventListener("click", () => {
  makeCard(cpuCoolerData);
});

motherboardButton.addEventListener("click", () => {
  makeCard(motherboardData);
});

gpuButton.addEventListener("click", () => {
  makeCard(gpuData);
});
