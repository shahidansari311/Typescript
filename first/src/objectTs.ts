const chai={
    name:"Masala Chai",
    price:20,
    isHot:true
}


let tea:{
    name:string;
    price:number;
    isHot:boolean;
}
tea={
    name:"Ginger Tea",
    price:25,
    isHot:true
}

type Tea={
    name:string;
    price:number;
    ingredients:string[];
}
const adarakChai:Tea={
    name:"Adarak Chai",
    price:20,
    ingredients:["water","milk","sugar","tea leaves","adarak"]
}

type CupSize={
    size:string;
}
let smallCup:CupSize={size:"200ml"};
let bigCup={size:"500ml", material:"steel"};
smallCup=bigCup;

type Brew={
    brewSize:number;
}
const coffee={brewSize:5, type:"Arabica"};
const chaiBrew:Brew= coffee;


//Partial
type Chai={
    name:string;
    price:number;
    isHot:boolean;
    ingredients?:string[];
}
const updateChai=(updates:Partial<Chai>)=>{
    console.log("updating chai with ",updates);
}
updateChai({price:25})  

//Required
type chaiOrder={
    name?:string;
    quantity?:number;
}
const placeOrder=(order : Required<chaiOrder>)=>{
    console.log(order);
}
placeOrder({name:"Masala Chai",quantity:2});

//Pick
type BasicChaiInfo=Pick<Chai ,"name" | "price">;
const chaiInfo:BasicChaiInfo={
    name:"Lemon tea",
    price:30
}

//Omit
type ChaiNew={
    name:string;
    price:number;
    isHot:boolean;
    secretIngredients:string;
}
type PublicChai =Omit<ChaiNew , "secretIngredients">;
 
