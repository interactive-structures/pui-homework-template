class Roll {
    constructor(type, price, glazing, packSize, elementID) {
        this.rollType = type;
        this.rollPrice = price;
        this.glazingPrice = glazing;
        this.packSize = packSize;
        this.displayPrice = price;

        this.elementID = document.querySelector("#" + elementID);
        this.dropdownMenu();
    }
    
    priceAdapt(price){
        this.rollPrice += price;
    }

    updatePrice(element, packSize){
        const packMultiplier = 1;
        if (packSize == 3){
            packMultiplier = 3;
        }
        else if (packSize == 6) {
            packMultiplier = 5;
        }
        else {
            packMultiplier = 10;
        }
        element.style.backgroundColor = 'salmon';
        element.style.color = 'white';
        this.displayPrice = (this.basePrice + this.glazingPrice) * (packMultiplier); 
        console.log(this.displayPrice);
    }

    dropdownMenu(){
        for (var i=0; i<glaze.length; i++){
            addOption(this.elementID, glaze[i]);  
        }
    }
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

const one = {size: 1, price: "*1"}
const three = {size: 3, price: "*3"}
const six = {size: 6, price: "*5"}
const twelve = {size: 12, price: "*10"}

var quantity = new Array(one, three, six, twelve);

const btno1 = document.getElementById('o1');

// btno1.addEventListener('click', function onClick() {
    
//   });


const originalRoll = new Roll(
    'original',
    2.49,
    'keep original',
    1,
    "original_roll"
)

const appleVanillaRoll = new Roll(
    'apple',
    3.49,
    'vanilla milk',
    3,
    "apple_roll"
)

const raisinRoll = new Roll(
    'raisin',
    3.49,
    'keep original',
    3,
    "raisin_roll"
)

const chocolateRoll = new Roll(
    'chocolate',
    3.99,
    'double-chocolate',
    6,
    "choc_roll"
)

const strawberrySugarRoll = new Roll(
    'strawberry',
    3.99,
    'sugar milk',
    12,
    "strawberry_roll"
)

const walnutSugarRoll = new Roll(
    'walnut',
    3.99,
    'sugar milk',
    6,
    "walnut_roll"
)