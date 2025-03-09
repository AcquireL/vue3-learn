

const hello : string = "Hello World!"
console.log(hello)

class Site {
    name():void {
        console.log("Runoob")
    }
    add(a:number,b:number): number {
       return a+b
    }
}

var obj = new Site();
obj.name();
var a:Number = obj.add(5,8)
console.log(a)


let list = [4, 5, 6];
list.forEach((val, idx) => {
    // val: 当前值
    // idx：当前index
    // array: Array
    console.log(val,idx)
});
