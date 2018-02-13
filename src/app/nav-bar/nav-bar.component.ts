import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav-bar.component.html'
})
export class navComponent{
    show:boolean = false;
    toggleCollapse(){
      this.show = !this.show
    }
    @Output() selectedTab = new EventEmitter<string>();

    onSelect(tab: string){
      this.selectedTab.emit(tab);
    }
  constructor() { }

  ngOnInit() {
  }
}