import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})



export class ContactComponent implements OnInit {
  lat: number = 45.425120;
  lng: number = -75.691719;
  zoom: number =  2;
  answer = '';
  constructor() { }

  ngOnInit() {
  
  }
  onSubmit(form: NgForm){
    console.log(form);
  }
}
