console.log("Hello");
console.log("Apples");
console.log("This is a statement");
console.log("This is also a statement");

let myFunc = function() {
    console.log("This is a statement in a function");
};

myFunc();

let myFunc2 = function(name, weather) {
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today.");
};

myFunc2("Jesse", "windy");

let myFunc3 = function (name, weather = "raining") {
    console.log("Hello " + name + ".");
    console.log("It is "  + weather + " today.");
};

myFunc3("Jesse");

let myFunc4 = function (name, weather, ...extraArgs) {
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today.");
    for (let i = 0; i < extraArgs.length; i++) {
        console.log("Extra Arg: " + extraArgs[i]);
    }
};

myFunc4("Jesse", "sunny", "one", "two", "three");

let myFunc5 = function(name) {
    return ("Hello " + name + ".");
};

console.log(myFunc5("Jesse"));

let myFunc6 = function (nameFunction) {
    return ("Hello " + nameFunction() + ".");
};

console.log(myFunc6(function () {
    return "Jesse";
}));

let printName = function (nameFunction, printFunction) {
    printFunction(myFunc6(nameFunction));
}

printName(function() { return "Adam" }, console.log);

let myFunc7 = (nameFunction) => ("Hello " + nameFunction() + ".");
let printName2 = (nameFunction, printFunction) => printFunction(myFunc7(nameFunction));

printName2(function() { return "Jesse" }, console.log);

let messageFunction = function(name, weather) {
    let message = "Hello, " + name;
    if (weather == "sunny") {
        let message  = "It is a nice day";
        console.log(message);
    } else {
        let message = "It is " + weather + " today";
        console.log(message);
    }
    console.log(message);
}

messageFunction("Jesse", "raining");

let myGlobalVar = "apples";
let myFunc8 = function(name) {
    let myLocalVar = "sunny";
    let innerFunction = function() {
        return ("Hello " + name + ". Today is " + myLocalVar + ".");
    }
    return innerFunction();
};

console.log(myFunc8("Jesse"));

let messageFunction2 = function(weather) {
    let message = `It is ${weather} today`;
    console.log(message);
};

messageFunction2("raining");

let name2 = "Jesse";

if (name2 == "Jesse") {
    console.log("Name is Jesse");
} else
if (name == "Jaqui") {
    console.log("Name is Jaqui");
} else {
    console.log("Name is neither Jesse or Jaqui");
}

switch (name) {
    case "Jesse":
        console.log("Name is Jesse");
        break;
    case "Jaqui":
        console.log("Name is Jaqui");
        break;
    default:
        console.log("Name is either Jesse  or Jaqui");
        break;
}

let myArray = [100, "Jesse",  true];

for (let i = 0; i < myArray.length; i++) {
    console.log("Index " + i + ": " + myArray[i]);
}

console.log("---");

myArray.forEach((value, index) => console.log("Index " + index + ": " + value));

let products = [
    { name: "Hat", price: 24.5, stock: 10 },
    { name: "Kayak", price: 289.99, stock: 1 },
    { name: "Soccer Ball", price: 10, stock: 0 },
    { name: "Running Shoes", price: 116.50, stock: 20 }
];

let totalValue = products
    .filter(item => item.stock > 0)
    .reduce((prev, item) => prev + (item.price * item.stock), 0);

console.log("Total value: $" + totalValue.toFixed(2));