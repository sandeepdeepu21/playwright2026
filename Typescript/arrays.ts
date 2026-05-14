// Arrays - []

let arr = [10]
console.log(typeof arr)

/*

1. Array of collection of data, which can have different data types
2. Array is an ordered collection. Means e can also access the element from the 
array by using the position(index)
3. Index starts with 0 in an array
4. Array is dynamic in size. 

*/

let array = [10,20, "Java", true, null, undefined, 34.90]

// [0:10, 1:20, 2:"Java", ....]
console.log(array)

// Syntax:
// arrayName[index] - It will return the value at the specified index

console.log(array[0]);
console.log(array[5]);

// Declaration of an array:

// 1. Using Array Literal - []
// 2. Using Array Constructor - new Array()


// 1. Using Array Literal - []

// Syntax:
// let arrayName:datatype[] = [value1, value2,....]

let arr1:number[] = [10,20,30,40,50]

let arr2:any[] = [10,"TS", "true", 30]

let Arr1 = [10,20, "Java", true, null, undefined, 34.90]
console.log(arr1)
console.log(Arr1)


// 2. Using Array Constructor - new Array()

// Syntax:
// let arrayName = new Array<datatype>(value1,value2,value3)

let arr4 = new Array<any>(10, "Java", 45.9)
console.log(arr4)

let arr6 = [10,20,30,40,50, "Pink", "orange", "TS"]

// length - It return the total number of element available inside an array

// using the loop to iterate through the element of an array


console.log(arr6.length) // 8 - [0-7]

// 1. Traditional for loop

for(let i=0; i<arr6.length; i++){
    console.log(arr6[i])   
}

console.log("***********************************");


// 2. for of loop - directly interact with the element

// Syntax:

let i;
let j = 10

/*

for(let element of arrayName)
{
  //body
}


*/

 let arr7 = [10,20,30,40,50, "Pink", "orange", "TS", 10, 20,30]


for(let ele of arr7){
    console.log(ele)
}


console.log("**************Method of an array****************");

let arr8 = [10,20,30,"TS", "pink"]

// 1. push(ele1, ele2, ele3,.....) - It adds the elements to the end of an array

// Syntax:
// arrayName.push(ele1, ele2)

console.log(arr8)
arr8.push(40,"JS")
console.log(arr8)

// 2. pop() - It removes the last element from the array and it return
// Syntax:
// arrayName.pop()
let lastElement = arr8.pop()
console.log(arr8);
console.log(lastElement)

// 1. What is difference between push() and unshift() in an array?
// 2. What is difference between pop() and shift() in an array?

// 3. unshift(ele1, ele2,....) - It adds the element at the beginning of array

arr8.unshift("Java", 50)
console.log(arr8);

// 4. shift() - It removes the first element from an array
arr8.shift()
console.log(arr8);


// splice(), slice(), indexOf(), lastIndexOf(), includes(), join()

// string











