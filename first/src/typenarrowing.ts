function getChai(kind:string |number ){
    if(typeof kind==='string')
        return `Making chai ${kind} type`
    if(typeof kind==='number')
        return `Chai id is ${kind} is for processing`
}

function serveChai(msg ? : string){
    if(msg)
        return `Serving ${msg}`;

    return `Serving Masala chai`;
}

function orderChai(size: "small" | "medium" | "large" | number ){
    if(size==='small')
        return `small cutting chai`

    if(size==="medium" || size==="large")
        return `Make extra chai`

    return `chai order size ${size}`;
}


class KulhadChai{
    serve(){
        return `Serving Kulhad chai`
    }
};

class CuttingChai{
    serve(){
        return `Serving cutting chai`
    }
};

function servingChai(chai: KulhadChai | CuttingChai){
    if(chai instanceof KulhadChai){
        return chai.serve();
    }
    return chai.serve();
}



type ChaiOrder={
    type:string
    sugar:number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return(
        typeof obj==="object" &&
        obj!==null &&
        typeof obj.type==="string" &&
        typeof obj.sugar==="number"
    )       
}

function serveOrder(item:ChaiOrder | string){
    if(isChaiOrder(item)){
        return `Serving ${item.type} tea with ${item.sugar} sugar`
    }
    return `Serving custom chai ${item}`
}

type Masalatype = { type:"masala"; spiceLevel:number };
type Elaichitype = { type:"elaichi"; aroma:number };
type Gingertype = { type:"ginger"; amount:number };

type Chai = Masalatype | Gingertype | Elaichitype;

function makeChai(order:Chai){
    switch(order.type){
        case "masala":
            return `Serving Masala Chai with SpiceLevel ${order.spiceLevel}`
        case "ginger":
            return `Serving ${order.amount} of Ginger chai`
        case "elaichi":
            return `Serving Elachi chai with aroma ${order.aroma}`
        default:
            return `Waiting for the order`
    }
}

function brew(order:Masalatype | Gingertype ){
    if("spicelevel" in order){
        return `Serving ${order.type}`
    }
    return `Serving ${order.type}`
}

// function isStringArray(arr:unknown):arr is string{

// }