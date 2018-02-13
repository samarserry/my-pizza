import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
// export class pizzaService{
//     private pizzaOrder = new BehaviorSubject<string[]>([]);
//     theOrder = this.pizzaOrder.asObservable();
//     constructor(){ }

//     addOrder(newPizza){
//         this.pizzaOrder.next(newPizza);
//     }
// }



export class pizzaService{
    private pizza_size = new BehaviorSubject<string>('');
    private pizza_crust = new BehaviorSubject<string>('');
    private pizza_sauce = new BehaviorSubject<string>('');
    private pizza_toppings = new BehaviorSubject<string[]>([]);
    
    theSize = this.pizza_size.asObservable();
    theCrust = this.pizza_crust.asObservable();
    theSauce = this.pizza_sauce.asObservable();
    theToppings = this.pizza_toppings.asObservable();

    addOrder(pizza_size, pizza_crust, pizza_sauce, pizza_toppings){
        this.pizza_size.next(pizza_size);
        this.pizza_crust.next(pizza_crust);
        this.pizza_sauce.next(pizza_sauce);
        this.pizza_toppings.next(pizza_toppings);

    }
}