import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { LayoutComponent } from './components/layout/layout.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:true,
  imports:[LayoutComponent]
})
export class AppComponent {
  title = 'Learn-Management-System';
}


