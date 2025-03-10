import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../Models/Product";
import {ProductListComponent} from "../product-list/product-list.component";
import {NgForOf, NgIf} from "@angular/common";
import {SetBackground} from "../../CustomDirectives/SetBackground.directive";

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
export class ProductDetailComponent {

  @Input() productListComp: ProductListComponent = undefined

  product: Product;

  ngOnInit(){
    this.product = this.productListComp.selectedProduct;
  }

  closeDetails(){
    console.log('closed!!');
  }

}
