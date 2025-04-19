import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'cart-field',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './cart-field.component.html',
  styleUrl: './cart-field.component.css'
})
export class CartFieldComponent {

  constructor(private router: Router) {}

  openCart() {
    this.router.navigate(['/cart']).then(navigated => {
      if (navigated) {
        console.log('Navigation to cart succeeded');
      } else {
        console.log('Navigation to cart failed');
      }
    }).catch(error => {
      console.error('Navigation error:', error);
    });
  }
}
