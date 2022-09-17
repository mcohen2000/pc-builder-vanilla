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
  const prebuiltCpu = document.createElement("p");
  prebuiltCpu.classList += "prebuildPart";
  prebuiltCpu.innerHTML = `<span class="partLabel">CPU:</span><span class="partName">${data.cpu.manufacturer} ${data.cpu.name} - </span><span class="partPrice">$${data.cpu.price}</span>`;
  if (data.cpu.img) {
    prebuiltCpu.innerHTML = `<span class="partLabel">CPU:</span> <img class="partImage" src="../../../assets/${data.cpu.img}.jpg"><span class="partName">${data.cpu.manufacturer} ${data.cpu.name} - </span><span class="partPrice">$${data.cpu.price}</span>`;
  }
  const prebuiltCpuCooler = document.createElement("p");
  prebuiltCpuCooler.classList += "prebuildPart";
  prebuiltCpuCooler.innerHTML = `<span class="partLabel">CPU Cooler:</span><span class="partName">${data["cpu-cooler"].manufacturer} ${data["cpu-cooler"].name} - </span><span class="partPrice">$${data["cpu-cooler"].price}</span>`;
  if (data["cpu-cooler"].img) {
    prebuiltCpuCooler.innerHTML = `<span class="partLabel">CPU Cooler:</span> <img class="partImage" src="../../../assets/${data["cpu-cooler"].img}.jpg"><span class="partName">${data["cpu-cooler"].manufacturer} ${data["cpu-cooler"].name} - </span><span class="partPrice">$${data["cpu-cooler"].price}</span>`;
  }
  const prebuiltMotherboard = document.createElement("p");
  prebuiltMotherboard.classList += "prebuildPart";
  prebuiltMotherboard.innerHTML = `<span class="partLabel">Motherboard:</span><span class="partName">${data.motherboard.manufacturer} ${data.motherboard.series} ${data.motherboard.name} ${data.motherboard.socket} - </span><span class="partPrice">$${data.motherboard.price}</span>`;
  if (data.motherboard.img) {
    prebuiltMotherboard.innerHTML = `<span class="partLabel">Motherboard:</span> <img class="partImage" src="../../../assets/${data.motherboard.img}.jpg"><span class="partName">${data.motherboard.manufacturer} ${data.motherboard.series} ${data.motherboard.name} ${data.motherboard.socket} - </span><span class="partPrice">$${data.motherboard.price}</span>`;
  }
  const prebuiltGpu = document.createElement("p");
  prebuiltGpu.classList += "prebuildPart";
  prebuiltGpu.innerHTML = `<span class="partLabel">Video Card:</span><span class="partName">${data.gpu.manufacturer} ${data.gpu.chipset} ${data.gpu.memory} ${data.gpu.name} - </span><span class="partPrice">$${data.gpu.price}</span>`;
  if (data.gpu.img) {
    prebuiltGpu.innerHTML = `<span class="partLabel">Video Card:</span><img class="partImage" src="../../../assets/${data.gpu.img}.jpg"><span class="partName">${data.gpu.manufacturer} ${data.gpu.chipset} ${data.gpu.memory} ${data.gpu.name} - </span><span class="partPrice">$${data.gpu.price}</span>`;
  }
  const prebuiltRam = document.createElement("p");
  prebuiltRam.classList += "prebuildPart";
  prebuiltRam.innerHTML = `<span class="partLabel">Memory:</span><span class="partName">${data.ram.manufacturer} ${data.ram.name} ${data.ram["memory-config"]} ${data.ram.type}-${data.ram.speed} - </span><span class="partPrice">$${data.ram.price}</span>`;
  if (data.ram.img) {
    prebuiltRam.innerHTML = `<span class="partLabel">Memory:</span><img class="partImage" src="../../../assets/${data.ram.img}.jpg"><span class="partName">${data.ram.manufacturer} ${data.ram.name} ${data.ram["memory-config"]} ${data.ram.type}-${data.ram.speed} - </span><span class="partPrice">$${data.ram.price}</span>`;
  }
  const prebuiltStorage = document.createElement("p");
  prebuiltStorage.classList += "prebuildPart";
  prebuiltStorage.innerHTML = `<span class="partLabel">Storage:</span><span class="partName">${data.storage.manufacturer} ${data.storage.name} ${data.storage.size} ${data.storage.type} - </span><span class="partPrice">$${data.storage.price}</span>`;
  if (data.storage.img) {
    prebuiltStorage.innerHTML = `<span class="partLabel">Storage:</span><img class="partImage" src="../../../assets/${data.storage.img}.jpg"><span class="partName">${data.storage.manufacturer} ${data.storage.name} ${data.storage.size} ${data.storage.type} - </span><span class="partPrice">$${data.storage.price}</span>`;
  }
  const prebuiltPsu = document.createElement("p");
  prebuiltPsu.classList += "prebuildPart";
  prebuiltPsu.innerHTML = `<span class="partLabel">Power Supply:</span><span class="partName">${data.psu.manufacturer} ${data.psu.name} ${data.psu.wattage}W ${data.psu.rating} - </span><span class="partPrice">$${data.psu.price}</span>`;
  if (data.psu.img) {
    prebuiltPsu.innerHTML = `<span class="partLabel">Power Supply:</span><img class="partImage" src="../../../assets/${data.psu.img}.jpg"><span class="partName">${data.psu.manufacturer} ${data.psu.name} ${data.psu.wattage}W ${data.psu.rating} - </span><span class="partPrice">$${data.psu.price}</span>`;
  }
  const prebuiltCase = document.createElement("p");
  prebuiltCase.classList += "prebuildPart";
  prebuiltCase.innerHTML = `<span class="partLabel">Case:</span><span class="partName">${data.case.manufacturer} ${data.case.name} ${data.case.type} - </span><span class="partPrice">$${data.case.price}</span>`;
  if (data.case.img) {
    prebuiltCase.innerHTML = `<span class="partLabel">Case:</span><img class="partImage" src="../../../assets/${data.case.img}.jpg"><span class="partName">${data.case.manufacturer} ${data.case.name} ${data.case.type} - </span><span class="partPrice">$${data.case.price}</span>`;
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
