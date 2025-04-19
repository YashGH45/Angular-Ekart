import { Routes } from '@angular/router';
import {CartPageComponent} from "./cart/cart-page/cart-page.component";
import {ContainerComponent} from "./container/container.component";

export const routes: Routes = [
  { path: '', component: ContainerComponent},
  { path: 'cart', component: CartPageComponent }
];
