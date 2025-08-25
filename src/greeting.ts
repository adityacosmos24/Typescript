//syntax of a function in ts
// function(a:type,b:type):type(return type){

//  }


let username:string="aditya";

function hello(username:string):void{
    console.log(`hello ${username}`);
}

hello(username);

// passing function inside a function with types
function delayedcall(fn:(username:string)=> string,username:string){
     setTimeout(()=>{console.log(fn(username));},1000);
}

function delayedhello(username:String):string{
    return "hello "+username;
}

delayedcall(delayedhello,username);

//above code 
// delay hello->takes username as a string and returns the hello username

//delaycall->takes 2 arguments
    //1) function with 1 argument and return type string
    //2) username a string value

    //in delay call settimeout is used to make sure that function that just console.log the return value of delayhello is executed after 1 sec

