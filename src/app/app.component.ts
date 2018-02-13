import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  loadedTab = "home";


  
  onNavigate(tab: string){
    this.loadedTab = tab;
  }

}
