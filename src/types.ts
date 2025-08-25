//types syntax is little diffrent than interface
//it can perform union and intersections


//INTERSECTION(&)
//->B=A&C  B SHOULD HAVE EVERYTHING IN A AND C
type employee={
    name:string,
    empid:number
}

type manager={
    name:string,
    lead:string
}

let teamlead:employee&manager={
    name:"Aditya",
    empid:123,
    lead:"AI TEAM"
}

console.log(teamlead);

//UNION(|)
//ETHIER COMPLETE ONE OF A OR B  
// COMPLETE A WITH SOME B 
// COMPLETE B WITH SOME A
// BOTH COMPLETE

//CREATE FUNCTION THAT TAKES EITHER A USER OR A ADMIN AS AN INPUT AND RETURN A STRING SAYING WELCOME

type user={
    name:string,
    userid:number
}

type admin={
    name:string,
    adminid:number
}

function greet(people:user|admin){
    console.log("HELLO "+people.name);
}

let people:user|admin={
    name:"aditya",
    userid:123,
    adminid:34
}

greet(people)