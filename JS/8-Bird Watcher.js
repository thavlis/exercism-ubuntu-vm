/* 

Introduction
The for loop is one of the most commonly used statements to repeatedly execute some logic. In JavaScript, it consists of the for keyword, a header wrapped in round brackets and a code block that contains the body of the loop wrapped in curly brackets.

for (initialization; condition; step) {
  // code that is executed repeatedly as long as the condition is true
}
The initialization usually sets up a counter variable, the condition checks whether the loop should be continued or stopped and the step increments the counter at the end of each repetition. The individual parts of the header are separated by semicolons.

const list = ['a', 'b', 'c'];
for (let i = 0; i < list.length; i++) {
  // code that should be executed for each item list[i]
}
Defining the step is often done using JavaScript's increment or decrement operator as shown in the example above. These operators modify a variable in place. ++ adds one to a number, -- subtracts one from a number.

let i = 3;
i++;
// i is now 4

let j = 0;
j--;
// j is now -1
Instructions
You are an avid bird watcher that keeps track of how many birds have visited your garden. Usually, you use a tally in a notebook to count the birds but you want to better work with your data. You already digitalized the bird counts per day for the past weeks that you kept in the notebook.

Now you want to determine the total number of birds that you counted, calculate the bird count for a specific week and correct a counting mistake.

Note
To practice, use a for loop to solve each of the tasks below.

1. Determine the total number of birds that you counted so far
Let us start analyzing the data by getting a high-level view. Find out how many birds you counted in total since you started your logs.

Implement a function totalBirdCount that accepts an array that contains the bird count per day. It should return the total number of birds that you counted.

birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
totalBirdCount(birdsPerDay);
// => 34
2. Calculate the number of visiting birds in a specific week
Now that you got a general feel for your bird count numbers, you want to make a more fine-grained analysis.

Implement a function birdsInWeek that accepts an array of bird counts per day and a week number. It returns the total number of birds that you counted in that specific week. You can assume weeks are always tracked completely.

birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
birdsInWeek(birdsPerDay, 2);
// => 12
3. Fix a counting mistake
You realized that all the time you were trying to keep track of the birds, there was one hiding in a far corner of the garden. You figured out that this bird always spent every second day in your garden. You do not know exactly where it was in between those days but definitely not in your garden. Your bird watcher intuition also tells you that the bird was in your garden on the first day that you tracked in your list.

Given this new information, write a function fixBirdCountLog that takes an array of birds counted per day as an argument. It should correct the counting mistake and return the modified array.

birdsPerDay = [2, 5, 0, 7, 4, 1];
fixBirdCountLog(birdsPerDay);
// => [3, 5, 1, 7, 5, 1]
*/ 



// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
function totalBirdCount(birdsPerDay) {
    let totalBirds = 0
    for (let index = 0; index < birdsPerDay.length ; index++ ) {
        totalBirds +=  birdsPerDay[index]
        
    }
    return totalBirds 
  }
  //console.log(totalBirdCount([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1]))

  /**
   * Calculates the total number of birds seen in a specific week.
   *
   * @param {number[]} birdsPerDay
   * @param {number} week
   * @returns {number} birds counted in the given week
   */

let birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1]

function birdsInWeek(birdsPerDay, week) {
  let weeks = birdsPerDay.length / 7
  let matriz = []
  let semana = []
  
  for (let index = 0; index < birdsPerDay.length ; index++){
    semana.push(birdsPerDay[index])
    if (semana.length == 7) {
      matriz.push(semana)
      semana = []
    }
  }
  
  let semanaEscolhida = matriz[week - 1]
  const somaSemanaEscolhida = semanaEscolhida.reduce((acumulador, valorAtual)=> {
     return acumulador + valorAtual
  }, 0)

  return somaSemanaEscolhida
}

  console.log(birdsInWeek([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1], 2))

  
 // console.log([2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1], 2, 2)
  
  /**
   * Fixes the counting mistake by increasing the bird count
   * by one for every second day.
   *
   * @param {number[]} birdsPerDay
   * @returns {number[]} corrected bird count data
   */
  function fixBirdCountLog(birdsPerDay) {
    throw new Error('Please implement the fixBirdCountLog function');
  }
  

