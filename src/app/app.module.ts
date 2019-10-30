import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ReceipeComponent } from './Receipe/receipe.component';
import { receipelistComponent } from './Receipe/receipe-list/receipe-list.component';
import { receipedetailsComponent } from './Receipe/receipe-details/receipe-details.component';
import { ReceipeitemComponent } from './Receipe/receipe-list/receipe-item/receipe-item.component';
import { Header } from './header/header.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: 
  [ AppComponent, HelloComponent,ShoppingComponent,ReceipeComponent,receipelistComponent,receipedetailsComponent,ReceipeitemComponent,Header ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
