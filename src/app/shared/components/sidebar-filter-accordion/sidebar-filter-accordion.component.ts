import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms'; // ¡Este es importante!
import { RadioButtonModule } from 'primeng/radiobutton';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-filter-accordion',
  imports: [
    AccordionModule,
    RatingModule,
    FormsModule,
    RadioButtonModule,
    CommonModule,
  ],
  templateUrl: './sidebar-filter-accordion.component.html',
  styleUrl: './sidebar-filter-accordion.component.css',
})
export class SidebarFilterAccordionComponent {

  selectedValue: number = 0;
  ratings = [
    { name: 'rate1', value: 4.5, label: '4,5 o más' },
    { name: 'rate2', value: 4.0, label: '4,0 o más' },
    { name: 'rate3', value: 3.5, label: '3,5 o más' },
    { name: 'rate4', value: 3.0, label: '3,0 o más' },
  ];

  languages: { es: string; en: string }[] = [
    { es: 'Inglés', en: 'English' },
    { es: 'Español', en: 'Spanish' },
    { es: 'Francés', en: 'French' },
    { es: 'Alemán', en: 'German' },
    { es: 'Italiano', en: 'Italian' },
    { es: 'Portugués', en: 'Portuguese' },
    { es: 'Chino', en: 'Chinese' },
    { es: 'Japonés', en: 'Japanese' },
    { es: 'Ruso', en: 'Russian' },
    { es: 'Árabe', en: 'Arabic' },
  ];

  selectedDurations: { [key: string]: boolean } = {};

  durations: { label: string; value: string }[] = [
    { label: '0 - 1 hora', value: '0-1' },
    { label: '1 - 3 horas', value: '1-3' },
    { label: '3 - 6 horas', value: '3-6' },
    { label: '6 - 17 horas', value: '6-17' },
    { label: '17+ horas', value: '17+' },
  ];

  selectedTopics: { [key: string]: boolean } = {};

  topics: { label: string; value: string }[] = [
    { label: 'Desarrollo Web', value: 'web-development' },
    { label: 'Data Science', value: 'data-science' },
    { label: 'Diseño Gráfico', value: 'graphic-design' },
    { label: 'Marketing Digital', value: 'digital-marketing' },
    { label: 'Fotografía', value: 'photography' },
  ];

  selectedLevels: { [key: string]: boolean } = {};

  levels: { label: string; value: string }[] = [
    { label: 'Principiante', value: 'beginner' },
    { label: 'Intermedio', value: 'intermediate' },
    { label: 'Avanzado', value: 'advanced' },
  ];

  selectedPrices: { [key: string]: boolean } = {};

  prices: { label: string; value: string }[] = [
    { label: 'Gratis', value: 'free' },
    { label: 'De 0 a 10 USD', value: '0-10' },
    { label: 'De 10 a 50 USD', value: '10-50' },
    { label: 'De 50 a 100 USD', value: '50-100' },
    { label: 'Más de 100 USD', value: '100+' },
  ];
}
