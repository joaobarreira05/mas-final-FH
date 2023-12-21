let inputPrecoTotal = document.getElementById("total");
let inputQtdTotal = document.getElementById("quantidades");
let precoTotal = 0;
let qtdTotal = 0;
let productList = [];


function addProduct(id) {
    let productName = document.querySelector(`button[name="${id}"]`).name;
    productList.push(productName);
    console.log(productList);
  }

  function saveProductList() {
    // Retrieve the existing product list from local storage
    let existingProductList = JSON.parse(localStorage.getItem('productListKey')) || [];
 
    // Add the new product to the existing list
    existingProductList.push(productList);
 
    // Convert the array to a string using JSON.stringify
    let productListString = JSON.stringify(existingProductList);
 
    // Store the string in the local storage
    localStorage.setItem('productListKey', productListString);
 
    // Optionally, you can clear the productList array after saving to local storage
    productList = [];
 
    console.log("Product list saved to local storage");
 }

 function clearProductList() {
    // Clear the product list from local storage
    localStorage.removeItem('productListKey');
 
    console.log("Product list cleared from local storage");
 }



function calculate() {
    let precAtual, qtdAtual;
    precoTotal = 0;
    qtdTotal = 0;

    for (let i = 1; i <= 6; i++) {
        precAtual = parseFloat(document.getElementById('price' + i).value);
        qtdAtual = parseFloat(document.getElementById('qty' + i).value);
        precoTotal += precAtual * qtdAtual;
        qtdTotal += qtdAtual;
    }

    if (precoTotal> 100) {
        precoTotal  = precoTotal * 0.95;
    }

    if (qtdTotal>= 5) {
        precoTotal  = precoTotal * 0.95;
    }
    
    inputQtdTotal.innerText = qtdTotal;
    inputPrecoTotal.innerText = precoTotal.toFixed(2);
}

function valid() {
    if (precoTotal <= 30 && qtdTotal <= 4) {
        alert("Nova Notificação\nRecebeu um novo pedido");
        return false;
    } else {
        return true
    }
}

function clean() {
    for (let i = 1; i <= 6; i++) {
        qtdAtual = document.getElementById('qty' + i).value = 0;
    }
    precoTotal = 0;
    qtdTotal = 0;
    inputPrecoTotal.innerText = "0.00";
    inputQtdTotal.innerText = 0;
}