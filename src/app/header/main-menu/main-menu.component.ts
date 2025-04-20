import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'main-menu',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent {

  constructor(private router: Router) {
  }

  mainMenuList: string[] = ['Home', 'Products', 'Contacts', 'Services', 'About'];

  navigateTo(menuItem: string){
    switch (menuItem) {
      case 'About':
        this.router.navigate(['/about']).then().catch(error => {
          console.error('Navigation error:', error);
        });
        break;

      case 'Home':
        this.router.navigate(['/home']).then().catch(error => {
          console.error('Navigation error:', error);
        });
        break;
    }
  }
}
