// Added js file to add dynamic nature 
/**
 TASKS: 
    - Create a variable and assign random number generator
    - Create a string same as dice image file name
    - Select the dice image element
    - Set the 'src' attribute
    - Do the same steps for 2nd dice image also
    - Make the winner

  */

// 🚩🚩🚩🚩🚩🚩 For 1st dice image 🚩🚩🚩🚩🚩🚩

// Task 1: Create a variable and assign random number generator
// we need numbers between 1 to 6
let randomNum1 = Math.floor(Math.random() * 6) + 1;
console.log('Dice 1 number: ' + randomNum1);

// Task 2: Create a string same as dice image file name
// creating a string using string litaral
let randomImg1 = `images/dice${randomNum1}.png`;

// Task 3: Select the dice image element
// selecting the 1st image element
let randomDice1 = document.querySelector('.img1');

// Task 4: Set the 'src' attribute
randomDice1.setAttribute('src', randomImg1)

// 🚩🚩🚩🚩🚩🚩 For 2nd dice image 🚩🚩🚩🚩🚩🚩

// Repeating the same steps as we did for 1st dice
let randomNum2 = Math.floor(Math.random() * 6) + 1;
console.log('Dice 1 number: ' + randomNum2);

let randomImg2 = `images/dice${randomNum2}.png`;
t
let randomDice2 = document.querySelector('.img2');

randomDice2.setAttribute('src', randomImg2)
