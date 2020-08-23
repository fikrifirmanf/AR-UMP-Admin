import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelEditFormComponent } from './travel-edit-form.component';

describe('TravelEditFormComponent', () => {
  let component: TravelEditFormComponent;
  let fixture: ComponentFixture<TravelEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
