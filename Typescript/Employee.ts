// Class - Blueprint to create an object

// ES 6 - ECMA SCRIPT 6 - 2015

// Class is a collection of Properties (variable) and method(Function)

// ClassName should be similar to the file name (Employee.ts). Class name should be 
// Employee and it should always start with capital letter.

// Whenever you create a variable in class, we do not need to mention let/const keyword
// without () - variable in  a class
// Whenever you create a function in class, we do not need to "function" keyword
// with () - method

// Access Modifier - It is a permission to access variables and methods
// public - default - Can be accessible anywhere inside the project
// Private - Can only be accessible inside the same class
// Protected - Can be accessible only by the child classes
// readonly - Cannot be modified

// static - Doesn't belongs to the Object. It cannot be accessible by an object of a class.
// You can access static variable or method by using the Classname

// Ex: ClassName.key1, ClassName.info()

// Syntax to create a class

// export - import

/*

export class ClassName{

// Properties - variables - Locator (PW)

    key: datatype = value
    key1 : datatype
    private key2 : datatype
    static key3 : datatype = Value
    readonly key4 : datatype

    constructor - It is a special method which is use to initialize the properties of a class.
    It automatically called when an object of the class is created. It can take a paramert
    to initialize the properties of a class.

    constructor(key:datatype, key1:datatype...., key2, key4){
        key = key // key = 10
        key1 = key1 // key1 = 15
    
    }


const obj = new ClassName(10,15, 20, 40)






}



*/

export class Employee{

    empId: number 
    empName: string
    empAge : number
    private empSalary : number
    static companyName = "ABC"

    constructor(id:number, name:string, age:number, salary:number){
        // this - it is a keyword which refers to the current class object
       this.empId = id  // emp.empId = 101
       this.empName = name
       this.empAge = age
       this.empSalary  = salary
    }

    employeeInformation(){
        console.log(`Employee id is: ${this.empId} and Employee Name is ${this.empName}
            Employee Age is : ${this.empAge}
            Employee Salary is ${this.empSalary}
            Employee CompanyName is ${Employee.companyName}`);
    }

    static displayCompany(){
        console.log(Employee.companyName);
    }


}




const obj = new Employee(101, "Rahul", 30, 100000)
console.log(obj.empId);
obj.employeeInformation()
Employee.displayCompany()

const emp = new Employee(102, "John", 20, 200000)
console.log(emp.empId);
emp.employeeInformation()
Employee.displayCompany()

// Object- collection of key-value pair inside the {}

console.log(obj);


// Inheritance  - Acquiring the properties and methods from the parent
// extend - help us in performing inheritance
// super() - Calls the parent class constructor

class Manager extends Employee{

    bonus: number
    
    constructor(id:number, name:string, age:number, salary:number, bonus:number){
        super(id, name, age, salary)
        this.bonus = bonus
    }

    displayManagerInfo(){
        this.employeeInformation()
        console.log("Bonus is : ", this.bonus);
        
    }

}


const mgr = new Manager(101, "Joe", 27, 130000, 20000)
mgr.displayManagerInfo()
console.log(mgr.empId);








