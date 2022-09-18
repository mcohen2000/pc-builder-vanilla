const listWrapper = document.getElementById("lists-wrapper");

const getData = async (id) => {
  const res = await fetch(`../../../data/Prebuilds/${id}.json`);
  const data = await res.json();
  return data;
};
function displayPrebuild(data) {
  console.log("Prebuilt: ", data);
  const prebuiltWrapper = document.createElement("div");
  prebuiltWrapper.classList += "prebuild";
  const prebuiltTitle = document.createElement("h4");
  prebuiltTitle.classList += "prebuildName";
  prebuiltTitle.innerText = data.name;

  const prebuiltPrice = document.createElement("p");
  prebuiltPrice.classList += "prebuildPrice";
  prebuiltPrice.innerHTML = `<span class="partLabel">Total Price:</span> <span class="partPrice">$${data["total-price"]}</span> + tax`;
  const prebuiltCpu = document.createElement("div");
  prebuiltCpu.classList += "prebuildPart";
  prebuiltCpu.innerHTML = `<p class="partLabel">CPU:</p><p class="partName">${data.cpu.manufacturer} ${data.cpu.name} - </p><p class="partPrice">$${data.cpu.price}</p>`;
  if (data.cpu.img) {
    prebuiltCpu.innerHTML = `<p class="partLabel">CPU:</p> <img class="partImage" src="../../../assets/${data.cpu.img}.jpg"><p class="partName">${data.cpu.manufacturer} ${data.cpu.name} - </p><p class="partPrice">$${data.cpu.price}</p>`;
  }
  const prebuiltCpuCooler = document.createElement("div");
  prebuiltCpuCooler.classList += "prebuildPart";
  prebuiltCpuCooler.innerHTML = `<p class="partLabel">CPU Cooler:</p><p class="partName">${data["cpu-cooler"].manufacturer} ${data["cpu-cooler"].name} - </p><p class="partPrice">$${data["cpu-cooler"].price}</p>`;
  if (data["cpu-cooler"].img) {
    prebuiltCpuCooler.innerHTML = `<p class="partLabel">CPU Cooler:</p> <img class="partImage" src="../../../assets/${data["cpu-cooler"].img}.jpg"><p class="partName">${data["cpu-cooler"].manufacturer} ${data["cpu-cooler"].name} - </p><p class="partPrice">$${data["cpu-cooler"].price}</p>`;
  }
  const prebuiltMotherboard = document.createElement("div");
  prebuiltMotherboard.classList += "prebuildPart";
  prebuiltMotherboard.innerHTML = `<p class="partLabel">Motherboard:</p><p class="partName">${data.motherboard.manufacturer} ${data.motherboard.series} ${data.motherboard.name} ${data.motherboard.socket} - </p><p class="partPrice">$${data.motherboard.price}</p>`;
  if (data.motherboard.img) {
    prebuiltMotherboard.innerHTML = `<p class="partLabel">Motherboard:</p> <img class="partImage" src="../../../assets/${data.motherboard.img}.jpg"><p class="partName">${data.motherboard.manufacturer} ${data.motherboard.series} ${data.motherboard.name} ${data.motherboard.socket} - </p><p class="partPrice">$${data.motherboard.price}</p>`;
  }
  const prebuiltGpu = document.createElement("div");
  prebuiltGpu.classList += "prebuildPart";
  prebuiltGpu.innerHTML = `<p class="partLabel">Video Card:</p><p class="partName">${data.gpu.manufacturer} ${data.gpu.chipset} ${data.gpu.memory} ${data.gpu.name} - </p><p class="partPrice">$${data.gpu.price}</p>`;
  if (data.gpu.img) {
    prebuiltGpu.innerHTML = `<p class="partLabel">Video Card:</p><img class="partImage" src="../../../assets/${data.gpu.img}.jpg"><p class="partName">${data.gpu.manufacturer} ${data.gpu.chipset} ${data.gpu.memory} ${data.gpu.name} - </p><p class="partPrice">$${data.gpu.price}</p>`;
  }
  const prebuiltRam = document.createElement("div");
  prebuiltRam.classList += "prebuildPart";
  prebuiltRam.innerHTML = `<p class="partLabel">Memory:</p><p class="partName">${data.ram.manufacturer} ${data.ram.name} ${data.ram["memory-config"]} ${data.ram.type}-${data.ram.speed} - </p><p class="partPrice">$${data.ram.price}</p>`;
  if (data.ram.img) {
    prebuiltRam.innerHTML = `<p class="partLabel">Memory:</p><img class="partImage" src="../../../assets/${data.ram.img}.jpg"><p class="partName">${data.ram.manufacturer} ${data.ram.name} ${data.ram["memory-config"]} ${data.ram.type}-${data.ram.speed} - </p><p class="partPrice">$${data.ram.price}</p>`;
  }
  const prebuiltStorage = document.createElement("div");
  prebuiltStorage.classList += "prebuildPart";
  prebuiltStorage.innerHTML = `<p class="partLabel">Storage:</p><p class="partName">${data.storage.manufacturer} ${data.storage.name} ${data.storage.size} ${data.storage.type} - </p><p class="partPrice">$${data.storage.price}</p>`;
  if (data.storage.img) {
    prebuiltStorage.innerHTML = `<p class="partLabel">Storage:</p><img class="partImage" src="../../../assets/${data.storage.img}.jpg"><p class="partName">${data.storage.manufacturer} ${data.storage.name} ${data.storage.size} ${data.storage.type} - </p><p class="partPrice">$${data.storage.price}</p>`;
  }
  const prebuiltPsu = document.createElement("div");
  prebuiltPsu.classList += "prebuildPart";
  prebuiltPsu.innerHTML = `<p class="partLabel">Power Supply:</p><p class="partName">${data.psu.manufacturer} ${data.psu.name} ${data.psu.wattage}W ${data.psu.rating} - </p><p class="partPrice">$${data.psu.price}</p>`;
  if (data.psu.img) {
    prebuiltPsu.innerHTML = `<p class="partLabel">Power Supply:</p><img class="partImage" src="../../../assets/${data.psu.img}.jpg"><p class="partName">${data.psu.manufacturer} ${data.psu.name} ${data.psu.wattage}W ${data.psu.rating} - </p><p class="partPrice">$${data.psu.price}</p>`;
  }
  const prebuiltCase = document.createElement("div");
  prebuiltCase.classList += "prebuildPart";
  prebuiltCase.innerHTML = `<p class="partLabel">Case:</p><p class="partName">${data.case.manufacturer} ${data.case.name} ${data.case.type} - </p><p class="partPrice">$${data.case.price}</p>`;
  if (data.case.img) {
    prebuiltCase.innerHTML = `<p class="partLabel">Case:</p><img class="partImage" src="../../../assets/${data.case.img}.jpg"><p class="partName">${data.case.manufacturer} ${data.case.name} ${data.case.type} - </p><p class="partPrice">$${data.case.price}</p>`;
  }

  prebuiltWrapper.append(prebuiltTitle);
  prebuiltWrapper.append(prebuiltCpu);
  prebuiltWrapper.append(prebuiltCpuCooler);
  prebuiltWrapper.append(prebuiltMotherboard);
  prebuiltWrapper.append(prebuiltGpu);
  prebuiltWrapper.append(prebuiltRam);
  prebuiltWrapper.append(prebuiltStorage);
  prebuiltWrapper.append(prebuiltPsu);
  prebuiltWrapper.append(prebuiltCase);
  prebuiltWrapper.append(prebuiltPrice);

  listWrapper.append(prebuiltWrapper);
}

const amdHighEndData = await getData("amdHighEnd");
displayPrebuild(amdHighEndData);
const amdMidEndData = await getData("amdMidEnd");
displayPrebuild(amdMidEndData);
const amdLowEndData = await getData("amdLowEnd");
displayPrebuild(amdLowEndData);
const intelHighEndData = await getData("intelHighEnd");
displayPrebuild(intelHighEndData);
const intelMidEndData = await getData("intelMidEnd");
displayPrebuild(intelMidEndData);
const intelLowEndData = await getData("intelLowEnd");
displayPrebuild(intelLowEndData);
