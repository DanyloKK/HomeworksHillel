"use strict";
let userInfo = {
    name: "Danylo",
    age: 22,
    hobbies: 3,
    ageUp: function (age) {
        this.age += age;
        return this
    },
    ageDown: function (age) {
        this.age -= age;
        return this
    },
    ageActual: function () {
        console.log(this.age)
        return this
    }
}

const result = userInfo.ageUp(1).ageDown(6).ageActual();
console.log(result)


/*
function getSum(sum) {
    let number = sum;
    return function getInnerResult(result) {
        sum += result;
        return sum
    }

}

const getResult = getSum(0);
console.log(getResult(4));
console.log(getResult(5));


function getMultiply() {
    return (a) => {
        return (b) => {
            return a * b;
        }
    }
}

const result = getMultiply();
console.log(result(5)(6));

function getSum1(a) {
    return (b) => {
        return (c) => {
            return (d) => {
                return a + b / c * d;
            }
        }
    }
}

const final = getSum1(3);
const final2 = final(5)(3)(22);
console.log((final2));


function getUserResult() {
    let userComment;

    for (let i = 0; i < 10; i++) {
        userComment = prompt(`Insert Number bigger than 100!`)
        Number(userComment);

        if (userComment > 100) {
            console.log(`You inserted right number:${userComment}!`)
            return;
        }
        userComment = prompt(`You inserted wrong number, try again!`)
        if (userComment === null || userComment === "" || userComment < 100) {
            userComment = prompt(`Try again!`);
        }
        console.log("Input was cancelled or empty string");
    }

}

getUserResult();




const array = [2, 5, 22, 11, 66, 33];

function addToArray(array, number) {
    if (!array.includes(number)) {
        array.push(number);
        return array;
    } else {
        return array;
    }
}

const resultOfArray = addToArray(array, 42);
console.log(resultOfArray);
*/
