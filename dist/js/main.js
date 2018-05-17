var HK;
(function (HK) {
    var HelloWorld = /** @class */ (function () {
        function HelloWorld(message) {
            this.message = message;
        }
        HelloWorld.prototype.output = function () {
            console.log("Test Hello world " + this.message);
        };
        HelloWorld.staticFunction = function () {
            console.log("This function is public static");
        };
        return HelloWorld;
    }());
    HK.HelloWorld = HelloWorld;
})(HK || (HK = {}));
var HK;
(function (HK) {
    var Hoge = /** @class */ (function () {
        function Hoge(value) {
            this.value = value;
        }
        Hoge.prototype.output = function () {
            console.log("Hoge is " + this.value);
        };
        return Hoge;
    }());
    HK.Hoge = Hoge;
})(HK || (HK = {}));
/// <reference path="./HelloWorld.ts"/>
/// <reference path="./Hoge.ts"/>
function main() {
    var h1 = new HK.HelloWorld("1");
    var h2 = new HK.HelloWorld("2");
}
main();

//# sourceMappingURL=main.js.map
