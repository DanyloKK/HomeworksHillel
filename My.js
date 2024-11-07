"use strict";
const carousel = document.querySelector('.carousel');
const slides = carousel.querySelector('.carousel__slide');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

const arrowLeft = document.getElementById(`prevButton`)
const arrowRight = document.getElementById(`nextButton`)

function hideArrow() {
   const firstSlide = document.querySelector(`.carousel__slide:first-of-type`);
   const lastSlide = document.querySelector(`.carousel__slide:last-of-type`);
   const currentSlide = document.querySelector(`.carousel__slide.active`);
    if (currentSlide === firstSlide) {
        arrowLeft.classList.add(`hidden`);
    } else {
        arrowLeft.classList.remove(`hidden`);
    }

    if (currentSlide === lastSlide) {
        arrowRight.classList.add(`hidden`);
    } else {
        arrowRight.classList.remove(`hidden`);
    }
}

function goToNextSlide() {
    let currentElement = document.querySelector(`.carousel__slide.active`);
    let nextElement = currentElement.nextElementSibling;
    let dot = document.querySelector(`.dot.active`);
    let nextDot = dot.nextElementSibling;
    if (nextElement) {
        dot.classList.remove(`active`);
        nextDot.classList.add(`active`)
        currentElement.classList.remove(`active`);
        nextElement.classList.add(`active`)
    }
    hideArrow()
}

function goToPrevElement() {
    let currentElement = document.querySelector(`.carousel__slide.active`);
    let prevElement = currentElement.previousElementSibling;
    let dot = document.querySelector(`.dot.active`);
    let prevDot = dot.previousElementSibling;
    if (prevElement) {
        dot.classList.remove(`active`);
        prevDot.classList.add(`active`)
        currentElement.classList.remove(`active`);
        prevElement.classList.add(`active`)
    }
    hideArrow()
}

nextButton.addEventListener(`click`, goToNextSlide);
prevButton.addEventListener(`click`, goToPrevElement);
/*
carousel.addEventListener("click",function (event){
    if(event.target === rightArrow){
        nextSlide.classList.add(`active`)
        nextSlide.classList.remove(`hidden`)
        activeSlide.classList.add(`hidden`)
        activeSlide.classList.remove(`active`)
        leftArrow.classList.remove(`arrow-hidden`)
    }
})

 */

/*
Array.from(findChildren).forEach(function (item,index){
    if(item.classList.contains(`carousel__slide`)){
        console.log(item)
    }
})

 */

/*
        alert(`Phone is invalid, he must start with +380XXXXXXX`);
        return;
    }
    if (emailRegExp.test(emailRegular)) {
        console.log(`Your email:${emailRegular}`)
    } else {
        alert(`Email is invalid`);
    }
  findForm.reset();
});


/*
const getButton = document.querySelector(`.address`);
let link = ""
getButton.addEventListener(`click`, () => {
    link = +prompt(`Insert link`);
})

document.querySelector(`.addressTo`).addEventListener(`click`, () => {
    if (link) {
        window.location.href = link;
    }
});


const findContainer = document.querySelector(`.Container`);
const findButton = document.querySelectorAll(`.Container button`)
findContainer.addEventListener(`click`, function (event) {
    const target = event.target;
    if (target.tagName === "BUTTON") {
        const buttonText = `You clicked on button:${target.textContent}`
        alert(buttonText);
    }
});

const url = "https://www.example.com/page?param1=value1&param2=value2";

// Отримання параметрів запиту
const searchParams = new URLSearchParams(window.location.search);
const param1 = searchParams.get("param1");
const param2 = searchParams.get("param2");

console.log("param1:", param1);
console.log("param2:", param2);


const findList = document.querySelector(`.Main__List`);
const findMenu = document.querySelector(`.Main`);
const findInput = document.querySelector(`.Input__Field`);
const findAddButton = document.querySelector(`.Add__Button`)
findAddButton.addEventListener(`click`, function (event) {
    let inputValue = findInput.value;
    if (inputValue) {
        const createEl = document.createElement(`li`);
        createEl.textContent = inputValue;
        findList.appendChild(createEl);
        findInput.value = "";
        const createBut = document.createElement(`button`)
        createBut.textContent = "Delete"
        createEl.appendChild(createBut);
        createBut.addEventListener("click",function (event){
            findList.removeChild(createEl);
        })
    }
})


/*
let multiply = 1;
const getBody = document.querySelector(`body`)
const table = document.createElement(`table`)
getBody.appendChild(table);
table.classList.add(`table`)

for (let i = 1; i < 11; i++) {
    const createElement = document.createElement(`tr`)
    table.appendChild(createElement);
    for (let j = 1; j < 11; j++) {
        multiply = i * j;
        const createEl = document.createElement(`td`)
        createElement.appendChild(createEl);
        createEl.textContent = multiply;
        createEl.classList.add(`td`)
        console.log(multiply);
    }
}

const getButton = document.querySelector(`.push`);
const findElement = document.querySelector(`p`);
getButton.addEventListener(`click`, function (event) {
    findElement.classList.toggle(`addColor`);
})

const arrayOfImages = ["First.jpg", "Second.jpg", "Third.jpg"];
const getRandom = Math.floor(Math.random() * arrayOfImages.length);
const getImage = arrayOfImages[getRandom];

const createElement = document.createElement(`img`)
createElement.setAttribute(`src`, `images/${getImage}`)
getBody.appendChild(createElement);
/*
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
    getInfo() {
        return `Name: ${this.name}, Age: ${this.age}, City: ${this.location.city}, Country: ${this.location.country}, Email: ${this.email}, Hobbies: ${this.hobbies.join(", ")}, Married: ${this.isMarried ? "yes" : "no"}`;
    }
}
console.log(user.getInfo());


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

*/
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

