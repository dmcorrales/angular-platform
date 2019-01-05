import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestLessonComponent } from './request-lesson.component';

describe('RequestLessonComponent', () => {
  let component: RequestLessonComponent;
  let fixture: ComponentFixture<RequestLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
