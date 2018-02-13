import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { pizzaService } from '../Services/pizza.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  pizzaS : string; 
  pizzaC : string; 
  pizzaSauce : string;
  pizzaTopp : string[];
  d_method = '';

  constructor( private AddPizzaService:pizzaService ){

  }
  ngOnInit(){
    this.AddPizzaService.theSize.subscribe(pizzaS => this.pizzaS = pizzaS);
    this.AddPizzaService.theCrust.subscribe(pizzaC => this.pizzaC = pizzaC);
    this.AddPizzaService.theSauce.subscribe(pizzaSauce => this.pizzaSauce = pizzaSauce);
    this.AddPizzaService.theToppings.subscribe(pizzaTopp => this.pizzaTopp = pizzaTopp); 

  }

  @ViewChild('ob') registerForm: NgForm;
  deliveryMethod = ['Pickup', 'Delivery'];

  selectedMethod(method){
    this.d_method = method; //to know wheter to ask for address info
  }

}
