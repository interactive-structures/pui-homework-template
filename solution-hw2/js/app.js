class Roll {
    constructor(type, price, glazing, packSize, elementID) {
        this.rollType = type;
        this.rollPrice = price;
        this.rollGlazing = glazing;
        this.rollSize = packSize;

        this.element = document.querySelector(elementID);
        this.dropdownMenu();
    }
    
    priceAdapt(price){
        this.rollPrice += price;
    }

    dropdownMenu(){
        for (var i=0; i < glaze.length;++i){
            addOption(this.element.querySelector("#roll_list"), glaze[i]);  
        }
    }
}

const original = {glazing: "Keep original", price: 0.00}
const sugar = {glazing: "Sugar milk", price: 0.00}
const vanilla = {glazing: "Vanilla milk", price: 0.50}
const chocolate = {glazing: "Double chocolate", price: 1.50}

function addOption(selectbox, glazingOption){
    var optn = document.createElement("OPTION");
    optn.text = glazingOption.glazing;
    optn.value = glazingOption.price;
    selectbox.options.add(optn);
}

var glaze = new Array(original, sugar, vanilla, chocolate);

const oneRoll = {size: 1, price: "*1"}
const threeRolls = {size: 3, price: "*3"}
const sixRolls = {size: 6, price: "*5"}
const twelveRolls = {size: 12, price: "*10"}



const originalRoll = new Roll(
    'original',
    2.49,
    'keep original',
    1,
    "#item_1"
)

// const appleVanillaRoll = new Roll(
//     'apple',
//     3.49,
//     'vanilla milk',
//     3
// )

// const chocolateRoll = new Roll(
//     'chocolate',
//     3.99,
//     'double-chocolate',
//     6
// )

// const strawberrySugarRoll = new Roll(
//     'strawberry',
//     3.99,
//     'sugar milk',
//     12
// )