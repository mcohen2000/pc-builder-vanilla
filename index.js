console.log("JAVASCRIPT LOADED!!!");
const options = {
    method: "GET",
    headers: {},
};
  
const getParts = async () => {
    try {
      const res = await fetch(
        `./products.json`,
        options
      );
      const data = await res.json();
      console.log("RESPONSE DATA: ", data);
    } catch (e) {
        console.log(e);
    }
};
getParts();