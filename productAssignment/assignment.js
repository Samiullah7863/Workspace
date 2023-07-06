// Getting DOM elements
const todoInput = document.getElementById("product-input");
const btn = document.querySelector(".btn");
const todoList = document.getElementById("product-list");
const bakraImg = document.querySelector(".bakra-img");

// Event listener on button
btn.onclick = function () {
  // Add New Product
  addNewProduct();
};

// Function to add product through Fake API
async function addProductToAPI(productTitle) {
  const response = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify({
      title: productTitle,
      price: 1,
      description: "lorem ipsum set",
      image: "https://i.pravatar.cc",
      category: "electronic",
    }),
  });

  const productID = await response.json();

  return productID;
}

// Function to Add New Product - Sends an API request to add a product and in return receives ID of that newly added product
function addNewProduct() {
  const todoText = todoInput.value.trim();
  if (todoText !== "") {
    btn.disabled = true;
    btn.classList.add("btn-disabled");

    addProductToAPI(todoText).then((productID) => {
      console.log("Product ID: ", productID);

      addProductToList(todoText);
    });

    todoInput.value = "";
  } else {
    alert("Add Product Field is Required!");
  }
}

// This function adds a produt to the list
function addProductToList(productTitle) {
  const todoItem = document.createElement("li");
  todoItem.className = "product-item";
  todoItem.innerText = productTitle;

  todoList.insertBefore(todoItem, todoList.firstChild);

  todoInput.value = "";
}

// This function gets all products from API and passes those products to addProductToList function
async function getAllProducts() {
  todoList.innerHTML = "";

  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();

  return products;
}

getAllProducts().then((products) => {
  for (product of products) {
    addProductToList(product.title);
  }
});

