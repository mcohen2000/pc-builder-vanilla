console.log("JAVASCRIPT LOADED!!!");
const currentParts = {
  name: "",
  cpu: "",
  "cpu-cooler": "",
  motherboard: "",
  gpu: "",
  "total-price": "",
};
const getData = async (id) => {
  const res = await fetch(`../../../data/${id}.json`);
  const data = await res.json();
  // console.log("INSIDE ASYNC GET DATA", data);
  return data;
};
function updatePriceTotal() {
  const totalPriceEl = document.getElementById("total-price");
  let totalPrice = 0;
  let prices = document.getElementsByClassName("component-price");
  for (let i = 0; i < prices.length; i++) {
    console.log(prices[i].innerText.slice(1));
    totalPrice += parseFloat(prices[i].innerText.slice(1));
  }
  totalPriceEl.innerText = `$${totalPrice.toFixed(2)} + tax`;
  currentParts["total-price"] = totalPrice.toFixed(2);
}
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

    productWrapper.append(productTitle);
    productWrapper.append(productPrice);
    productWrapper.addEventListener("click", () => {
      //set selection on list
      let selectionWrapper = document.getElementById(
        `picker-${data.title.toLowerCase()}`
      );
      if (data.title == "CPU") {
        selectionWrapper.innerText = `${data.products[i].manufacturer} ${data.products[i].name}`;
        currentParts.cpu = data.products[i];
      }
      if (data.title == "GPU") {
        selectionWrapper.innerText = `${data.products[i].manufacturer} ${data.products[i].chipset} ${data.products[i].memory} ${data.products[i].name}`;
        currentParts.gpu = data.products[i];
      }
      if (data.title == "CPU Cooler") {
        selectionWrapper = document.getElementById("picker-cpu-cooler");
        selectionWrapper.innerText = `${data.products[i].manufacturer} ${data.products[i].name}`;
        currentParts["cpu-cooler"] = data.products[i];
      }
      if (data.title == "Motherboard") {
        selectionWrapper.innerText = `${data.products[i].manufacturer} ${data.products[i].series} ${data.products[i].name} ${data.products[i].socket}`;
        currentParts.motherboard = data.products[i];
      }
      //set price on list
      let priceWrapper = document.getElementById(
        `${data.title.toLowerCase()}-price`
      );
      if (data.title == "CPU Cooler") {
        priceWrapper = document.getElementById(`cpu-cooler-price`);
      }
      priceWrapper.innerText = `$${data.products[i].price}`;
      // remove list of products after user selects an option
      if (document.getElementById("products-wrapper")) {
        document.getElementById("products-wrapper").outerHTML = "";
      }

      updatePriceTotal();
      console.log("Parts", currentParts);
    });
    //part compatibility check
    if (currentParts.cpu !== "" && data.title != "CPU") {
      if (data.title == "CPU Cooler") {
        console.log("checking cpu cooler");
        for (let j = 0; j < data.products[i].socket.length; j++) {
          console.log("SOCKET", data.products[i].socket[j]);
          if (!data.products[i].socket.includes(currentParts.cpu.socket))
            productWrapper.classList += " hidden";
        }
      }
      if (
        data.title == "Motherboard" &&
        data.products[i].socket !== currentParts.cpu.socket
      ) {
        console.log(
          "NOT COMPATIBLE",
          data.products[i].name,
          data.products[i].socket
        );
        productWrapper.classList += " hidden";
      }
    }
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

const cpuButton = document.getElementById("picker-cpu");
const cpuCoolerButton = document.getElementById("picker-cpu-cooler");
const motherboardButton = document.getElementById("picker-motherboard");
const gpuButton = document.getElementById("picker-gpu");

cpuButton.addEventListener("click", () => {
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

const saveListButton = document.getElementById("save-button");
const clearListsButton = document.getElementById("clear-button");
const delLists = document.getElementById("delete-lists");
const savedLists = document.getElementById("saved-lists");
function setList(partList) {
  const listName = document.getElementById("list-name");
  if (listName.value == "") {
    listName.value = "Unnamed List";
  }
  console.log("LIST NAME", listName.value);
  partList.name = listName.value;
  window.localStorage.setItem(listName.value, JSON.stringify(partList));
  console.log(JSON.parse(window.localStorage.getItem(listName.value)));
}
// add saved lists to select elements
function loadLists() {
  for (let i = 0; i < localStorage.length; i++) {
    // check if localStorage item has motherboard to validate item as a part list
    if (localStorage.getItem(localStorage.key(i)).includes("motherboard")) {
      console.log(
        "List Name: ",
        JSON.parse(localStorage.getItem(localStorage.key(i))).name,
        JSON.parse(localStorage.getItem(localStorage.key(i)))
      );
      const listName = document.createElement("option");
      listName.innerText = JSON.parse(
        localStorage.getItem(localStorage.key(i))
      ).name;
      const delListName = document.createElement("option");
      delListName.innerText = JSON.parse(
        localStorage.getItem(localStorage.key(i))
      ).name;
      savedLists.append(listName);
      delLists.append(delListName);
    }
  }
}
savedLists.addEventListener("change", (e) => {
  console.log(JSON.parse(localStorage.getItem(e.target.value)));
  const pickedPartList = JSON.parse(localStorage.getItem(e.target.value));

  document.getElementById("list-name").value = pickedPartList.name;
  currentParts.cpu = pickedPartList.name;

  if (pickedPartList.cpu != "") {
    document.getElementById(
      "picker-cpu"
    ).innerText = `${pickedPartList.cpu.manufacturer} ${pickedPartList.cpu.name}`;
    document.getElementById(
      "cpu-price"
    ).innerText = `$${pickedPartList.cpu.price}`;
    currentParts.cpu = pickedPartList.cpu;
  }

  if (pickedPartList["cpu-cooler"] != "") {
    document.getElementById(
      "picker-cpu-cooler"
    ).innerText = `${pickedPartList["cpu-cooler"].manufacturer} ${pickedPartList["cpu-cooler"].name} ${pickedPartList["cpu-cooler"].name}`;
    document.getElementById(
      "cpu-cooler-price"
    ).innerText = `$${pickedPartList["cpu-cooler"].price}`;
    currentParts["cpu-cooler"] = pickedPartList["cpu-cooler"];
  }

  if (pickedPartList.gpu != "") {
    document.getElementById(
      "picker-gpu"
    ).innerText = `${pickedPartList.gpu.manufacturer} ${pickedPartList.gpu.chipset} ${pickedPartList.gpu.memory} ${pickedPartList.gpu.name}`;
    document.getElementById(
      "gpu-price"
    ).innerText = `$${pickedPartList.gpu.price}`;
    currentParts.gpu = pickedPartList.gpu;
  }

  if (pickedPartList.motherboard != "") {
    document.getElementById(
      "picker-motherboard"
    ).innerText = `${pickedPartList.motherboard.manufacturer} ${pickedPartList.motherboard.series} ${pickedPartList.motherboard.name} ${pickedPartList.motherboard.socket}`;
    document.getElementById(
      "motherboard-price"
    ).innerText = `$${pickedPartList.motherboard.price}`;
    currentParts.motherboard = pickedPartList.motherboard;
  }

  console.log("CURRENT PARTS AFTER LOAD", currentParts);

  updatePriceTotal();
});

saveListButton.addEventListener("click", () => {
  console.log("-----Saved List-----");
  console.log(`Name: ${currentParts.name}`);
  console.log(`CPU: ${currentParts.cpu}`);
  console.log(`CPU Cooler: ${currentParts["cpu-cooler"]}`);
  console.log(`Motherboard: ${currentParts.motherboard}`);
  console.log(`GPU: ${currentParts.gpu}`);
  console.log("-----Saved List-----");
  setList(currentParts);
  loadLists();
});
delLists.addEventListener("change", (e) => {
  console.log("-----Deleted List-----");
  console.log(e.target.value);
  console.log("-----Deleted List-----");
  localStorage.removeItem(e.target.value);
  while (savedLists.lastChild.id !== "select-placeholder") {
    savedLists.removeChild(savedLists.lastChild);
  }
  while (delLists.lastChild.id !== "delete-placeholder") {
    delLists.removeChild(delLists.lastChild);
  }
  document.getElementById("select-placeholder").selected = true;
  document.getElementById("delete-placeholder").selected = true;
  loadLists();
});
clearListsButton.addEventListener("click", () => {
  localStorage.clear();
  while (savedLists.lastChild.id !== "select-placeholder") {
    savedLists.removeChild(savedLists.lastChild);
  }
  while (delLists.lastChild.id !== "delete-placeholder") {
    delLists.removeChild(delLists.lastChild);
  }
  loadLists();
});
loadLists();
