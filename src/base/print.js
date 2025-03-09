var hello = "Hello World!";
console.log(hello);
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log("Runoob");
    };
    Site.prototype.add = function (a, b) {
        return a + b;
    };
    return Site;
}());
var obj = new Site();
obj.name();
var a = obj.add(5, 8);
console.log(a);
var list = [4, 5, 6];
list.forEach(function (val, idx) {
    // val: 当前值
    // idx：当前index
    // array: Array
    console.log(val, idx);
});
