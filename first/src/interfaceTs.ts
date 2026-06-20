type ChaiOrder={
    type:string; 
    sugar:number; 
    strong:boolean;
};

function makeChai(order:ChaiOrder){
    console.log(order);
}

function serveChai(order:ChaiOrder){
    console.log(order);
}


type TeaRecepie={
    water:number;
    milk:number;
}

// class MasalaChai implements TeaRecepie{
//     water=100;
//     milk=50;
// };

interface CupSize{
    size: "small" | "medium" | "large";
}
class chaiSize implements CupSize{
    size: "small" | "medium" | "large"= "large";    
}   

// type Response={ok:true} | {ok:false}
// class myRes implements Response{
//     ok:
// }

type TeaType= "Masala" | "Ginger" | "Lemon";
function orderChai(t:TeaType){
    console.log(t);
}

type BaseChai ={
    teaLeaves:number;
}
type Extra={
    masala:number;
}

type MasalaChai= BaseChai & Extra;
const cup:MasalaChai={
    teaLeaves:2,
    masala:1
};

type User={
    username:string;
    bio?:string;
}

const u1:User={
    username:"Hello"
}

type Config={
    readonly appName:string;
    version: number;
}

const cfg:Config={
    appName:"MasterJi",
    version:1
}
// cfg.appName="ChaiaurCode";