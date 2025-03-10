import {Component, ViewChild} from '@angular/core'
import {NgOptimizedImage} from "@angular/common";
import {SearchComponent} from "./search/search.component";
import { CommonModule } from '@angular/common';
import {of} from "rxjs";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {FeaturedBrandsComponent} from "./featured-brands/featured-brands.component";

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    NgOptimizedImage,
    SearchComponent,
    CommonModule,
    ProductListComponent,
    ProductDetailComponent,
    FeaturedBrandsComponent,
  ],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

  searchText: string = '';

  @ViewChild(ProductListComponent) productListComponent : ProductListComponent;


  setSearchText(value: string){
    this.searchText = value;
  }

}
