function repeat(fn, n) {
    for(i = 0; i < n; i++) {
        fn();
    }
}

function hello() {
    console.log("Hello World");
}

function goodbye() {
    console.log("Goodbye World");
}

// repeat(goodbye, 5);

function filter(arr, fn) {
    // TASK: Define your function here
    let newArr = [];

    for(i = 0; i < arr.length; i++) {
        for(j = 0; j < arr[i].length; j++) {
            if(arr[i][j] === "R") {
                newArr.push(arr[i]);
            }
        }
    }
    return newArr;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;

    return function(location) {
        warningCounter++;
        console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
    }
}

// const rocksWarning = hazardWarningCreator('Rocks on the Road');
// rocksWarning('Main St and Pacific Ave');

let turtleArray = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
// let newArray = [];

const result = turtleArray.filter(coordinates => {

    if(coordinates[0] >= 0 && coordinates[1] >= 0) {
        return coordinates;
    }

});

const result_2 = turtleArray.map(coordinates => {

    // if(coordinates[0] >= 0 && coordinates[1] >= 0) {
    //     return coordinates;
    // }
    return coordinates[0] + coordinates[1];

});

let counter = 1;
result_2.forEach(num => {
    // let counter = counter++;
    if(num === 1) {
        console.log(`Movement #${counter}: ${num} step`);
    } else {
        console.log(`Movement #${counter}: ${num} steps`);
    }
    counter++;
});

