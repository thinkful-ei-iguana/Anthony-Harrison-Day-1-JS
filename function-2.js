'use strict';

function jediName(firstName, lastName) {
  return lastName.slice(0, 3) + firstName.slice(0, 2);
}

console.log(jediName('Anthony', 'Bostic'));

function beyond(num) {
  if (num === Infinity) {
    console.log('And beyond');
  } else if (num !== Infinity && num > 0) {
    console.log('To infinity');
  } else if (num !== Infinity && num < 0) {
    console.log('To negative infinity');
  } else if (num === 0) {
    console.log('Staying home');
  }
}

beyond(6 / 0);

function decode(word) {
  let newArr = word.split('');
  for (let i of newArr) {
    if (i === 'a') {
      return newArr[1];
    } else if (i === 'b') {
      return newArr[2];
    } else if (i === 'c') {
      return newArr[3];
    } else if (i === 'd') {
      return newArr[4];
    } else {
      return ' ';
    }
  }
}

console.log(decode('droop'));

function daysInAMonth(month, leapYear) {
  switch (month) {
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    console.log(`The ${month} has 31 days`);
    break;
  case 'April':
  case 'June':
  case 'September':
  case 'November':
    console.log(`The ${month} has 30 days`);
    break;
  case 'Febuary':
    if (leapYear === true) {
      console.log(`The ${month} has 29 days`);
    } else {
      console.log(`The ${month} has 28 days`);
    }
    break;
  default:
    console.log('Must provide a valid month');
  }
}

console.log(daysInAMonth('Febuary', false));

function rockPaper(num) {
  const rock = 1;
  const paper = 2;
  const scissors = 3;
  const randomNo = Math.floor(Math.random() * 3) + 1;

  if (num > 3 || num < 1) {
    return new Error('Input must be a number 1 - 3');
  }
  switch (num) {
  case 1:
    console.log('rock');
    if (randomNo === 2) {
      console.log('You Lost');
    } else if (randomNo === 3) {
      console.log('You Win');
    }
    break;
  case 2:
    console.log('paper');
    if (randomNo === 3) {
      console.log('You Lost');
    } else if (randomNo === 1) {
      console.log('You Win');
    }
    break;
  case 3:
    console.log('scissors');
    if (randomNo === 1) {
      console.log('You Lost');
    } else if (randomNo === 2) {
      console.log('You Win');
    }
    break;
  }
}

console.log(rockPaper(3));
