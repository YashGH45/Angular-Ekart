import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import { CommonModule } from '@angular/common';

import {AppComponent} from "./app.component";

import {HeaderComponent} from "./header/header.component";

import {FormsModule} from "@angular/forms";

import {SetBackground} from "./CustomDirectives/SetBackground.directive";
import { AppRoutingModule } from './app-routing.module';
import {CartPageComponent} from "./cart/cart-page/cart-page.component";
import {CartFieldComponent} from "./header/cart-field/cart-field.component";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppComponent,
    HeaderComponent,
    FormsModule,
    AppRoutingModule,
    CartPageComponent,
    CartFieldComponent,
    BrowserModule,
    AppRoutingModule
  ],
})
export class AppModule { }
