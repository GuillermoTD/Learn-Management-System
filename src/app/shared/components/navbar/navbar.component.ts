import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  imports: [RouterLink],
})

export class NavbarComponent {
  isVisiblePopper = false;


  onMouseEnter(): void {
    this.isVisiblePopper =  !this.isVisiblePopper
  }

  onMouseLeave(): void {
    this.isVisiblePopper =  !this.isVisiblePopper;
  }
}
