import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { AppComponent } from './app.component';
import { navComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { ContactComponent } from './contact/contact.component';
import { OrderListComponent } from './order-list/order-list.component';
import {Routes, RouterModule} from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AngularFontAwesomeComponent } from 'angular-font-awesome/dist/src/component/angular-font-awesome.component';
import {pizzaService } from './Services/pizza.service';
import { AgmCoreModule } from '@agm/core';

const navRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'order', component: IngredientsComponent }, 
  { path: 'contact', component: ContactComponent},
  { path: 'cart', component: OrderListComponent}

];  

@NgModule({
  declarations: [
    AppComponent,
    navComponent,
    IngredientsComponent,
    ContactComponent,
    OrderListComponent,
    HomeComponent,

 
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(navRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAz5-HXlkMaaieyPlOoDV_Nr3r0QKSBbhE'
    })
  ],
  providers: [ pizzaService ],

  bootstrap: [AppComponent]
})
export class AppModule { }
