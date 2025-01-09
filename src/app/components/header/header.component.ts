import { Component } from '@angular/core';
import { ThemeToggleComponent } from "../theme-toggler/theme-toggler.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent {
  

  isMenuOpen: boolean = false; // Variable to track menu state

  // Method to toggle the menu visibility
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Optional: You can track active link to style the active menu item
  activeLink: string = '';

  setActiveLink(link: string) {
    this.activeLink = link;
  }
}