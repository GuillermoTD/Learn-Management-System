import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzBreadCrumbModule,
    RouterOutlet,
    RouterLink,
  ],
  standalone: true,
  styles: [
    `
      nz-content {
        padding: 0 2.7%;
      }

      nz-footer {
        text-align: center;
        height: 3.7rem;
      }

      .inner-content {
        min-height: 100vh;
      }
    `,
  ],

})
export class LayoutComponent {}
