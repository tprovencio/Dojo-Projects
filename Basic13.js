//1. print 1-255
//Print1To255
//Print all integers from 1 to 255


//create function called print1to255()
//that takes no arguments

//create a loop from 1-256 that adds 1 if i < 256
// each time through the loop console.log i

function print1to255() {
    for (var i=1; i< 256;i=i+1) {
        console.log(i);
    }
}

print1to255();

//print1to255 odd mumbers only

function print1to255odd() {
    for (var i=1; i<256; i=i+1) {
        if( i%2!==0) 
        console.log(i)
    }
}
print1to255odd


function PrintIntsandSum0255() {
//PrintIntsAndSum0To255()
//Print integers from 0 to 255, and with each integer print the sum so far. 

var sum =0
for (var i=0;i<255; i++){
    sum=sum+i;
    console.log(sum);
}
}
//4. Iterate and Print Array
//Iterate through a given array, printing each value. 
//PrintArrayVals(arr)

function print1to255arr(Array)
for (var i=0; i<Array.length; i++)
console.log(arr[i]);

print1to255arr([1,3,4,5,6])

//5. Find and Print Max
//PrintMaxOfArray(arr)
//Given an array, find and print its largest element

function maxarr(arr){
    var max=0
    for (var i=0;i<=arr.length -1;i++){
    if (arr[i]>max)
    max=arr[i];
}
console.log(max);
}
maxarr([2,10,25,7,92,63])

//6. Get and Print Average
//PrintAverageOfArray(arr)
//Analyze an array’s values and print the average.

function avgarr(arr){
    var sum=0
    for (var i=0;i<=arr.length-1;i++){
        sum=sum +arr[i];
    }
    var avg = sum/arr.length;
    console.log(avg);
}
avgarr([4,4,16])


//7. Array with Odds
//ReturnOddsArray1To255()
//Create an array with all the odd integers between 1 and 255 (inclusive).  


function print1to255oddarr() {
    var newarr=[]
    for (var i=1; i<256; i++) {
        if( i%2!==0)
        newarr.push(i);
    }
    console.log(newarr);
}
print1to255oddarr();
        
//8. Square the Values
//SquareArrayVals(arr)
//Square each value in a given array, returning that same array with changed values. 

function square(arr);
var sum=0;
for (var i=0; i<=arr.length-1; i++){
    arr[i]=arr[i]*arr[i];
}
console.log(arr);
}

square([6,3,9,6,9])

//9. Greater than Y
//ReturnArrayCountGreaterThanY(arr, y)
//Given an array and a value Y, count and print the number of array values greater than Y. 

function ReturnArrayCountGreaterThanY(arr,y);
for (var i=0; i<=arr.length-1; i++){
    if (arr[i]>y)
    console.log(arr[i])


ReturnArrayCountGreaterThanY ([6,9,5,6,9])

