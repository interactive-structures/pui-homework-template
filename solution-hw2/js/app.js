class Roll {
    constructor(type, price, glazing, packSize, elementID) {
        this.rollType = type;
        this.rollPrice = price;
        this.glazingPrice = glazing;
        this.packMultiplier = packSize;
        this.displayPrice = price;

        this.elementID = document.querySelector("#" + elementID);
        this.dropdownMenu();
    }
    
    priceAdapt(price){
        this.rollPrice += price;
    }

    updatePrice(){
        this.displayPrice = (this.rollPrice + this.glazingPrice) * (this.packMultiplier); 
        console.log(this.rollPrice);
        console.log(this.glazingPrice);
        console.log(this.packMultiplier);
        console.log(this.displayPrice);
        console.log("");
        // Get the price element to update
        console.log(this.rollType)
        let element = document.querySelector("#" + this.rollType + "_price");
        element.textContent = "$" + this.displayPrice.toFixed(2);
    }

    dropdownMenu(){
        for (var i = 0; i < glaze.length; i++){
            addOption(this.elementID, glaze[i]);  
        }
    }
}

function updateGlaze (element, roll){
    const priceChange = parseFloat(element.value);
    rollDict[roll].glazingPrice = priceChange;
    rollDict[roll].updatePrice(priceChange);
}

function updateSize (element, roll, size){
    let parent = document.querySelector("#" + roll + "-button-space");
    //change background color to yellow
    console.log(parent.button);
    for (let button of parent.querySelectorAll("button")){
        button.style.backgroundColor = "white";
    }


    element.style.backgroundColor = 'lightgrey';
    rollDict[roll].packMultiplier = glazeDict[size];
    rollDict[roll].updatePrice(size);
}

const original = {glazing: "Keep original", price: 0.00}
const sugar = {glazing: "Sugar milk", price: 0.00}
const vanilla = {glazing: "Vanilla milk", price: 0.50}
const chocolate = {glazing: "Double chocolate", price: 1.50}

var glaze = new Array(original, sugar, vanilla, chocolate);

function addOption(selectbox, glazingOption){
    var optn = document.createElement("OPTION");
    optn.text = glazingOption.glazing;
    optn.value = glazingOption.price;
    selectbox.options.add(optn);
}

var cartItems = [];

function updateCart(element){

    cartItems.push();
}

const originalRoll = new Roll(
    'original',
    2.49,
    0,
    1,
    "original_roll"
)

const appleRoll = new Roll(
    'apple',
    3.49,
    0,
    1,
    "apple_roll"
)

const raisinRoll = new Roll(
    'raisin',
    3.49,
    0,
    1,
    "raisin_roll"
)

const chocolateRoll = new Roll(
    'choc',
    3.99,
    0,
    1,
    "choc_roll"
)

const strawberryRoll = new Roll(
    'strawberry',
    3.99,
    0,
    1,
    "strawberry_roll"
)

const walnutRoll = new Roll(
    'walnut',
    3.99,
    0,
    1,
    "walnut_roll"
)

let rollDict = {
    "original": originalRoll,
    "apple": appleRoll,
    "raisin": raisinRoll,
    "choc": chocolateRoll,
    "strawberry": strawberryRoll,
    "walnut": walnutRoll
}

let glazeDict = {
    1: 1,
    3: 3,
    6: 5,
    12: 10
}