import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { ingredients} from './ingredients.model';
import { NgForm } from '@angular/forms';
import { pizzaService } from '../Services/pizza.service';



@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent {
  public recentTop = ''; //recently selected topping 
  public order = []; // final order summary
  public CustomizedPizza = []; // all selected toppings for individual pizza
  public pizzaSize = ''; //selected size
  public pizzaCrust = ''; //selected crust
  public pizzaSau = ''; //selected sauce shouldn't be more than one type
  public ToppingAdded: boolean = false; //check if topping is already added
  public wholePizza = [];
  public OrderList = [];
  msg: string;

  @ViewChild('f') CustomPizza: NgForm;
  ing: ingredients[] = [
    new ingredients(
      ['Small - 4 slices', 'Medium - 6 slices', 'Large - 8 slices', 'X-Large - 10 slices'],
      ['Thin Crust', 'Stuffed Crust', 'Regular Crust', 'Gluten-Free', 'Cauliflower Crust'],
      ['Margerita', 'Spicy Margerita', 'Alfredo Sauce', 'House Special'],
      ['Mozarella', 'Chedder', 'Asiago', 'Parmesian', 'Goat Cheese', 'Cheese Blend'],
      ['Tomato', 'Spinach', 'Bell Peppers', 'Banana Peppers', 'Olives', 'Pineapple','Chicken', 'Steak', 'Tuna', 'Pepperoni', 'Salami']
    )
  ] ;


//sending data to order-list component

  pizzaS : string; 
  pizzaC : string; 
  pizzaSauce : string;
  pizzaTopp : string [];
 
  constructor( private AddPizzaService:pizzaService ){

  }
  ngOnInit(){
    this.AddPizzaService.theSize.subscribe(pizzaS => this.pizzaS = pizzaS);
    this.AddPizzaService.theCrust.subscribe(pizzaC => this.pizzaC = pizzaC);
    this.AddPizzaService.theSauce.subscribe(pizzaSauce => this.pizzaSauce = pizzaSauce);
    this.AddPizzaService.theToppings.subscribe(pizzaTopp => this.pizzaTopp = pizzaTopp); 

  }


  selectedSize(s){
    this.pizzaSize = s;
    
  } //selected size for indiviual pizza
  selectedCrust(c){
    this.pizzaCrust = c;
  } //selected crust for indiviual pizza
  selectedSau(sau){
    this.pizzaSau = sau;
  } //selected sauce for indiviual pizza
  selectedTop(pizzaTop){  //selected toppings for indiviual pizza
    this.recentTop = pizzaTop;
    if(!this.CustomizedPizza.includes(this.recentTop)){ //check if topping is already been added 
      this.CustomizedPizza.push(pizzaTop); //add topping if not
      this.ToppingAdded = false;
    }else{
      this.ToppingAdded = true; //topping already added - used for validation
    } 
     //customize pizza by adding toppings
  }

  //delete selected topping from CustomizedPizza
  deleteTop(pizzaTop){ 
    this.CustomizedPizza.splice(this.CustomizedPizza.indexOf(pizzaTop), 1); //edit selected pizza
  }
//create a pizza order and add it to cart


  AddOrder(pizzaSize,pizzaCrust,pizzaSau,CustomizedPizza){
    this.AddPizzaService.addOrder(this.pizzaSize, this.pizzaCrust, this.pizzaSau, this.CustomizedPizza);
    this.msg = "Your pizza was added to cart";
        alert(this.msg);
  }
}
