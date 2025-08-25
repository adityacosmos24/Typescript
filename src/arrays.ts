let num:number[] = [1, 2, 3, 4, 5];

function getmax(num: number[]) {
    let maxval:number = -100000;
    for (let i:number = 0; i < num.length; i++) {  // ✅ use num.length, not num.length()
        if (maxval < num[i]) maxval = num[i];
    }
    return maxval;
}

console.log(getmax(num)); // 5

// write a function that takes array of interface user as an input and return legal users

interface user{
    name:string,
    lastname:string,
    age:number
}

let arr:user[]=[{name:"aditya",lastname:"agrawal",age:19},{name:"shivam",lastname:"rao",age:17},{name:"dev",lastname:"pratap",age:16}]

let cnt:number=0;

function getlegaluser(arr:user[]):number{
    for(let i:number=0;i<arr.length;i++){
        if(arr[i]?.age>18) cnt++;
    }
    return cnt;
}

console.log(getlegaluser(arr));
