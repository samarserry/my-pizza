export class ingredients {
    public size: string[];
    public crust: string[];
    public sauce: string[];
    public cheese: string[];
    public toppings: string[];

    constructor(size: string[], crust: string[], sauce: string[], cheese: string[], toppings: string[]){
        this.size = size;
        this.crust = crust;
        this.sauce = sauce;
        this.cheese = cheese;
        this.toppings = toppings;

    }
}


// export class Orders {
//     public PizzaType: string[]; 
//     public quantity: number;

//      constructor(PizzaType: string[], quantity: number){
//          this.PizzaType = PizzaType;
//        this.quantity = quantity;
//     }
//  }
