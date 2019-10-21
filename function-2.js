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
