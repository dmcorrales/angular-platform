import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTutorComponent } from './request-tutor.component';

describe('RequestTutorComponent', () => {
  let component: RequestTutorComponent;
  let fixture: ComponentFixture<RequestTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
