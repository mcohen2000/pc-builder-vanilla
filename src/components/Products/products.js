console.log("JAVASCRIPT LOADED!!!");

const getData = async (id) => {
  const res = await fetch(`../../../data/${id}.json`);
  const data = await res.json();
  // console.log("INSIDE ASYNC GET DATA", data);
  return data;
};
const contentWrapper = document.getElementById("content-wrapper");

function makeCard(data) {
  //make card
  const newCard = document.createElement("div");
  newCard.classList += "products-wrapper";
  const cardHeader = document.createElement("div");
  cardHeader.classList += "products-header";
  const cardTitle = document.createElement("h4");
  cardTitle.innerText = data.title;
  if (data.title == "RAM") {
    cardTitle.innerText = "Memory";
  }
  if (data.title == "GPU") {
    cardTitle.innerText = "Video Card";
  }
  if (data.title == "PSU") {
    cardTitle.innerText = "Power Supply";
  }
  const closeButton = document.createElement("button");
  closeButton.innerText = "-";
  closeButton.addEventListener("click", () => {
    let currentProducts = document.getElementsByClassName(
      `${data.title.toLowerCase()}Product`
    );
    if (data.title == "CPU Cooler") {
      currentProducts = document.getElementsByClassName(`cpuCoolerProduct`);
    }
    for (let i = 0; i < currentProducts.length; i++) {
      currentProducts[i].classList.toggle("hidden");
    }
  });
  cardHeader.append(cardTitle);
  cardHeader.append(closeButton);
  newCard.append(cardHeader);

  const productsList = document.createElement("div");
  productsList.classList += "products-list";
  // load options and append to newCard
  for (let i = 0; i < data.products.length; i++) {
    // console.log(data.products[i]);
    const productWrapper = document.createElement("div");
    productWrapper.classList += "product";
    if (data.title !== "CPU Cooler") {
      productWrapper.classList += ` ${data.title.toLowerCase()}Product`;
    }
    if (data.title == "CPU Cooler") {
      productWrapper.classList += ` cpuCoolerProduct`;
    }
    const productTitle = document.createElement("p");
    const productPrice = document.createElement("p");
    productPrice.classList += "productPrice";
    productPrice.innerText = `$${data.products[i].price}`;
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
    if (data.title == "PSU") {
      productTitle.innerText = `${data.products[i].manufacturer} ${data.products[i].name} ${data.products[i].wattage}W ${data.products[i].rating}`;
    }
    if (data.title == "RAM") {
      productTitle.innerText = `${data.products[i].manufacturer} ${data.products[i].name} ${data.products[i]["memory-config"]} ${data.products[i].type}-${data.products[i].speed}`;
    }
    if (data.title == "Storage") {
      productTitle.innerText = `${data.products[i].manufacturer} ${data.products[i].name} ${data.products[i].size} ${data.products[i].type}`;
    }
    if (data.title == "Case") {
      productTitle.innerText = `${data.products[i].manufacturer} ${data.products[i].name} ${data.products[i].type}`;
    }
    const productImage = document.createElement("img");
    productImage.src = `../../../assets/${data.products[i].img}.jpg`;
    productImage.classList += "productImage";
    productWrapper.append(productTitle);
    productWrapper.append(productImage);
    productWrapper.append(productPrice);

    // minimize lists on page load
    // productWrapper.classList.toggle("hidden");

    productsList.append(productWrapper);
  }
  newCard.append(productsList);
  contentWrapper.append(newCard);
}
const cpuData = await getData("cpu");
makeCard(cpuData);
const cpuCoolerData = await getData("cpu-cooler");
makeCard(cpuCoolerData);
const motherboardData = await getData("motherboards");
makeCard(motherboardData);
const gpuData = await getData("gpu");
makeCard(gpuData);
const psuData = await getData("psu");
makeCard(psuData);
const ramData = await getData("ram");
makeCard(ramData);
const storageData = await getData("storage");
makeCard(storageData);
const caseData = await getData("case");
makeCard(caseData);
