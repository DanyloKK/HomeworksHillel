"use strict";
const user = {
    name: "Олександр",
    age: 30,
    location: {
        city: "Київ",
        country: "Україна"
    },
    email: "oleksandr@example.com",
    hobbies: ["читання", "подорожі", "спорт"],
    isMarried: false,
}
for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}

const array = [43, 12, 78, 56, 22, 91, 15, 87, 3, 64];
const newArray = array.filter(function (item) {
    if (item % 2 === 0) {
        return item
    }
})
console.log(newArray);

const contactsBook = {
    contacts: [
        {
            name: "John Smith",
            phoneNumber: "+1234567890",
            email: "john.smith@example.com"
        },
        {
            name: "Emily Johnson",
            phoneNumber: "+0987654321",
            email: "emily.johnson@example.com"
        },
        {
            name: "Michael Williams",
            phoneNumber: "+1122334455",
            email: "michael.williams@example.com"
        }
    ]
};



function findContact(name) {
    const findUser = contactsBook.contacts.find(item => item.name === name);

    if (findUser) {
        return findUser; // Повертає знайдений контакт
    } else {
        console.log("User not found"); // Виводить повідомлення, якщо контакт не знайдено
        return null
    }


}

const result = findContact("John Smith2");
console.log(result);

function addContact(name, phoneNumber, email) {
    const newContact = {
        name: name,
        phoneNumber: phoneNumber,
        email: email,
    }
    contactsBook.contacts.push(newContact);
    return contactsBook.contacts;


}

const newContacts = addContact("Danylo", "+242442", "domik12560@gmail.com");
console.log(newContacts);


/*
let company = {
    sales: [
        {name: 'John', salary: 1000},
        {name: 'Alice', salary: 600},

    ],

    development: {
        web: [
            {name: 'Peter', salary: 2000},
            {name: 'Alex', salary: 1800}
        ],

        internals: [
            {name: 'Jack', salary: 1300}
        ]
    }
};

function getSumOfWages() {

    let sumOfWages = 0;

    for (let key in company) {
        if (Array.isArray(company[key])) {
            const method = company[key].reduce(function (previousValue, item) {
                return previousValue + item.salary;
            }, 0)
        } else {
            for (let innerKey in company[key]) {
                sumOfWages += company[key][innerKey].reduce((sum, item) => sum + item.salary, 0);
            }
        }
    }
    return sumOfWages;
}


const result10 = getSumOfWages();
console.log(result10);
/*
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
console.log(result);


function Calculator(initialValue = +prompt('Please enter a number', '6')) {
    this.value = initialValue;
    this.hasError = this.value < 0;
    this.errorMessage = 'Error!';

    this.getSumOfNumbers = (funcValue = this.value) => {
        const hasInsideError = funcValue < 0;
        if (this.hasError || hasInsideError) return `getSumOfNumber: ${this.errorMessage}`;

        return funcValue === 1 ? 1 : funcValue + this.getSumOfNumbers(funcValue - 1);
    }

    this.getFactorial = (funcValue = this.value) => {
        const hasInsideError = funcValue < 0;
        if (this.hasError || hasInsideError) return `getFactorial: ${this.errorMessage}`;

        return funcValue === 1 ? 1 : funcValue * this.getFactorial(funcValue - 1);
    }

    this.getExponential = (value, stepValue = +prompt('Please enter step')) => {
        if (this.hasError) return `getExponential: ${this.errorMessage}`;

        switch (stepValue) {
            case 0:
                return 1;
            case 1:
                return value;
            default:
                return value * this.getExponential(value, stepValue - 1);
        }
    }

    this.getFibonachi = (value = this.value) => {
        if (this.hasError) return `getFibonachi: ${this.errorMessage}`;

        console.log('Value:', value)

        switch (value) {
            case 0:
                return 0;
            case 1:
                return 1;
            default:
                return this.getFibonachi(value - 1) + this.getFibonachi(value - 2);
        }
    }

}

const calculator = new Calculator(9);
console.log(calculator.getFibonachi(3));


let company = {
    sales: [
        {name: 'John', salary: 1000},
        {name: 'Alice', salary: 600},

    ],

    development: {
        web: [
            {name: 'Peter', salary: 2000},
            {name: 'Alex', salary: 1800}
        ],

        internals: [
            {name: 'Jack', salary: 1300}
        ]
    }
};

function getSumOfWages() {

    let sumOfWages = 0;

    for (let key in company) {
        if (Array.isArray(company[key])) {
            const method = company[key].reduce(function (previousValue, item) {
                return previousValue + item.salary;
            }, 0)
        } else {
            for (let innerKey in company[key]) {
                sumOfWages += company[key][innerKey].reduce((sum, item) => sum + item.salary, 0);
            }
        }
    }
    return sumOfWages;
}


const result10 = getSumOfWages();
console.log(result10);

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
