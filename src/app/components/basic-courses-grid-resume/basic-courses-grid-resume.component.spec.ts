import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicCoursesGridResumeComponent } from './basic-courses-grid-resume.component';

describe('BasicCoursesGridResumeComponent', () => {
  let component: BasicCoursesGridResumeComponent;
  let fixture: ComponentFixture<BasicCoursesGridResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicCoursesGridResumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicCoursesGridResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
