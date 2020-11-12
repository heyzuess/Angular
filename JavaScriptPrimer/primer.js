"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
else if (name2 == "Jaqui") {
    console.log("Name is Jaqui");
}
else {
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
/*
let myData = new Object();
myData.name = "Jesse";
myData.weather = "sunny";

console.log("Hello " + myData.name + ".");
console.log("Today is " + myData.weather + ".");
*/
var myData2 = {
    name: "Jesse",
    weather: "sunny",
    printMessages: function () {
        console.log("Hello " + this.name + ".");
        console.log("Today is " + this.weather + ".");
    }
};
myData2.printMessages();
var MyClass = (function () {
    function MyClass(name, weather) {
        this.name = name;
        this.weather = weather;
    }
    MyClass.prototype.printMessages = function () {
        console.log("Hello " + this.name + ".");
        console.log("Today is " + this.weather + ".");
    };
    return MyClass;
}());
var myData3 = new MyClass("Jesse", "sunny");
myData3.printMessages();
var MyClass2 = (function () {
    function MyClass2(name, weather) {
        this.name = name;
        this.weather = weather;
    }
    Object.defineProperty(MyClass2.prototype, "weather", {
        get: function () {
            return "Today is " + this._weather;
        },
        set: function (value) {
            this._weather = value;
        },
        enumerable: true,
        configurable: true
    });
    MyClass2.prototype.printMessages = function () {
        console.log("Hello " + this.name + ".");
        console.log("Today is " + this.weather + ".");
    };
    return MyClass2;
}());
var myData4 = new MyClass("Jesse", "sunny");
myData4.printMessages();
var MySubClass = (function (_super) {
    __extends(MySubClass, _super);
    function MySubClass(name, weather, city) {
        _super.call(this, name, weather);
        this.city = city;
    }
    MySubClass.prototype.printMessages = function () {
        _super.prototype.printMessages.call(this);
        console.log("You are in " + this.city);
    };
    return MySubClass;
}(MyClass2));
var myData5 = new MySubClass("Jesse", "sunny", "Los Angeles");
myData5.printMessages();
var NameAndWeatherLocation = require("./modules/NameAndWeather");
var DuplicateName_1 = require("./modules/DuplicateName");
var name = new NameAndWeatherLocation.Name("Jesse", "Iberri");
var loc = new NameAndWeatherLocation.WeatherLocation("raining", "Los Angeles");
var other = new DuplicateName_1.Name();
console.log(name.nameMessage);
console.log(loc.weatherMessage);
console.log(other.message);
var tempConverter_1 = require("./tempConverter");
var cTemp = tempConverter_1.TempConverter.convertFtoC(38);
console.log("The temp is " + cTemp + "C");
var tuple;
tuple = ["London", "raining", tempConverter_1.TempConverter.convertFtoC("38")];
console.log("It is " + tuple[2] + " degrees C and " + tuple[1] + " in " + tuple[0]);
var cities = {};
cities["London"] = ["raining", tempConverter_1.TempConverter.convertFtoC("38")];
cities["Paris"] = ["sunny", tempConverter_1.TempConverter.convertFtoC("52")];
cities["Berlin"] = ["snowing", tempConverter_1.TempConverter.convertFtoC("23")];
for (var key in cities) {
    console.log(key + ": " + cities[key][0] + ", " + cities[key][1]);
}
