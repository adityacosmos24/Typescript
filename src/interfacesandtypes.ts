// earlier we did only number string any
//here we see how to deal with complex objects


function greet(user:{
    name:string,
    age:number// type declaration of objects
}){
    console.log(user);
}

let user={
    name:"Aditya Agrawal",
    age:21
}//hover over let user to see implicit types

greet(user)


// to make things easier interfaces and types were introduced
// types provide a little extra than interfaces

type addresstype=string|number;
interface companyinfo{
    name:string,
    address:addresstype
    pack:number
}

interface user{
    name:string,
    age:number,
    address: addresstype,
    company:companyinfo
}

let user2:user={
    name:"Aditya Agrawal",
    age:21,
    address:"s-29/406-c4,shivpur,varanasi",
    company:{
        name:"Google",
        address:"banglore",
        pack:50,
    }
}

function greetagain(user:user){
    let name=user.name;
    let age=user.age;
    let company=user.company.name;
    let pack=user.company.pack;

    console.log(`Hello ${name} we are exited to welcome you at ${company} at an anual package of ${pack} lacks`);
}

greetagain(user2);

/*
Difference between `type` and `interface` in TypeScript:

1. Syntax:
   - interface: uses `interface` keyword
   - type: uses `type` keyword

2. Extension:
   - interface: extendable using `extends`
   - type: extendable using intersection (`&`)

3. Declaration Merging:
   - interface: can be declared multiple times (they merge)
   - type: cannot be redeclared (gives error)

4. Usage Scope:
   - interface: best for defining object shapes and class contracts
   - type: more powerful → can define unions, intersections, tuples, primitives, etc.

5. Class Implements:
   - Both `type` and `interface` can be used with `implements`

6. Advanced Types:
   - interface: cannot directly represent union/tuple types
   - type: can represent unions, intersections, tuples, and primitive aliases

7. Convention:
   - Use `interface` for object structures
   - Use `type` for unions, primitives, and complex compositions








   Interfaces can be implemented with classes
*/

//interfaces vs abstract
// in case of abstract class we can give default implementation as well and interface cannot 
/*
    // -------------------- INTERFACE --------------------
// Interfaces in TypeScript can only define "contracts"
// They cannot provide default implementations of methods
interface Vehicle {
    start(): void;   // must be implemented
    stop(): void;    // must be implemented
}

// Example: Any class implementing Vehicle must define both start() and stop()
class Car implements Vehicle {
    start(): void {
        console.log("Car started!");
    }
    stop(): void {
        console.log("Car stopped!");
    }
}



// -------------------- ABSTRACT CLASS --------------------
// Abstract classes can define abstract methods (must be implemented by child)
// AND also provide default implementations of some methods
abstract class Machine {
    // Abstract method -> child classes MUST implement this
    abstract start(): void;

    // Default implementation -> child classes can override or use as is
    stop(): void {
        console.log("Machine stopped (default implementation).");
    }
}

// Example: WashingMachine implements Machine
class WashingMachine extends Machine {
    start(): void {
        console.log("Washing Machine started!");
    }
    // stop() is optional to override because a default exists in abstract class
}



// -------------------- USAGE --------------------
let myCar = new Car();
myCar.start(); // Car started!
myCar.stop();  // Car stopped!

let wm = new WashingMachine();
wm.start();    // Washing Machine started!
wm.stop();     // Machine stopped (default implementation).

 */
