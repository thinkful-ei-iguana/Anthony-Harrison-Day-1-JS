function createGreeting(name, age) {
    let yearOfBirth = 2019 - age;
    return `Hi, my name is ${name} and I \'m ${age} years old on ${yearOfBirth}`;
}

createGreeting("Harrison", 17);