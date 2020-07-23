let product1Plus = document.getElementById('product1-plus');
let product1Minus = document.getElementById('product1-minus');
let product2Plus = document.getElementById('product2-plus');
let product2Minus = document.getElementById('product2-minus');

function priceByInput(inputId, priceId, unitPrice){
    const input = parseFloat(document.getElementById(inputId).value);
    const price = document.getElementById(priceId);
    price.innerText = (unitPrice * input);    
}

function numCount(inputId, sign) {
    productCount = parseInt(document.getElementById(inputId).value);
    if (!(productCount == 0 && sign == false)) {
        if (sign == true) productCount++;
        else productCount--;
        document.getElementById(inputId).value = productCount;
        console.log(productCount);
    }
}

function priceCount(inputId, priceId, unitPrice) {
    let price = parseFloat(document.getElementById(priceId).innerHTML);
    let input = parseInt(document.getElementById(inputId).value);
    let totalPrice = parseFloat(document.getElementById("total-price").innerHTML);
    let tax = parseFloat(document.getElementById("tax").innerHTML);
    let otherPrice = totalPrice - price;
    // console.log("price", price);
    // console.log("input", input);
    if (!(input < 0)) {
        price = unitPrice * input;
        console.log("Price ", price);
        if (Math.round(price) - price == 0) document.getElementById(priceId).innerHTML = price;
        else document.getElementById(priceId).innerHTML = price.toFixed(2);

        totalPrice = price + otherPrice;
        let totalWithTax = totalPrice + tax;
        document.getElementById("total-price").innerHTML = totalPrice;
        document.getElementById("total-with-tax").innerHTML = totalWithTax;
    }
}

// Add listener in plusIcon for 1st product
product1Plus.addEventListener('click', function () {
    numCount("product1-count", true);
    priceCount("product1-count", "price1", 1219);
})

// Add listener in minusIcon for 1st product
product1Minus.addEventListener('click', function () {
    numCount("product1-count", false);
    priceCount("product1-count", "price1", 1219);
})

// Add listener in plusIcon for 2nd product
product2Plus.addEventListener('click', function () {
    numCount("product2-count", true);
    priceCount("product2-count", "price2", 59);
})

// Add listener in minusIcon for 2nd product
product2Minus.addEventListener('click', function () {
    numCount("product2-count", false);
    priceCount("product2-count", "price2", 59);
})