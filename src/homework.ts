// 1. Given the data below, define a type alias for representing users.
type Instructor = {
    name: string,
    age: number,
    company?: string
}

let users = [  
    {
        name:'Shoha Tsuchida',
        age:99,
        company:'Coding Temple'
    },  
    {
        name:'Dylan Katina',
        age:99
    }
];

// 2. Define a type for representing the days of week. Valid values are “Monday”, “Tuesday”, etc.
let daysOfTheWeek: ('Monday'|'Tuesday'|'Wednesday'|'Thursday'|'Friday'|'Saturday'|'Sunday');
daysOfTheWeek = 'Friday';
console.log(daysOfTheWeek)

// 3. Given the Person class below, create a getter for getting the full name of a person.

class Person {
    constructor(
        public firstName: string, 
        public lastName: string) {}

    printName = (): string => {
        return `${this.firstName} ${this.lastName}`
    }
    
}
const fullName = new Person('Adrienne', 'Daniels')
console.log(fullName.printName())

// 4. Create a new class called "Employee" that extends "Person" and adds a new property called salary. 

class Employee1 extends Person {
    constructor(
        public firstName: string, 
        public lastName: string, 
        public salary: number,
        
    ){
        super(firstName, lastName,)
    }

    printInfo = ():string => {
        return `${this.firstName} ${this.lastName} makes ${this.salary} a year.
        `
    }
};
const guy = new Employee1('Ronnie', 'Walton', 100_000)
console.log(guy.printInfo())

// 5. Given the data below, define an interface for representing employees:
// HINT: You'll need 2 interfaces.
let employee = {
    name:'Christian Askew',
    salary:1_000_000,
    address:{
        street:'Thieves st',
        city:'Seattle',
        zipCode: 98101
    }
};

interface Contact {
    name: string
    salary: number
    address: number
}

interface Address {
    street: string
    city: string
    zipCode: number
}

class Employee2 implements Contact, Address {
    constructor(
        public name: string,
        public salary: number,
        public address: number,
        public street: string,
        public city: string,
        public zipCode: number
    ) {}

    printInfo = (): string => { 
        return `${this.name} makes ${this.salary}, and lives at ${this.address} ${this.street} ${this.city}, ${this.zipCode} `
    }
}
const person = new Employee2('Jon Doe', 100_000, 1234, 'Made Up Lane', 'Nowhere', 55555)
console.log(person.printInfo())