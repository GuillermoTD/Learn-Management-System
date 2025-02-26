import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { SidebarFilterAccordionComponent } from '../../components/sidebar-filter-accordion/sidebar-filter-accordion.component';
import { FilteredCourseItemComponent } from '../../components/filtered-course-item/filtered-course-item.component';


@Component({
  selector: 'app-search',
  imports: [AccordionModule,SidebarFilterAccordionComponent,FilteredCourseItemComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

}
