import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredCourseItemComponent } from './filtered-course-item.component';

describe('FilteredCourseItemComponent', () => {
  let component: FilteredCourseItemComponent;
  let fixture: ComponentFixture<FilteredCourseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilteredCourseItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilteredCourseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
