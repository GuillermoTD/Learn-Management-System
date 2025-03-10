import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarFilterAccordionComponent } from './sidebar-filter-accordion.component';

describe('SidebarFilterAccordionComponent', () => {
  let component: SidebarFilterAccordionComponent;
  let fixture: ComponentFixture<SidebarFilterAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarFilterAccordionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarFilterAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
