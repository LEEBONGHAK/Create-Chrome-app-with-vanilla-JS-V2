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


// Recap homework
const calculation = {
    plus: function(a, b) {
        console.log(a+b);
    },
    min: function(a, b) {
        console.log(a-b);
    },
    div: function(a, b) {
        console.log(a/b);
    },
    pow: function(a, b) {
        console.log(a**b);
    }
}

calculation.plus(6,2);
calculation.min(6,2);
calculation.div(6,2);
calculation.pow(6,2);
console.log();


// return
const age = 96;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge);
console.log();


// Conditionals
//const age2 = prompt("How old are you?");    // 사용자에게 창을 띄울 수 있게 해줌
const age2 = "12";

console.log(typeof age2);       // type 보는 방법
console.log(typeof age2, typeof parseInt(age2));       // type 바꾸는 방법
console.log(isNaN(parseInt(age2)));       // isNaN() : number인지 아닌지 판단 함수 (return boolean)

if (isNaN(age2) || age2 < 0) {
    console.log("Please write a number.");
} else if (age2 < 18) {
    console.log("You are too young.");
} else if (age2 >= 18 && age2 <= 50) {
    console.log("You can drink.");
} else if (age2 > 50 && age2 <= 80){
    console.log("You should exercise.");
} else if (age2 > 80) {
    console.log("You can do whatever you want.");
} else {
    console.log("Whatever");
}
console.log();