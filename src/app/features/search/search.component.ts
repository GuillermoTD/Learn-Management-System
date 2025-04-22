import { Component, Input } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { SidebarFilterAccordionComponent } from '../../shared/components/sidebar-filter-accordion/sidebar-filter-accordion.component';
import { FilteredCourseItemComponent } from '../../shared/components/filtered-course-item/filtered-course-item.component';
import { CoursesDTO } from '../../dto/CoursesDTO';
import { SearchCourseService } from './services/SearchCourse.service';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    AccordionModule,
    SidebarFilterAccordionComponent,
    FilteredCourseItemComponent,
    FormsModule,
    ButtonModule,
    Toast,
    ToastModule
  ],
  providers: [MessageService],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  public Courses: CoursesDTO[] = [];
  public CoursesSearched: CoursesDTO[] = [];
  inputText: string = '';
  @Input() ShowNumberOfResults: boolean = false;

  constructor(
    private CourseService: SearchCourseService,
    private messageService: MessageService
  ) {}

  GetAllCourses(): void {
    this.CourseService.GetCoursesDefault().subscribe(
      (CoursesSearched: CoursesDTO[]) => {
        this.Courses = CoursesSearched;
      }
    );
  }

  ngOnInit() {
    console.log(this.inputText);
    this.GetAllCourses();
    this.showToast(
      'info',
      'Componente Cargado',
      'El componente se inicializó correctamente.'
    );
  }

  GetCoursesBySearch(title: string): void {
    if (title == '') {
      this.GetAllCourses();
      this.ShowNumberOfResults = false;
      return;
    }

    console.log('hola');

    this.CourseService.SearchCourses(title).subscribe(
      (CoursesSearched: CoursesDTO[]) => {
        console.log('Resultado de la búsqueda:', CoursesSearched);  // Ver el resultado de la búsqueda
        this.Courses = CoursesSearched;
        this.ShowNumberOfResults = true;
  
        if (this.Courses.length === 0 || this.Courses == null) {
          console.log('No se encontraron cursos');
          this.showErrorToast('No se encontró el curso');
        }
      },
      (error) => {
        console.error('Error en la búsqueda:', error);
        this.showErrorToast('Hubo un error en la búsqueda');
      }
    );
  }

  onInputChange(event: Event) {
    this.inputText = (event.target as HTMLInputElement).value;
    console.log('Nuevo valor:', this.inputText);
  }

  showErrorToast(message?:string) {
    console.log("se supone que esto funciona")
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message,
      life: 3000,
    });
  }

  showToast(
    severity: 'success' | 'info' | 'warn' | 'error',
    summary: string,
    detail: string
  ): void {
    console.log("hola")
    this.messageService.add({ severity, summary, detail, life: 3000 });
  }
}
