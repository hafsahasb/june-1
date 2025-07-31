//Task 1:Find a Number in a Sorted Array
function binarySearch(sortedArray, target){
    let start = 0;
    let end = sortedArray.length - 1;
    
    while(start <= end){
        const mid = Math.floor((start + end) / 2)
        let midNumber = sortedArray[mid]

        if (midNumber === target){
            return mid 
        }else if (midNumber < target){
            start = mid + 1 
        }else {
            end = mid - 1
        }
    }
    return -1
}
console.log(binarySearch([1, 3, 5, 7, 9], 5)) 
console.log(binarySearch([1, 3, 5, 7, 9], 9))   


//Task 2. Check If Value Exists
function exists(sortedArray,target){
    let start = 0;
    let end = sortedArray.length -1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2)
        let midNumber = sortedArray[mid]

        if ( midNumber == target){
            return true;
        }else if (midNumber < target){
            start = mid + 1;
        }else{
            end = mid -1
        }
    }
    return false;
 }
console.log (exists([2, 4, 6, 8, 10], 8))
console.log (exists([1, 3, 5], 5) ) 


//Task 3. Find First Occurrence
function firstOccurrence(sortedArray,target) {
    let start = 0;
    let end = sortedArray.length - 1;
    let result = -1 ;

    while (start <= end) {
        const mid = Math.floor ((start + end)/2);
        const midNumber = sortedArray [mid];

        if (midNumber == target) {
            result = mid;
            end = mid - 1;
        }else if (midNumber < target) {
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }
    return result;
}
console.log (firstOccurrence([1, 2, 2, 2, 3], 2)) 

//Task 4. Find Last Occurrence
function lastOccurrence(sortedArray, target){
    let start = 0;
    let end = sortedArray.length - 1;
    let result = -1 ;

    while (start <= end) {
        const mid = Math.floor ((start + end)/2);
        const midNumber = sortedArray [mid];

        if (midNumber == target) {
            result = mid;
            end = mid + 1;
        }else if (midNumber < target) {
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }
    return result;
}
console.log (lastOccurrence([1, 2, 2, 2, 3], 2))


//Task 5. Find Insert Position
//given a sorted array, return the index where a number should be inserted to keep the array sorted (like lower_bound).
    function insertedPosition(sortedArray, target) {
        let start = 0;
        let end = sortedArray.length - 1;
    
    while (start <= end){
        const mid = Math.floor ((start + end) /2);
        const midNumber = sortedArray [mid];

         if (midNumber == target) {
            return mid ;
        }else if (midNumber < target) {
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }
    return result;
}
console.log (insertPosition([1, 3, 5, 6], 5)) 
console.log (insertPosition([1, 3, 5, 6], 2)) 


// Task 6. Search a Word in a Dictionary
// Search for a word in a sorted list of words. Return index or -1.
function findWord(sortedArray, word) {
    let start = 0;
    let end = sortedArray.length - 1;
    let result = -1; 

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);
        const midWord = sortedArray[mid]; 

        if (midWord === word) {
            return mid; 
        } else if (midWord < word) {
            start = mid + 1; 
        } else {
            end = mid - 1; 
        }
    }
    return result; 
}
console.log(findWord(["apple", "banana", "cherry"], "banana")); // Output: 1
console.log(findWord(["apple", "banana", "cherry"], "grape")); // Output: -1


//Task 7. Guess the Number (between 1 and N)
// Use binary search logic to guess it using a simulated isTooHigh() and isTooLow() API.

    function findSecretNumber(sortedArray) {
        let start = 1;
        let end = 100;

        while (start <= end){
            const mid = Math.floor ((start + end)/2);

        if (mid == word) {
            return mid;
        }else if (mid < word) {
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }
    return -1;
}
// console.log (findSecretNumber(1, 100, secret = 42) ) 

//Task 8. Find Smallest Number ≥ Target
//Return the index of the smallest number in the array that is greater than or equal to the target (ceiling).
    function findCeiling(sortedArray, target){


    }
console.log (findCeiling([1, 3, 5, 7], 4))     // 2  5 is the ceiling➞


//Task 9. Find Largest Number ≤ Target
//Return the index of the largest number in the array that is less than or equal to the target (floor).
    function findFloor(sortedArray, target){
        let start = 0;
        let end = sortedArray.length -1;
        let result = -1;

        while (start <= end){
            const mid = Math.floor ((start + end)/2);
            const midNumber = sortedArray [mid];
        }if(midNumber == target){
            return mid;
        }else if(midNumber < target){
            start = mid + 1;
        }else {
            end = mid - 1;
        }
        return result;
    }
console.log (findFloor([1, 3, 5, 7], 4))


//Task 10. Square Root (Integer Part Only)
//Use binary search to find the integer part of the square root of a positive number.
    function sqrtFloor(squareRoot, integer){
        let star = 0;
        let end = sortedArray
    }
console.log (sqrtFloor(16))  
console.log (sqrtFloor(20))
console.log (sqrtFloor(1))




/*
 Reinforce These Key Concepts:
•Why binary search only works on sorted data
-because it is arranged in ascending order (data is sorted) making it easier to compare. Also it uses the divide and conquer method which is very efficent in sorted data.
•What changes between returning index vs. value vs. boolean
returning index means to return the exact position of the value(it starts from 0). Returning value means returning value itself. Returning boolean means returning either true or false. 
•How to update low, high, and mid carefully
-First we must set the first index as start/left and end/right at the last index, then we calculate the mid point by adding the start and end together thn dividing it by 2. This will then be our mid value
if value is equal to mid then we found our target, if it is greater than the mid then we it means that the target is in the right of the array sonwe update the end to mid +1. While if the value is less than the mid it means that it is at the start so we will update the start to mid -1
•How edge cases behave (e.g., empty arrays, all duplicates, target not found)
- This will return null or -1
*/