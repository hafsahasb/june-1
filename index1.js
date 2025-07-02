/*Algorithm
 Linear Search: explain linear search.
-It is a sequential search algorithm that starts at one end and goes through 
each each elemen on list until desired element is found.

1.	Pre-Flight Explanation
Write a 1–2-paragraph plain-English description of your approach and why it does exactly one pass over N items (O(N)).
- I iterate through each element sequentially,once , then compare it to the target value.
If match is found, I show the index of the element. if not I continue till I reach the end then indicat that it's not found.
-It exactly goes over each element once because making the time complexity O(N). N is number of elements in array

4.	Manual Dry-Run (Trace Table)
Pick one non-trivial test case and hand-trace every iteration, showing how your running variables change.

5.	Targeted Code Review
Be ready to answer:
•	“How many iterations for an array of length 1,000?”
-Worst-case scenario is 10000 iterations. That is if element is last or not found.
•	“What if the array is empty?”
-
•	“Why isn’t there a nested loop here?”
-Because it will increase the time complexity.

6.	Reflection Journal
Write a brief note:
“Linear time means work grows in direct proportion to N….”
This means that linear time taken for the program to run increases as the size of input grows.
*/



//Task 1: Sum an Array
function sumArray(arr) {
  let total = 0;          
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];                    
  }
  return total;
}

//Test cases (write these first):
console.assert(sumArray([1,2,3]) === 6,      '3 additions → O(N)');
console.assert(sumArray([-1,1,0]) === 0,     '3 additions → O(N)');
console.assert(sumArray([]) === 0,           '0 additions → O(N)');

/*quesstion:
1. What should total be initialized to, and what happens if you start it at arr[0] instead of 0?
-The total should be initialized to 0. Arr[0] means the array is empty so if I start with 
it it would only work if the array is actually empty otherwise, it will dispaly an error.

2. How many additions occur for an array of length N? What about N=0?
- N additions occur for arr[N] and 0 additions for arr[0].
*/


//Task 2: Find the Maximum
function findMax(arr) {
  if (arr.length === 0) return undefined;     
  let max = arr[0];                         
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];  //update max if current element is greater                       
    }
  }
  return max;
}

//Test cases:
console.assert(findMax([5,3,9,1]) === 9,      '4 comparisons → O(N)');
console.assert(findMax([-2,-5,-1]) === -1,    '3 comparisons → O(N)');
console.assert(findMax([]) === undefined,     '0 comparisons → O(N)');

/*question:
1. Why do we return undefined for an empty array?
-Because there is no max value in an empty array.
2. Why start i at 1 instead of 0?
-Because we already initialized max with the first the first element so we now only need to do the rest.
*/



//Task 3: Linear Search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {           // check if selected element matche target         
      return i;                         
    }
  }
  return -1;  // if target is not found                        
}

//Test cases:
console.assert(linearSearch([10,20,30], 20) === 1,   '2 checks → O(N)');
console.assert(linearSearch(['a','b'], 'c') === -1,  '2 checks → O(N)');
console.assert(linearSearch([], 5) === -1,           '0 checks → O(N)');

/*question:
1. What’s the best-case number of checks vs. worst-case?
- Best-case no of check is 1(first element) and worst-case is -1(if element is last or isn't found)
2. Why return -1 when you don’t find the target?
- To show that target is not in the array
*/


//Task 4: Count Occurrences
function countOccurrences(arr, value) {
  let count = 0;                        
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == value) {                            
      count ++;      //increment count if match is found                       
    }
  }
  return count;
}

//Test cases:
console.assert(countOccurrences([1,2,1,3], 1) === 2,  '4 checks → O(N)');
console.assert(countOccurrences(['x','y'], 'z') === 0, '2 checks → O(N)');
console.assert(countOccurrences([], 0) === 0,          '0 checks → O(N)');
/*question:
1. How is this different from linearSearch?
- This check the no of times a number appers while linearSearch finds the index numbers are equal
2. What does the final count represent if the value never appears?
- It will show 0
*/


//Task 5: Filter Positive Numbers
function filterPositives(arr) {
  let result = [];                       
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {                            
     result.push (arr[i]) ;                                
    }
  }
  return result;
}

//Test cases:
console.assert(
  JSON.stringify(filterPositives([3,-1,0,5])) === JSON.stringify([3,5]),
  '4 checks, 2 pushes → O(N)');
console.assert(
  JSON.stringify(filterPositives([-2,-5])) === JSON.stringify([]),
  '2 checks → O(N)');
console.assert(
  JSON.stringify(filterPositives([])) === JSON.stringify([]),
  '0 checks → O(N)');

/*  question:
1. Why build a new array instead of filtering the original in place?
-So as to keep the original array unchanged.
2. If you get zero positives, how many pushes and checks ran?
- N checks, 0 pushes
*/



//Task 6: Laundry Sorter
function groupByColor(clothes) {
const groups = {};                  // empty object {}
  for (let i = 0; i < clothes.length; i++) {
    const color = clothes[i].color;
    if (!groups[color]) {
      groups[color] =[] ;            
    }
    groups[color].push(clothes[i]);
  }
  return groups;
}

//testcase 
const input = [
  { name: 'sock',  color: 'red'  },
  { name: 'shirt', color: 'blue' },
  { name: 'hat',   color: 'red'  },
];


const expected = {
  red: [
    { name: 'sock',  color: 'red' },
    { name: 'hat',   color: 'red' },
  ],
  blue: [
    { name: 'shirt', color: 'blue' }
  ]
};
console.assert(
JSON.stringify(groupByColor(input)) === JSON.stringify(expected),
  '3 items → 3 group checks & pushes → O(N)'
);
console.assert(
  JSON.stringify(groupByColor([])) === JSON.stringify({}),
  'empty hamper → {}'
);

/*question:
1. What data structure holds your groups, and why?
- Object data structure, because it is accessed by keys in this case color
2. How do you handle a color you’ve never seen before?
- A new empty array gets created for the color in groups object.
*/