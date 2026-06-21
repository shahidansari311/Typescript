class ChaiType{
    flavour:string;
    price:number;

    constructor(){
        this.flavour="abc";
        this.price=20;
    }
};

const masalaChai=new ChaiType();
masalaChai.flavour="masala";



class Chai{
    public flavour:string="Adarak Chai";

    private secretIngredients:string="Adarak";

    reveal(){
        return this.secretIngredients;
    }

    protected price:number=30;
}