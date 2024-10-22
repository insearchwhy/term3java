console.log("Hello World")

// x =5;

// var x = 5;

// let x = 5;

const x = 5;

console.log(x);

let fruits = [
    "apple",
    "banana",
    "mango"
];

fruits.forEach(fruit => {
    console.log(fruit.toLocaleUpperCase());
});

console.log(fruits);

mapTest = fruits.map((fruit) =>{
    return fruit.toLocaleLowerCase();
});

console.log(maptest);