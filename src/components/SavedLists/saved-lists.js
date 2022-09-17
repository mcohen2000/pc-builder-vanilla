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
      const listCpu = document.createElement("p");
      listCpu.classList += "listPart";
      listCpu.innerHTML = `<span class="partLabel">CPU:</span> ${data.cpu.manufacturer} ${data.cpu.name} - <span class="partPrice">$${data.cpu.price}</span>`;
      if (data.cpu.img) {
        listCpu.innerHTML = `<span class="partLabel">CPU:</span> <img class="partImage" src="../../../images/${data.cpu.img}.jpg">${data.cpu.manufacturer} ${data.cpu.name} - <span class="partPrice">$${data.cpu.price}</span>`;
      }
      if (data.cpu === "") {
        listCpu.innerHTML = `<span class="partLabel">CPU:</span> Empty - <span class="partPrice">$0.00</span>`;
      }
      const listCpuCooler = document.createElement("p");
      listCpuCooler.classList += "listPart";
      listCpuCooler.innerHTML = `<span class="partLabel">CPU Cooler:</span> ${data["cpu-cooler"].manufacturer} ${data["cpu-cooler"].name} - <span class="partPrice">$${data["cpu-cooler"].price}</span>`;
      if (data["cpu-cooler"].img) {
        listCpuCooler.innerHTML = `<span class="partLabel">CPU Cooler:</span> <img class="partImage" src="../../../images/${data["cpu-cooler"].img}.jpg">${data["cpu-cooler"].manufacturer} ${data["cpu-cooler"].name} - <span class="partPrice">$${data["cpu-cooler"].price}</span>`;
      }
      if (data["cpu-cooler"] === "") {
        listCpuCooler.innerHTML = `<span class="partLabel">CPU Cooler:</span> Empty - <span class="partPrice">$0.00</span>`;
      }
      const listMotherboard = document.createElement("p");
      listMotherboard.classList += "listPart";
      listMotherboard.innerHTML = `<span class="partLabel">Motherboard:</span> ${data.motherboard.manufacturer} ${data.motherboard.series} ${data.motherboard.name} ${data.motherboard.socket} - <span class="partPrice">$${data.motherboard.price}</span>`;
      if (data.motherboard.img) {
        listMotherboard.innerHTML = `<span class="partLabel">Motherboard:</span> <img class="partImage" src="../../../images/${data.motherboard.img}.jpg">${data.motherboard.manufacturer} ${data.motherboard.series} ${data.motherboard.name} ${data.motherboard.socket} - <span class="partPrice">$${data.motherboard.price}</span>`;
      }
      if (data.motherboard === "") {
        listMotherboard.innerHTML = `<span class="partLabel">Motherboard:</span> Empty - <span class="partPrice">$0.00</span>`;
      }
      const listGpu = document.createElement("p");
      listGpu.classList += "listPart";
      listGpu.innerHTML = `<span class="partLabel">Video Card:</span> ${data.gpu.manufacturer} ${data.gpu.chipset} ${data.gpu.memory} ${data.gpu.name} - <span class="partPrice">$${data.gpu.price}</span>`;
      if (data.gpu.img) {
        listGpu.innerHTML = `<span class="partLabel">Video Card:</span> <img class="partImage" src="../../../images/${data.gpu.img}.jpg">${data.gpu.manufacturer} ${data.gpu.chipset} ${data.gpu.memory} ${data.gpu.name} - <span class="partPrice">$${data.gpu.price}</span>`;
      }
      if (data.gpu === "") {
        listGpu.innerHTML = `<span class="partLabel">Video Card:</span> Empty - <span class="partPrice">$0.00</span>`;
      }
      const listRam = document.createElement("p");
      listRam.classList += "listPart";
      listRam.innerHTML = `<span class="partLabel">Memory:</span> ${data.ram.manufacturer} ${data.ram.name} ${data.ram["memory-config"]} ${data.ram.type}-${data.ram.speed} - <span class="partPrice">$${data.ram.price}</span>`;
      if (data.ram.img) {
        listRam.innerHTML = `<span class="partLabel">Memory:</span> <img class="partImage" src="../../../images/${data.ram.img}.jpg">${data.ram.manufacturer} ${data.ram.name} ${data.ram["memory-config"]} ${data.ram.type}-${data.ram.speed} - <span class="partPrice">$${data.ram.price}</span>`;
      }
      if (data.ram === "") {
        listRam.innerHTML = `<span class="partLabel">Memory:</span> Empty - <span class="partPrice">$0.00</span>`;
      }
      const listStorage = document.createElement("p");
      listStorage.classList += "listPart";
      listStorage.innerHTML = `<span class="partLabel">Storage:</span> ${data.storage.manufacturer} ${data.storage.name} ${data.storage.size} ${data.storage.type} - <span class="partPrice">$${data.storage.price}</span>`;
      if (data.storage.img) {
        listStorage.innerHTML = `<span class="partLabel">Storage:</span> <img class="partImage" src="../../../images/${data.storage.img}.jpg">${data.storage.manufacturer} ${data.storage.name} ${data.storage.size} ${data.storage.type} - <span class="partPrice">$${data.storage.price}</span>`;
      }
      if (data.storage === "") {
        listStorage.innerHTML = `<span class="partLabel">Storage:</span> Empty - <span class="partPrice">$0.00</span>`;
      }
      const listPsu = document.createElement("p");
      listPsu.classList += "listPart";
      listPsu.innerHTML = `<span class="partLabel">Power Supply:</span> ${data.psu.manufacturer} ${data.psu.name} ${data.psu.wattage}W ${data.psu.rating} - <span class="partPrice">$${data.psu.price}</span>`;
      if (data.psu.img) {
        listPsu.innerHTML = `<span class="partLabel">Power Supply:</span> <img class="partImage" src="../../../images/${data.psu.img}.jpg">${data.psu.manufacturer} ${data.psu.name} ${data.psu.wattage}W ${data.psu.rating} - <span class="partPrice">$${data.psu.price}</span>`;
      }
      if (data.psu === "") {
        listPsu.innerHTML = `<span class="partLabel">Power Supply:</span> Empty - <span class="partPrice">$0.00</span>`;
      }
      const listCase = document.createElement("p");
      listCase.classList += "listPart";
      listCase.innerHTML = `<span class="partLabel">Case:</span> ${data.case.manufacturer} ${data.case.name} ${data.case.type} - <span class="partPrice">$${data.case.price}</span>`;
      if (data.case.img) {
        listCase.innerHTML = `<span class="partLabel">Case:</span> <img class="partImage" src="../../../images/${data.case.img}.jpg">${data.case.manufacturer} ${data.case.name} ${data.case.type} - <span class="partPrice">$${data.case.price}</span>`;
      }
      if (data.case === "") {
        listCase.innerHTML = `<span class="partLabel">Case:</span> Empty - <span class="partPrice">$0.00</span>`;
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
