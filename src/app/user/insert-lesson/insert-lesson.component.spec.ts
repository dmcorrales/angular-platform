import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertLessonComponent } from './insert-lesson.component';

describe('InsertLessonComponent', () => {
  let component: InsertLessonComponent;
  let fixture: ComponentFixture<InsertLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
