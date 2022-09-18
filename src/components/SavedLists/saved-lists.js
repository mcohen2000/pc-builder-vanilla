const listWrapper = document.getElementById("lists-wrapper");
const clearListsButton = document.getElementById("clear-button");
const delLists = document.getElementById("delete-lists");

function loadLists() {
  if (listWrapper.innerHTML !== "") {
    listWrapper.innerHTML = "";
  }
  if (delLists.innerHTML !== "") {
    delLists.innerHTML = `<option value="" disabled selected hidden id="delete-placeholder">Delete a List</option>`;
  }

  for (let i = 0; i < localStorage.length; i++) {
    // check if localStorage item has motherboard to validate item as a part list
    if (localStorage.getItem(localStorage.key(i)).includes("motherboard")) {
      let data = JSON.parse(localStorage.getItem(localStorage.key(i)));
      console.log("List Name: ", data.name, data);
      const delListName = document.createElement("option");
      delListName.innerText = data.name;
      delLists.append(delListName);

      const newCard = document.createElement("div");
      newCard.classList += "listCard";
      const listHeader = document.createElement("div");
      listHeader.classList += "listHeader";
      const listName = document.createElement("h4");
      listName.classList += "listName";
      listName.innerText = data.name;
      const listDelBtn = document.createElement("i");
      listDelBtn.classList += "listDelBtn bi-trash3";
      listDelBtn.addEventListener("click", () => {
        localStorage.removeItem(localStorage.key(i));
        loadLists();
      });
      listHeader.append(listName);
      listHeader.append(listDelBtn);
      const listPrice = document.createElement("p");
      listPrice.classList += "listPrice";
      listPrice.innerHTML = `<span class="partLabel">Total Price:</span> <span class="partPrice">$${data["total-price"]}</span> + tax`;
      if (data["total-price"] === "") {
        listPrice.innerHTML = `<span class="partLabel">Total Price:</span> <span class="partPrice">$0.00</span> + tax`;
      }
      const listCpu = document.createElement("div");
      listCpu.classList += "listPart";
      listCpu.innerHTML = `<p class="partLabel">CPU:</p><p class="partName">${data.cpu.manufacturer} ${data.cpu.name} - </p><p class="partPrice">$${data.cpu.price}</p>`;
      if (data.cpu.img) {
        listCpu.innerHTML = `<p class="partLabel">CPU:</p><img class="partImage" src="../../../assets/${data.cpu.img}.jpg"><p class="partName">${data.cpu.manufacturer} ${data.cpu.name} - </p><p class="partPrice">$${data.cpu.price}</p>`;
      }
      if (data.cpu === "") {
        listCpu.innerHTML = `<p class="partLabel">CPU:</p><p class="partName">Empty - </p><p class="partPrice">$0.00</p>`;
      }
      const listCpuCooler = document.createElement("div");
      listCpuCooler.classList += "listPart";
      listCpuCooler.innerHTML = `<p class="partLabel">CPU Cooler:</p><p class="partName">${data["cpu-cooler"].manufacturer} ${data["cpu-cooler"].name} - </p><p class="partPrice">$${data["cpu-cooler"].price}</p>`;
      if (data["cpu-cooler"].img) {
        listCpuCooler.innerHTML = `<p class="partLabel">CPU Cooler:</p><img class="partImage" src="../../../assets/${data["cpu-cooler"].img}.jpg"><p class="partName">${data["cpu-cooler"].manufacturer} ${data["cpu-cooler"].name} - </p><p class="partPrice">$${data["cpu-cooler"].price}</p>`;
      }
      if (data["cpu-cooler"] === "") {
        listCpuCooler.innerHTML = `<p class="partLabel">CPU Cooler:</p><p class="partName">Empty - </p><p class="partPrice">$0.00</p>`;
      }
      const listMotherboard = document.createElement("div");
      listMotherboard.classList += "listPart";
      listMotherboard.innerHTML = `<p class="partLabel">Motherboard:</p><p class="partName">${data.motherboard.manufacturer} ${data.motherboard.series} ${data.motherboard.name} ${data.motherboard.socket} - </p><p class="partPrice">$${data.motherboard.price}</p>`;
      if (data.motherboard.img) {
        listMotherboard.innerHTML = `<p class="partLabel">Motherboard:</p><img class="partImage" src="../../../assets/${data.motherboard.img}.jpg"><p class="partName">${data.motherboard.manufacturer} ${data.motherboard.series} ${data.motherboard.name} ${data.motherboard.socket} - </p><p class="partPrice">$${data.motherboard.price}</p>`;
      }
      if (data.motherboard === "") {
        listMotherboard.innerHTML = `<p class="partLabel">Motherboard:</p><p class="partName">Empty - </p><p class="partPrice">$0.00</p>`;
      }
      const listGpu = document.createElement("div");
      listGpu.classList += "listPart";
      listGpu.innerHTML = `<p class="partLabel">Video Card:</p><p class="partName">${data.gpu.manufacturer} ${data.gpu.chipset} ${data.gpu.memory} ${data.gpu.name} - </p><p class="partPrice">$${data.gpu.price}</p>`;
      if (data.gpu.img) {
        listGpu.innerHTML = `<p class="partLabel">Video Card:</p><img class="partImage" src="../../../assets/${data.gpu.img}.jpg"><p class="partName">${data.gpu.manufacturer} ${data.gpu.chipset} ${data.gpu.memory} ${data.gpu.name} - </p><p class="partPrice">$${data.gpu.price}</p>`;
      }
      if (data.gpu === "") {
        listGpu.innerHTML = `<p class="partLabel">Video Card:</p><p class="partName">Empty - </p><p class="partPrice">$0.00</p>`;
      }
      const listRam = document.createElement("div");
      listRam.classList += "listPart";
      listRam.innerHTML = `<p class="partLabel">Memory:</p><p class="partName">${data.ram.manufacturer} ${data.ram.name} ${data.ram["memory-config"]} ${data.ram.type}-${data.ram.speed} - </p><p class="partPrice">$${data.ram.price}</p>`;
      if (data.ram.img) {
        listRam.innerHTML = `<p class="partLabel">Memory:</p><img class="partImage" src="../../../assets/${data.ram.img}.jpg"><p class="partName">${data.ram.manufacturer} ${data.ram.name} ${data.ram["memory-config"]} ${data.ram.type}-${data.ram.speed} - </p><p class="partPrice">$${data.ram.price}</p>`;
      }
      if (data.ram === "") {
        listRam.innerHTML = `<p class="partLabel">Memory:</p><p class="partName">Empty - </p><p class="partPrice">$0.00</p>`;
      }
      const listStorage = document.createElement("div");
      listStorage.classList += "listPart";
      listStorage.innerHTML = `<p class="partLabel">Storage:</p><p class="partName">${data.storage.manufacturer} ${data.storage.name} ${data.storage.size} ${data.storage.type} - </p><p class="partPrice">$${data.storage.price}</p>`;
      if (data.storage.img) {
        listStorage.innerHTML = `<p class="partLabel">Storage:</p><img class="partImage" src="../../../assets/${data.storage.img}.jpg"><p class="partName">${data.storage.manufacturer} ${data.storage.name} ${data.storage.size} ${data.storage.type} - </p><p class="partPrice">$${data.storage.price}</p>`;
      }
      if (data.storage === "") {
        listStorage.innerHTML = `<p class="partLabel">Storage:</p><p class="partName">Empty - </p><p class="partPrice">$0.00</p>`;
      }
      const listPsu = document.createElement("div");
      listPsu.classList += "listPart";
      listPsu.innerHTML = `<p class="partLabel">Power Supply:</p><p class="partName">${data.psu.manufacturer} ${data.psu.name} ${data.psu.wattage}W ${data.psu.rating} - </p><p class="partPrice">$${data.psu.price}</p>`;
      if (data.psu.img) {
        listPsu.innerHTML = `<p class="partLabel">Power Supply:</p> <img class="partImage" src="../../../assets/${data.psu.img}.jpg"><p class="partName">${data.psu.manufacturer} ${data.psu.name} ${data.psu.wattage}W ${data.psu.rating} - </p><p class="partPrice">$${data.psu.price}</p>`;
      }
      if (data.psu === "") {
        listPsu.innerHTML = `<p class="partLabel">Power Supply:</p><p class="partName">Empty - </p><p class="partPrice">$0.00</p>`;
      }
      const listCase = document.createElement("div");
      listCase.classList += "listPart";
      listCase.innerHTML = `<p class="partLabel">Case:</p><p class="partName">${data.case.manufacturer} ${data.case.name} ${data.case.type} - </p><p class="partPrice">$${data.case.price}</p>`;
      if (data.case.img) {
        listCase.innerHTML = `<p class="partLabel">Case:</p><img class="partImage" src="../../../assets/${data.case.img}.jpg"><p class="partName">${data.case.manufacturer} ${data.case.name} ${data.case.type} - </p><p class="partPrice">$${data.case.price}</p>`;
      }
      if (data.case === "") {
        listCase.innerHTML = `<p class="partLabel">Case:</p><p class="partName">Empty - </p><p class="partPrice">$0.00</p>`;
      }
      newCard.append(listHeader);
      newCard.append(listCpu);
      newCard.append(listCpuCooler);
      newCard.append(listMotherboard);
      newCard.append(listGpu);
      newCard.append(listRam);
      newCard.append(listStorage);
      newCard.append(listPsu);
      newCard.append(listCase);
      newCard.append(listPrice);
      listWrapper.append(newCard);
    }
  }
}

delLists.addEventListener("change", (e) => {
  console.log("-----Deleted List-----");
  console.log(e.target.value);
  console.log("-----Deleted List-----");
  localStorage.removeItem(e.target.value);
  while (delLists.lastChild.id !== "delete-placeholder") {
    delLists.removeChild(delLists.lastChild);
  }
  document.getElementById("delete-placeholder").selected = true;
  loadLists();
});
clearListsButton.addEventListener("click", () => {
  localStorage.clear();
  loadLists();
});

loadLists();
