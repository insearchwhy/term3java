console.log("start of the dice roller");

// simple dice roller function

function rollDice(diceSize = 6) {
    console.log(`Rolling a ${diceSize}-sided die...`);
    let diceSide = Math.ceil(Math.random() * diceSize);
    //console.log(diceSide);
    return diceSide;
}

// simple call with default parameter used
rollDice();

//overwriting the default parameter value
rollDice(diceSize=10);

//or
rollDice(20);





// specific dice roller function that calls the simple function
// Using function expression
const rollDice25 = function () {
    rollDice(25);
}

rollDice25();

//using arrow function / unanymous function
const rollDice15 = () => {
    return rollDice(15);
}

let diceSide15 = rollDice15();
console.log("The side you rolled in this 16 sided die is:" + diceSide15)

const rollDice8 = () => rollDice(8);
console.log("the side you rolled for the 8 sided die is:" + rollDice8());

