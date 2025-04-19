import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../Models/Product";
import {ProductListComponent} from "../product-list/product-list.component";
import {NgForOf, NgIf} from "@angular/common";
import {SetBackground} from "../../CustomDirectives/SetBackground.directive";
import {CartService} from "../../service-files/cart.service";

@Component({
  selector: 'product-detail',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    SetBackground
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{

  @Input() productListComp: ProductListComponent = undefined;
  @Output() closeDetail = new EventEmitter<void>();

  constructor(private cartService: CartService) {
  }

  product: Product;

  ngOnInit(){
    this.product = this.productListComp.selectedProduct;
  }

  closeDetails(){
    this.closeDetail.emit();
  }

  addToCart(product: any){
    this.cartService.addToCart(product);
  }
}
