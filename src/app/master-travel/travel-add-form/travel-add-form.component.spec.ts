import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelAddFormComponent } from './travel-add-form.component';

describe('TravelAddFormComponent', () => {
  let component: TravelAddFormComponent;
  let fixture: ComponentFixture<TravelAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
