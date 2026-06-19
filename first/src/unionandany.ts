/**
 * Union 
 * contains two or more data types in a single 
*/
let subs: number | string | boolean = 10 ;

subs='1M';
subs=false;

let apiRequest: 'pending' | 'success' | 'error' = 'pending';

// apiRequest='done';
apiRequest='success';


const orders=['12','22','28'];
// here data type is comming any 
let currentOrder: string | undefined ; //now fixed

for(let order of orders){
    if(order==='28'){
        currentOrder=order;
        break;
    }
}

//here data type is string or undefined
console.log(currentOrder);
