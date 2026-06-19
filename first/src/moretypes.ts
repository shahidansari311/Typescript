let response :any ="43";

// let numericLength:number= response.length;

//Forceful type assertion
let numericLength:number= (response as string).length;

type Book={
    name:string;
}

let bookString=`{"name":"Who moved my cheese"}`;
let bookObject=JSON.parse(bookString) as Book;

console.log(bookObject);

const inputElement=document.getElementById("username") as HTMLInputElement;


try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("Error : ",error);
}

const data:unknown="chai aur code";
const strData:string=data as string;

type Role = 'admin' | 'user' | 'superadmin';

function redirectToWhat(role : Role): void{
    if(role==='admin'){
        console.log('Redirecting to admin dashboard');
        return;
    }
    if(role==='user'){
        console.log('Redirecting to User dashboard');
        return;
    }
    role; //data type never
}

function neverReturn():never{
    while(true){}
}