import {Component, OnInit} from '@angular/core';
import {CartService} from "../../service-files/cart.service";
import {Product} from "../../Models/Product";
import {NgForOf, NgIf} from "@angular/common";
import {ProductComponent} from "../../container/product-list/product/product.component";

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    ProductComponent
  ],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit{

  items: Product;
  cartItems: Product[] = [];

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.getCartItems();
    console.log(this.cartItems);
  }

  getCartItems(){
    this.cartItems = this.cartService.getItems();
  }
}
