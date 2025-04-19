import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Product} from "../Models/Product";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Product[] = [];

  getItems(): Product[] {
    return this.cart;
  }

  addToCart(product: Product){
    this.cart.push(product);
  }

  removeFromCart(product: Product){
    const index = this.cart.indexOf(product);

    if(index > -1) {
      this.cart.splice(index, 1);
    }
  }
}
