import { Routes } from '@angular/router';
import {CartPageComponent} from "./cart/cart-page/cart-page.component";
import {ContainerComponent} from "./container/container.component";
import {AboutPageComponent} from "./about-page/about-page.component";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', component: ContainerComponent},
  { path: 'cart', component: CartPageComponent },
  { path: 'about', component: AboutPageComponent },
];
