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
*/
