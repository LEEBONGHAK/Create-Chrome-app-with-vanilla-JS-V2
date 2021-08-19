// alert("hi");

// type
console.log(54545);         // integer
console.log("lalala\n");      // string


// console.log()
console.log(5 + 2);
console.log(5 * 2);
console.log(5 / 2);
console.log();


// JS variables
const a = 5;
const b = 2;

const myName = "Lee";   // camel case

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);
console.log();


// const and let
/*
    const - 변수의 값을 바꿀 수 없음, 일반적으로 사용
    let - 변수의 값을 바꿀 수 있음, 필요에 따라 사용
    var - use in old version JS, 위의 두 선언법을 쓰는 편이 더 좋음
*/ 
let c = 5;
let name = "Kim";

console.log(c);
console.log("hello " + name);

c = 7;
name = "Lee";

console.log(c);
console.log("hello " + name);
console.log();


// Booleans - true or false / null
const amIFat = "true";  // string
const amIFat1 = true;    // boolean

console.log(amIFat1);

const amIFat2 = null;   // mean nothing
let something;          // undefined
console.log(amIFat2);
console.log(something);
console.log();


// array
const daysOfWeek = ["mon","tue","wed","thu","fri","sat","sun"];
console.log(daysOfWeek);

// Get Itme from Array
console.log("print friday : " + daysOfWeek[4]);
// Add one more thing to array
daysOfWeek.push("Lee");
console.log(daysOfWeek);

const nonense = [1,2,"hello", false, null, true, undefined, "Lee"];
console.log(nonense);
console.log();


// Objects
// before objects
const playerName = "Lee";
const playerPoints = 121212;
const playerHandsome = true;
const playerFat = "little bit";

// after objects
const player = {
    name : "Lee",
    points:121212,
    handsome:true,
    fat: "little bit"
}

console.log(player.name);
console.log(player.points);
console.log(player.handsome);
console.log(player.fat);

player.handsome = false;        // object의 property를 바꾸는 방법, 그러나 object를 바꾸는 건 안됨(by 'const')
console.log(player.handsome);

player.color = "red";       // property 추가 방법
console.log(player.color);
console.log();


// Functions
function sayHello(name, age) {
    console.log("Hello! my name is", name, "and I'm", age);
}

sayHello("Lee", 10);
sayHello("Kim", 11);
sayHello("Park", 15);
console.log();

function plus(a, b) {
    console.log(a, b);
    console.log(a + b);
}

plus();
/*
    undefined undefined
    NaN (==  Not a Number)
*/

const player2 = {
    name : "Lee",
    sayHello : function(personsName) {
        console.log("Hello", personsName);
    }
}

player2.sayHello("Kim");
console.log();