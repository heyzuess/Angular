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
if (name2 == "Jaqui") {
    console.log("Name is Jaqui");
} else {
    console.log("Name is neither Jesse or Jaqui");
}

switch (name2) {
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

/*
let myData = new Object();
myData.name = "Jesse";
myData.weather = "sunny";

console.log("Hello " + myData.name + ".");
console.log("Today is " + myData.weather + ".");
*/

let myData2 = {
    name: "Jesse",
    weather: "sunny",
    printMessages: function() {
        console.log("Hello " + this.name + ".");
        console.log("Today is " + this.weather + ".");
    }
};

myData2.printMessages();

class MyClass {
    name: string;
    weather: string;

    constructor(name, weather) {
        this.name = name;
        this.weather = weather;
    }

    printMessages() : void {
        console.log("Hello " + this.name + ".");
        console.log("Today is " + this.weather + ".");
    }
}

let myData3 = new MyClass("Jesse", "sunny");
myData3.printMessages();

class MyClass2 {
    name: string;
    private _weather: string;

    constructor(name, weather) {
        this.name = name;
        this.weather = weather;
    }

    set weather(value) {
        this._weather = value;
    }

    get weather() {
        return `Today is ${this._weather}`;
    }

    printMessages() {
        console.log("Hello " + this.name + ".");
        console.log("Today is " + this.weather + ".");
    }
}

let myData4 = new MyClass("Jesse", "sunny");
myData4.printMessages();

class MySubClass extends MyClass2 {
    city: string;

    constructor(name, weather, city) {
        super(name, weather);
        this.city = city;
    }

    printMessages() {
        super.printMessages();
        console.log(`You are in ${this.city}`);
    }
}

let myData5 = new MySubClass("Jesse", "sunny", "Los Angeles");
myData5.printMessages();

import * as NameAndWeatherLocation from "./modules/NameAndWeather";
import { Name as OtherName } from "./modules/DuplicateName";

let name = new NameAndWeatherLocation.Name("Jesse", "Iberri");
let loc = new NameAndWeatherLocation.WeatherLocation("raining", "Los Angeles");
let other = new OtherName();

console.log(name.nameMessage);
console.log(loc.weatherMessage);
console.log(other.message);

import { TempConverter } from "./tempConverter";

let cTemp = TempConverter.convertFtoC(38);

console.log(`The temp is ${cTemp}C`);

let tuple: [string, string, string];
tuple = ["London", "raining", TempConverter.convertFtoC("38")];
console.log(`It is ${tuple[2]} degrees C and ${tuple[1]} in ${tuple[0]}`);

let cities: { [index: string]: [string, string] } = {};

cities["London"] = ["raining", TempConverter.convertFtoC("38")];
cities["Paris"] = ["sunny", TempConverter.convertFtoC("52")];
cities["Berlin"] = ["snowing", TempConverter.convertFtoC("23")];

for (let key in cities) {
    console.log(`${key}: ${cities[key][0]}, ${cities[key][1]}`);
}