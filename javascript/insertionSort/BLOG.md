# Insertion Sort

Insertion Sort is a sorting algorithm that is based off of comparing an array value to the one before it. Insertion sort takes in an array of integers and sorts them into ascending order.

## Pseudocode

 insertionSort(array){

  for  i = 0 to  array.length - 1
     min <-- i;
    for( j = i + 1 to  array.length
      if (array[j] < array[min]){
        min <-- j;

    let temp <-- array[min];
    array[min] <-- array[i];
    array[i] <-- temp;

## Trace

Sample Array: [8,4,23,42,16,15]
step 1 :
In the first step through of the insertion sort, we evaluate if there is a smaller number in the array than what is currently present in index 0. We find this smaller number right away in index 1. The minimum value gets updated to remember this index. At the end of the evaluation, the smaller number will be swapped with the current value in index i.

The result is the following: [ 8, 4, 15, 42, 16, 23 ]

step 2 :
The second step through the array evaluates the remaining values in the array to see if there is a smaller value other than the current position of i. 8 is the 2nd smallest number in the array, so it “swaps” with itself. The minimum value does not change at all during the iteration of this step.

The result is the following: [ 4, 8, 23, 42, 16, 15 ]

step 3 :
The third step through evaluates the remaining indexes in the array, starting at position 2. Both position 4 and 5 are smaller than the value in position 2. Each time a smaller number than the current minimum is found, the variable will update to the new smallest number. it will swap with position 2.

The result is the following: [ 4, 8, 15, 42, 16, 23 ]

step 4 :
The 4th step through on the array proves that 16 is the next smallest number in the array, and as a result, switches places with the 42.

The result is the following: [ 4, 8, 15, 16, 42, 23 ]

step 5 :
The 5th step through of the array only has one other index to evaluate. Since the last index value is larger than index 4, the two values will swap.

The result is the following: [ 4, 8, 15, 16, 23, 42 ]

step 6 :
On thte final iteratation

The result is the following: [ 4, 8, 15, 16, 23, 42 ]
