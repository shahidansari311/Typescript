function makeChai(type:string, cups:number){
    console.log(`Making ${cups} cups of ${type}`);
}
makeChai("Masala chai",2);


function getChaiPrice():number{
    return 25;
}

function makaOrder(order:string):string | null{
    if(!order) return null;
    return order;
}

function logChai():void{
    console.log("Chai is ready");
}

// function orderChai(type?:string){

// }

function orderChai(type?:string){

}

function createChai(order:{
  type:string;
  sugar:number;
  size: "small" | "large"  
}):number{
    return 4;
}