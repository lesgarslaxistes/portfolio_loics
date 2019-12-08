var cartItems = [];
var isTotalHidden = true;

var backpack = {
 name: "Backpack",
 price: 400
}

var camera = {
 name: "Camera",
 price: 300
}

function addToCart(item) {
 cartItems.push(item);
 document.getElementById("itemCounter").innerHTML = cartItems.length;
 showTotal();
}

function clickCart() {
 isTotalHidden = !isTotalHidden;
 showTotal();
}

function showTotal() {
 var orderTotal = document.getElementById("orderTotal");
 orderTotal.innerHTML = "";
 if (isTotalHidden === false) {
   showTotal();
 }
}