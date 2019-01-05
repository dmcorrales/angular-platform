import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubjectsComponent } from './list-subjects.component';

describe('ListSubjectsComponent', () => {
  let component: ListSubjectsComponent;
  let fixture: ComponentFixture<ListSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
