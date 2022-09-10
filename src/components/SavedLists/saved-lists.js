const listWrapper = document.getElementById("lists-wrapper");
const clearListsButton = document.getElementById("clear-button");
const delLists = document.getElementById("delete-lists");

function loadLists() {
  if (listWrapper.innerHTML !== "") {
    listWrapper.innerHTML = "";
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
      const listName = document.createElement("h4");
      listName.classList += "listName";
      listName.innerText = data.name;
      const listPrice = document.createElement("p");
      listPrice.classList += "listPrice";
      listPrice.innerText = `$${data["total-price"]} + tax`;
      const listCpu = document.createElement("p");
      listCpu.classList += "list-part";
      listCpu.innerText = `CPU: ${data.cpu.manufacturer} ${data.cpu.name} - $${data.cpu.price}`;
      const listCpuCooler = document.createElement("p");
      listCpuCooler.classList += "list-part";
      listCpuCooler.innerText = `CPU Cooler: ${data["cpu-cooler"].manufacturer} ${data["cpu-cooler"].name} - $${data["cpu-cooler"].price}`;
      const listMotherboard = document.createElement("p");
      listMotherboard.classList += "list-part";
      listMotherboard.innerText = `Motherboard: ${data.motherboard.manufacturer} ${data.motherboard.series} ${data.motherboard.name} ${data.motherboard.socket} - $${data.motherboard.price}`;
      const listGpu = document.createElement("p");
      listGpu.classList += "list-part";
      listGpu.innerText = `GPU: ${data.gpu.manufacturer} ${data.gpu.chipset} ${data.gpu.memory} ${data.gpu.name} - $${data.gpu.price}`;
      const listRam = document.createElement("p");
      listRam.classList += "list-part";
      listRam.innerText = `Memory: ${data.ram.manufacturer} ${data.ram.name} ${data.ram["memory-config"]} ${data.ram.type}-${data.ram.speed} - $${data.ram.price}`;
      const listStorage = document.createElement("p");
      listStorage.classList += "list-part";
      listStorage.innerText = `Storage: ${data.storage.manufacturer} ${data.storage.name} ${data.storage.size} ${data.storage.type} - $${data.storage.price}`;
      const listPsu = document.createElement("p");
      listPsu.classList += "list-part";
      listPsu.innerText = `Power Supply: ${data.psu.manufacturer} ${data.psu.name} ${data.psu.wattage}W ${data.psu.rating} - $${data.psu.price}`;
      const listCase = document.createElement("p");
      listCase.classList += "list-part";
      listCase.innerText = `Case: ${data.case.manufacturer} ${data.case.name} ${data.case.type} - $${data.case.price}`;
      newCard.append(listName);
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
  if (listWrapper.innerHTML !== "") {
    listWrapper.innerHTML = "";
  }
});

loadLists();
