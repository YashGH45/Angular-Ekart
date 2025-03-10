import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import { ContainerComponent} from "./container/container.component";
import { CartPageComponent } from './cart/cart-page/cart-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/container', pathMatch: 'full' },
  { path: 'cart', component: CartPageComponent },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
