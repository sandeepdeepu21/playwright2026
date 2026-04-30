// Data types - Which defines what type of data a variable is storing

// Java
// int i = 10
// string s = "TS"

// Syntax:
// keyword(var/let/const) varaibleName :datatype(Optional) = value

let j = 10

// There are 2 types od datatypes:

// 1. Primitive data type - Only have a single value

    // 1. number
    // 2. string
    // 3. boolean
    // 4. null
    // 5. undefined
    // 6. union (|) - Combination of other data types ( number | string)
    // 7. any
    // 8. void - Function
    

    // 1. number - Combination of integer (98,-68) and floating point number (67.435435, -35.46)

    let num11  = 90.45

    let num22 = 45

    // typeof - Which return the datatype of a variable

    console.log(typeof num11);
    console.log(typeof num22);

    // What is difference between Type Annotation and Type inference

    // Whenever we define the datatype of a variable explicitly is known as Type Annoatation
    // Whenever JS & TS is able to identify the datatype of a variable implicitly is 
    // known as Type Inference

    // 2. string - Sequence of characters - string, text, word

    // 1. Single quote ('') - String Literal 
    // 2. Double quote (" ") - String Literal
    // 3. Backtick (``) - Template Literal

    let singleQuote = 'This is a single quote string'
    let doubleQuote = "This is a double quote string"

    // There are 2 main purpose of defining the string by using backtick

    // 1. multi-line string 

    let multiline = `This is 
    a multi line 
    string`

    // 2. For string parameterisation - ${varaibleName} - Calling a variable inside a
    // string. - Data driven testing in PW

    let age = 20

    let message = `Your age is ${age}`
    console.log(message);
    

    let char = 'c';

    // 3. boolean - true/false
    let isAdmin = false
    let isEmployee = true

    console.log(5>2);

    // 4. null - Intentional absence of a value
    let num: null = null

    // 5. undefined - YOu have defined a variable but have not assigned any value to it.
    let num3:undefined = undefined

    let num4 // Declaration

    // Note: 1. By default any type of variable will have a value as "undefined"
    // 2. By default the datatype of a variable will be "any"

    console.log(num4);

    // 6. (|) - is known as union

    let num5 :(number |string |boolean)= 90
    num5 = "TS"
    num5 = true

    // 7. any - it is free to accept any type of datatype 

    let num6 :any = 10
    num6 = "TS"
    num6 = true
    num6 = null
    num6 = undefined

    console.log(num6);
    
    
    
    
// 2. Non-primitive data type - Can store more than one value
    
    // 1. Array
    // 2. Function
    // 3. Object - {key : value}