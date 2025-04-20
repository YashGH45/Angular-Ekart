import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'top-menu',
  standalone: true,
  imports: [],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css'
})
export class TopMenuComponent {

  constructor(private router: Router) {
  }

  navigateToLogin(){
    this.router.navigate(['']).then().catch(error => {
      console.error('Navigation error:', error);
    });
  }

}
