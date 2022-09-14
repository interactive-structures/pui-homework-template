class Roll {
    constructor(type, price, glazingName, glazingPrice, packSize, elementID) {
        this.rollType = type;
        this.rollPrice = price;
        this.glazingName = glazingName;
        this.glazingPrice = glazingPrice;
        this.packMultiplier = packSize;
        this.packSize = packSize;
        this.displayPrice = price;

        this.elementID = document.querySelector("#" + elementID);
        this.dropdownMenu();
    }
    
    priceAdapt(price){
        this.rollPrice += price;
    }

    updatePrice(){
        this.displayPrice = (this.rollPrice + this.glazingPrice) * (this.packMultiplier); 
        // console.log(this.rollPrice);
        // console.log(this.glazingName);
        // console.log(this.glazingPrice);
        // console.log(this.packMultiplier);
        // console.log(this.displayPrice);
        // // Get the price element to update
        // console.log(this.rollType);
        // console.log("");
        let element = document.querySelector("#" + this.rollType + "_price");
        element.textContent = "$" + this.displayPrice.toFixed(2);
    }

    dropdownMenu(){
        for (var i = 0; i < glaze.length; i++){
            addOption(this.elementID, glaze[i]);  
        }
    }
}

var cartTotal = 0;

function updateGlaze (element, roll){
    const priceChange = parseFloat(element.value);

    var e = document.getElementById(roll + "_roll");
    var text = e.options[e.selectedIndex].text;
    // console.log(value);
    // console.log(text);

    // console.log("p: " + element.value);
    // console.log("n:  " + x );
    rollDict[roll].glazingName = text;
    rollDict[roll].glazingPrice = priceChange;
    rollDict[roll].updatePrice(priceChange);
}

function updateSize (element, roll, size){
    let parent = document.querySelector("#" + roll + "-button-space");
    //change background color to yellow
    for (let button of parent.querySelectorAll("button")){
        button.style.backgroundColor = "white";
    }

    element.style.backgroundColor = 'lightgrey';
    rollDict[roll].packMultiplier = packDict[size];
    rollDict[roll].packSize = size;
    rollDict[roll].updatePrice(size);
}

const original = {glazing: "Keep original", price: 0.00}
const sugar = {glazing: "Sugar milk", price: 0.00}
const vanilla = {glazing: "Vanilla milk", price: 0.50}
const chocolate = {glazing: "Double chocolate", price: 1.50}

let glazeDict = {
    "Keep original": 0,
    "Sugar milk": 0,
    "Vanilla milk": 0.50,
    "Double chocolate": 1.50
}

var glaze = new Array(original, sugar, vanilla, chocolate);

function addOption(selectbox, glazingOption){
    var optn = document.createElement("OPTION");
    optn.text = glazingOption.glazing;
    optn.value = glazingOption.price;
    selectbox.options.add(optn);
}

function showPopup(roll){
    document.getElementById('PopUpText').textContent = "blahblahblah";
    setTimeout(() => document.querySelector('#PopUpText').classList.add('hide'), 3000);
    updateCart(roll);
}

var cartItems = []; //original_cart

function updateCart(roll){
    cartItems.push(rollDict[roll]);
    console.log(cartItems);

    let item = document.querySelector("#item-count");
    if (cartItems.length == 1){
        item.textContent = (cartItems.length + " item");
    }
    else{
        item.textContent = (cartItems.length + " items");
    }
    let totalCost = document.querySelector("#total-cost");

    cartTotal += rollDict[roll].displayPrice;
    // console.log("adding: " + rollDict[roll].displayPrice);
    // console.log("final: " + cartTotal);
    totalCost.textContent = ("Total: $" + cartTotal.toFixed(2));
}

//created 6 distinct roll objects--one for each type displayed in the shop
const originalRoll = new Roll(
    'original',
    2.49,
    "Keep original",
    0,
    1,
    "original_roll"
)

const appleRoll = new Roll(
    'apple',
    3.49,
    "Keep original",
    0,
    1,
    "apple_roll"
)

const raisinRoll = new Roll(
    'raisin',
    2.99,
    "Keep original",
    0,
    1,
    "raisin_roll"
)

const walnutRoll = new Roll(
    'walnut',
    3.49,
    "Keep original",
    0,
    1,
    "walnut_roll"
)

const chocolateRoll = new Roll(
    'choc',
    3.99,
    "Keep original",
    0,
    1,
    "choc_roll"
)

const strawberryRoll = new Roll(
    'strawberry',
    3.99,
    "Keep original",
    0,
    1,
    "strawberry_roll"
)

let rollDict = {
    "original": originalRoll,
    "apple": appleRoll,
    "raisin": raisinRoll,
    "choc": chocolateRoll,
    "strawberry": strawberryRoll,
    "walnut": walnutRoll
}

let packDict = {
    1: 1,
    3: 3,
    6: 5,
    12: 10
}