console.log("Hello");
console.log("Apples");
console.log("This is a statement");
console.log("This is also a statement");
var myFunc = function () {
    console.log("This is a statement in a function");
};
myFunc();
var myFunc2 = function (name, weather) {
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today.");
};
myFunc2("Jesse", "windy");
var myFunc3 = function (name, weather) {
    if (weather === void 0) { weather = "raining"; }
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today.");
};
myFunc3("Jesse");
var myFunc4 = function (name, weather) {
    var extraArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extraArgs[_i - 2] = arguments[_i];
    }
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today.");
    for (var i = 0; i < extraArgs.length; i++) {
        console.log("Extra Arg: " + extraArgs[i]);
    }
};
myFunc4("Jesse", "sunny", "one", "two", "three");
var myFunc5 = function (name) {
    return ("Hello " + name + ".");
};
console.log(myFunc5("Jesse"));
var myFunc6 = function (nameFunction) {
    return ("Hello " + nameFunction() + ".");
};
console.log(myFunc6(function () {
    return "Jesse";
}));
var printName = function (nameFunction, printFunction) {
    printFunction(myFunc6(nameFunction));
};
printName(function () { return "Adam"; }, console.log);
var myFunc7 = function (nameFunction) { return ("Hello " + nameFunction() + "."); };
var printName2 = function (nameFunction, printFunction) { return printFunction(myFunc7(nameFunction)); };
printName2(function () { return "Jesse"; }, console.log);
var messageFunction = function (name, weather) {
    var message = "Hello, " + name;
    if (weather == "sunny") {
        var message_1 = "It is a nice day";
        console.log(message_1);
    }
    else {
        var message_2 = "It is " + weather + " today";
        console.log(message_2);
    }
    console.log(message);
};
messageFunction("Jesse", "raining");
var myGlobalVar = "apples";
var myFunc8 = function (name) {
    var myLocalVar = "sunny";
    var innerFunction = function () {
        return ("Hello " + name + ". Today is " + myLocalVar + ".");
    };
    return innerFunction();
};
console.log(myFunc8("Jesse"));
var messageFunction2 = function (weather) {
    var message = "It is " + weather + " today";
    console.log(message);
};
messageFunction2("raining");
var name2 = "Jesse";
if (name2 == "Jesse") {
    console.log("Name is Jesse");
}
else if (name == "Jaqui") {
    console.log("Name is Jaqui");
}
else {
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
var myArray = [100, "Jesse", true];
for (var i = 0; i < myArray.length; i++) {
    console.log("Index " + i + ": " + myArray[i]);
}
console.log("---");
myArray.forEach(function (value, index) { return console.log("Index " + index + ": " + value); });
var products = [
    { name: "Hat", price: 24.5, stock: 10 },
    { name: "Kayak", price: 289.99, stock: 1 },
    { name: "Soccer Ball", price: 10, stock: 0 },
    { name: "Running Shoes", price: 116.50, stock: 20 }
];
var totalValue = products
    .filter(function (item) { return item.stock > 0; })
    .reduce(function (prev, item) { return prev + (item.price * item.stock); }, 0);
console.log("Total value: $" + totalValue.toFixed(2));
