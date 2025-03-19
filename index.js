function hasTargetSum(array, target) {
  // Write your algorithm here
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
1)Create a function hasTargetSum that takes an array and a target sum as input.
2)Iterate through each number in the array.
3)For each number, find the difference between the target sum and the number.
4)Check if that difference exists in the numbers seen so far.
5)If found, return true; otherwise, continue checking.
6)If no such pair exists, return false.

*/

/*
The function hasTargetSum is designed to determine whether any two numbers in a given array
 add up to a specified target sum. Below is a step-by-step breakdown of the logic, 
 including two different approaches: a brute-force method and an optimized solution using a hash set.


*/

// You can run `node index.js` to view these console logs

function hasTargetSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] + arr[j] === target) {
              return true;
          }
      }
  }
  return false;
}


if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
