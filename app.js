let arr = [
  {
    brand: "Samsung",
    model: "A30",
    price: "40000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
  {
    brand: "Samsung",
    model: "A10",
    price: "40000",
    camera: "40px",
    ram: "4gb",
    rom: "128gb",
  },
  {
    brand: "Samsung",
    model: "A20",
    price: "40000",
    camera: "40px",
    ram: "4gb",
    rom: "128gb",
  },
  {
    brand: "Vivo",
    model: "Y20",
    price: "20000",
    camera: "40px",
    ram: "2gb",
    rom: "32gb",
  },
  {
    brand: "Vivo",
    model: "Y11",
    price: "20000",
    camera: "40px",
    ram: "3gb",
    rom: "32gb",
  },
  {
    brand: "Vivo",
    model: "Y15",
    price: "30000",
    camera: "40px",
    ram: "4gb",
    rom: "64gb",
  },
  {
    brand: "Motorola",
    model: "123",
    price: "5000",
    camera: "2px",
    ram: "2gb",
    rom: "32gb",
  },
  {
    brand: "Iphone",
    model: "12",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
  {
    brand: "Iphone",
    model: "13",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
  {
    brand: "Iphone",
    model: "X",
    price: "300000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
  },
];

const renderTable = (data) => {
  const cards = document.getElementById("cards");
  cards.innerHTML = ` <div class= "p-3 fw-bold" >
  <div >
      <p class= "p-2">Brand</p>
      <p class= "p-2">Model</p>
      <p class= "p-2">Price</p>
      <p class= "p-2">Camera</p>
      <p class= "p-2">Ram</p>
      <p class= "p-2">Rom</p>
  </div>
</div>`;
  data.map((value) => {
    console.log(value);
    cards.innerHTML += `    <div  class="p-3">
    <div>
        <p class= "p-2">${value.brand}</p>
        <p class= "p-2">${value.model}</p>
        <p class= "p-2">${value.price}</p>
        <p class= "p-2">${value.camera}</p>
        <p class= "p-2">${value.ram}</p>
        <p class= "p-2">${value.rom}</p>
    </div>
  </div>
    `;
  });
};

renderTable(arr);

const reset = () => {
  renderTable(arr);
};

const filtertable = () => {
  const dropOption = document.getElementById("searchBy");
  const searchText = document.getElementById("search");

  let filteredData = arr.filter(
    (value) => value[dropOption.value] === searchText.value
  );

  dropOption.value = "";
  searchText.value = "";

  renderTable(filteredData);
};
