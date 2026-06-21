//Array
const chaiFlavours:string[]=["Masala","Ginger","Adarak"];
const chaiPrice:number[]=[15,25,20];

const rating:Array<number>=[4.5,2.3,5];

const cities:readonly string[]=["Delhi","mumbai","Pune"];
// cities.push("Bengaluru");

const table:number[][]=[
    [1,2,3],
    [4,5,6]
];


//Tuple
let chaiTuple:[string,number];
chaiTuple=["Masala",20];
chaiTuple=["Adarak",25];

let userinfo:[string,number,boolean?];

const location: readonly [number,number]=[28.66,38.22];

const chaiItems:[name:string,price:number]=["Masala",25];


//Enums
enum CupSizes{
    SMALL,
    MEDIUM,
    LARGE
}
const cupSize=CupSizes.LARGE;


enum Status{
    PENDING=100,
    SERVED,
    CANCELLED
}