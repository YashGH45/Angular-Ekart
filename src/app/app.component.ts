import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {TopHeaderComponent} from "./top-header/top-header.component";
// import {ContainerComponent} from "./container/container.component";
import {SearchComponent} from "./container/search/search.component";
import {ContainerComponent} from "./container/container.component";
import {CartPageComponent} from "./cart/cart-page/cart-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TopHeaderComponent, ContainerComponent, SearchComponent, CartPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'E-Kart';
}
