const listWrapper = document.getElementById("lists-wrapper");

const getData = async (id) => {
  const res = await fetch(`../../../data/Prebuilds/${id}.json`);
  const data = await res.json();
  // console.log("INSIDE ASYNC GET DATA", data);
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
  prebuiltPrice.innerText = `Total Price: $${data["total-price"]} + tax`;
  const prebuiltCpu = document.createElement("p");
  prebuiltCpu.classList += "prebuildPart";
  prebuiltCpu.innerText = `CPU: ${data.cpu.manufacturer} ${data.cpu.name} - $${data.cpu.price}`;
  const prebuiltCpuCooler = document.createElement("p");
  prebuiltCpuCooler.classList += "prebuildPart";
  prebuiltCpuCooler.innerText = `CPU Cooler: ${data["cpu-cooler"].manufacturer} ${data["cpu-cooler"].name} - $${data["cpu-cooler"].price}`;
  const prebuiltMotherboard = document.createElement("p");
  prebuiltMotherboard.classList += "prebuildPart";
  prebuiltMotherboard.innerText = `Motherboard: ${data.motherboard.manufacturer} ${data.motherboard.series} ${data.motherboard.name} ${data.motherboard.socket} - $${data.motherboard.price}`;
  const prebuiltGpu = document.createElement("p");
  prebuiltGpu.classList += "prebuildPart";
  prebuiltGpu.innerText = `Video Card: ${data.gpu.manufacturer} ${data.gpu.chipset} ${data.gpu.memory} ${data.gpu.name} - $${data.gpu.price}`;
  const prebuiltRam = document.createElement("p");
  prebuiltRam.classList += "prebuildPart";
  prebuiltRam.innerText = `Memory: ${data.ram.manufacturer} ${data.ram.name} ${data.ram["memory-config"]} ${data.ram.type}-${data.ram.speed} - $${data.ram.price}`;
  const prebuiltStorage = document.createElement("p");
  prebuiltStorage.classList += "prebuildPart";
  prebuiltStorage.innerText = `Storage: ${data.storage.manufacturer} ${data.storage.name} ${data.storage.size} ${data.storage.type} - $${data.storage.price}`;
  const prebuiltPsu = document.createElement("p");
  prebuiltPsu.classList += "prebuildPart";
  prebuiltPsu.innerText = `Power Supply: ${data.psu.manufacturer} ${data.psu.name} ${data.psu.wattage}W ${data.psu.rating} - $${data.psu.price}`;
  const prebuiltCase = document.createElement("p");
  prebuiltCase.classList += "prebuildPart";
  prebuiltCase.innerText = `Case: ${data.case.manufacturer} ${data.case.name} ${data.case.type} - $${data.case.price}`;

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
