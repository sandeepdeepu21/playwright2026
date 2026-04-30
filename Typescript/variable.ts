// Variable - storage/container  - Which store either a single value or multiple values

// There are 3 ways in which we can delcare a variable (JS & TS):

// Syntax:
// keyword(var/let/const) variableName = value - JS
// keyword(var/let/const) variableName :datatype(optional)= value - TS

// var - In Modern JS & TS we do not use var keyword > version 5 - ES 6 (ECMA SCRIPT 6 - 2015)
// let - If the value of the varaible can change at any point of time
// const - To declare a constant variable 

// scope of variable:

// 1. Local scoped variable - When you try to declare a variable inside {...}
// 2. Global scoped variable - When you try to declare a variable outside of the {...}


let lang1 = "TS" // Global scope variable
{
    let lang1 = "JS" // Local scoped variable  
    console.log(lang1);
    
}
console.log(lang1) // TS

// var - 

// 1. scope - functional or global
// 2. Whenever you declare a variable using "var" keyword it 
// can be redeclared and can also re-initialised.
// 3. Hoisting: We can access the variable before it's declaration as well.
// 4. It is not mandatory to assign the variabe at the time of declaration

//console.log(num1);

var num2

num2 = 90


var num1 =10

num1 = 89 // Re-initialisation

var num1 = 90
var num1 = 345345
var num1 = 345345345350000

console.log(num1);




// var name1 = "Java"
function naem2(){
    var name1 = "Python" // Local scoped
    return 0.9
}

// console.log(name1) // 

// let 

// 1. Scope - Block level {...} scope or global scope
// 2. Whenever you declare a variable using "let" keyword it 
// cannot be redeclared but can be re-initialised.
// 3. Hoisting: We cannot access the variable before it's declaration.
// 4. It is not mandatory to assign the variabe at the time of declaration

// console.log(abc);


let abc // Global

abc = "Python" // re-initialised

{
    const i = 10 // Local
}
// console.log(i);

const a = 10 // Global
// let a = 90


//const
// 1. Scope - Block level {...} or global
// 2. Whenever you declare a variable using "const" keyword it 
// cannot be redeclared and cannot be re-initialised.
// 3. Hoisting: We cannot access the variable before it's declaration.
// 4. It is mandatory to assign the variabe at the time of declaration

// console.log(b);

const b = 1000



// var 

// 1. scope - functional or global
// 2. Whenever you declare a variable using "var" keyword it 
// can be redeclared and can also re-initialised.
// 3. Hoisting: We can access the variable before it's declaration as well.
// 4. It is not mandatory to assign the variabe at the time of declaration


// let 

// 1. Scope - Block level {...} scope or global scope
// 2. Whenever you declare a variable using "let" keyword it 
// cannot be redeclared but can be re-initialised.
// 3. Hoisting: We cannot access the variable before it's declaration.
// 4. It is not mandatory to assign the variabe at the time of declaration

// const

// 1. Scope - Block level {...} or global
// 2. Whenever you declare a variable using "const" keyword it 
// cannot be redeclared and cannot be re-initialised.
// 3. Hoisting: We cannot access the variable before it's declaration.
// 4. It is mandatory to assign the variabe at the time of declaration


// Diff between var, let and const