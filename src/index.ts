let x:number=1;
console.log(x);


//->error->benift of typescript it helps you catch error at compile time
// let y:number=2;
// y="string";
// console.log(y);

let z:number|string=1;
z="string"
console.log(z);

//typs in ts->number,string,any

