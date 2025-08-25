interface People {
  name: string;
  greet1: () => string;
  greet2(): string;
}

// both greet1 and greet 2 are the same thing just different ways of writting
/*
    Task-> create an object Person of this perople type
*/ 

const person: People = {
  name: "aditya agrawal",

  // Arrow function matches the property type exactly.
  // We avoid `this` and read from the variable instead.
  greet1: () => `Hello ${person.name}`,

  greet2() {
    return `Hi ${this.name}, welcome!`;
  }
};

console.log(person.greet1());
console.log(person.greet2());

// class implementing an interface
// THIS CONCEPT IS SOMETHOMES USEFUL WHEN WEE NEDD TO APPLY CONCEPTS like INHERITANCE
// Otherwise above methods can also be used

interface employee{
    name: string;
    empid: number;
    age:number;
    islegal():boolean
}

class Manager implements employee{
    name: string;
    empid: number;
    company:string
    age:number;
    constructor(name: string,empid: number,age:number){
        this.name=name;
        this.empid=empid;
        this.company="GOOGLE";
        this.age=age
    }

    islegal(){
        return this.age>18;
    }
}

let user=new Manager("Aditya Agrawal",1,20);
if(user.islegal()) 
    console.log("USER IS OF LEGAL AGE :"+`${user.company} welcomes ${user.name} as a Manager, Your EMP_ID is ${user.empid}`);
else 
    console.log("Manager is of illegal age");
// Note that extends and implements are different from each other 
// extends auto matically have the features of parent class we do not need to redefine them in child as we did with name and empid
// but in implements declaration of name and empid is necesaary we can add anything extra

// also in extends inside constructor of child class it is necessaary to call the constructor parent class(super())

// we prefer implements and interfaces because we can add functions also interfaces
