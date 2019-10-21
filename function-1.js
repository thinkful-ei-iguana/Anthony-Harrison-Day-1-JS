function yearOfBirth(age) {
    if(age < 0) {
        throw new Error("Age cannot be negative");
    }

    return 2019 - age;
}

function createGreeting(name, age) {
    if(typeof name !== 'string') {
        throw new Error("Name is undefined or not a string");   
    }
    if(typeof age !== 'number') {
        throw new Error("Age is undefined or not a number");   
    }

    return `Hi, my name is ${name} and I \'m ${age} years old on ${yearOfBirth(age)}`;
}

let testGreet = createGreeting('Harrison', 123);
console.log(testGreet);