function yearOfBirth(age) {
    if(age < 0) {
        throw new Error("Age cannot be negative");
    }
    return 2019 - age;
}

function createGreeting(name, age) {
    return `Hi, my name is ${name} and I \'m ${age} years old on ${yearOfBirth(age)}`;
}

createGreeting("Harrison", 1);

