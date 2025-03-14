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

  changeVisiblePopper(){
    this.isVisiblePopper = !this.isVisiblePopper;
    console.log("funciona");
  }
}
