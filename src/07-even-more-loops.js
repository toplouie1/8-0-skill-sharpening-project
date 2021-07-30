/**
 * shoutForLoop()
 * ---------------------
 * Takes in an array and returns a new array, adding "!" to each string.
 *
 * NOTE: You must use a `for` loop.
 *
 * @param {string[]} array
 * @returns {string[]}
 *
 * EXAMPLE:
 *  shoutForLoop([ "A", "Very", "Happy", "Array" ]);
 *  //> [ "A!", "Very!", "Happy!", "Array!" ];
 */

 function shoutForLoop(array) {
   let newArr = [];
   for (let i =0; i < array.length; i++){
     let arr = array[i];
     let ok = '!';
     newArr.push(arr + ok);
   }
   return newArr;

 }

 /**
  * shoutWhileLoop()
  * ---------------------
  * Takes in an array and returns a new array, adding "!" to each string.
  *
  * NOTE: You must use a `while` loop.
  *
  * @param {string[]} array
  * @returns {string[]}
  *
  * EXAMPLE:
  *  shoutWhileLoop([ "A", "Very", "Happy", "Array" ]);
  *  //> [ "A!", "Very!", "Happy!", "Array!" ];
  */

 function shoutWhileLoop(array) {
   let answer = [];
   let count = 0;
   while (count < array.length) {
     answer.push(array[count] + "!")
     count++
   }
   return answer;
  }
 

 /**
  * shoutForOfLoop()
  * ---------------------
  * Takes in an array and returns a new array, adding "!" to each string.
  *
  * NOTE: You must use a `for...of` loop.
  *
  * @param {string[]} array
  * @returns {string[]}
  *
  * EXAMPLE:
  *  shoutForOfLoop([ "A", "Very", "Happy", "Array" ]);
  *  //> [ "A!", "Very!", "Happy!", "Array!" ];
  */
 function shoutForOfLoop(array) {
  let newArr = [];
  for (let arr of array ){
     let ok = '!';
     newArr.push(arr + ok);
   }
   return newArr;
 }
 
 /**
  * sumArray()
  * ---------------------
  * Returns the sum of all values in the array.
  * @param {number[]} array
  * @returns {number}
  *
  * EXAMPLE:
  *  sumArray([ 10, 0, 10, 11 ]);
  *  //> 31
  */
 function sumArray(array) {
   let num = 0;
   for (let arr of array){
     num += arr;
   }
   return num;
 }
 
 /**
  * oddArray()
  * ---------------------
  * Returns a new array of only the odd numbers from the original array.
  * @param {number[]} array
  * @returns {array}
  *
  * EXAMPLE:
  *  oddArray([ 11, 15, 20, 22, 37 ]);
  *  //> [ 11, 15, 37 ]
  */
 function oddArray(array) {
   let newArr = [];
   for (let arr of array ){
     if (arr % 2 == !0){
       newArr.push(arr);
     }
   }
   return newArr;
 }
 
 /**
  * evenArray()
  * ---------------------
  * Returns a new array of only the even numbers from the original array.
  * @param {number[]} array
  * @returns {array}
  *
  * EXAMPLE:
  *  evenArray([ 11, 15, 20, 22, 37 ]);
  *  //> [ 20, 22 ]
  */
 function evenArray(array) {
  let newArr = [];
  for (let arr of array ){
    if (arr % 2 == 0){
      newArr.push(arr);
    }
  }
  return newArr;
}
 
 /**
  * findSmallest()
  * ---------------------
  * Returns the smallest number from the array.
  * @param {number[]} array
  * @returns {number}
  *
  * EXAMPLE:
  *  findSmallest([ 0, 11, -2, 5 ]);
  *  //> -2
  */
 function findSmallest(array) {
  let smallNum = 0;
  smallNum =  Math.min(...array);
  return smallNum;
 }
 
 /**
  * findLargest()
  * ---------------------
  * Returns the largest number from the array.
  * @param {number[]} array
  * @returns {number}
  *
  * EXAMPLE:
  *  findLargest([ 0, 11, -2, 5 ]);
  *  //> 11
  */

 function findLargest(array) {
  let smallNum = 0;
  smallNum =  Math.max(...array);
  return smallNum;
 }
 /**
  * findEqual()
  * ---------------------
  * Returns whether or not the `selected` value can be found in the array.
  * @param {number[]} array
  * @param {number} selected
  * @returns {number}
  *
  * EXAMPLE:
  *  findEqual([ 0, 11, -2, 5 ], 11);
  *  //> true
  *
  *  findEqual([ 0, 11, -2, 5 ], 9);
  *  //> false
  */

 function findEqual(array, selected) {
  let num = false;
  for (let i = 0; i< array.length; i++){
    if (array[i] === selected ){
      return true;
    }else {
      num = false;
    }
  }
  return num;
 }
 
 /**
  * removeDuplicates()
  * ---------------------
  * Returns a new array like the original array except there are no duplicates. The numbers in the array should be ordered similarly.
  *
  * HINT: The `.includes()` method could help here.
  *
  * @param {number[]} array
  * @returns {number[]}
  *
  * EXAMPLE:
  *  removeDuplicates([ 1, 11, 2, 3, 4, 4, 2, 11, 9 ]);
  *  //> [ 1, 11, 2, 3, 4, 9 ]
  */
 
 function removeDuplicates(array) {
   
   let yesArr = [];
   for (let i = 0; i< array.length; i++ ){
     if(!yesArr.includes(array[i])){
       yesArr.push(array[i]);
     }
   }
   return yesArr;

 }


 
 // Do not change any code below this line.
 module.exports = {
   shoutForLoop,
   shoutWhileLoop,
   shoutForOfLoop,
   sumArray,
   oddArray,
   evenArray,
   findSmallest,
   findLargest,
   findEqual,
   removeDuplicates,
 };