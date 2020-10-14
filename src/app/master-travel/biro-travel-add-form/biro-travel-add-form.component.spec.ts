import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiroTravelAddFormComponent } from './biro-travel-add-form.component';

describe('BiroTravelAddFormComponent', () => {
  let component: BiroTravelAddFormComponent;
  let fixture: ComponentFixture<BiroTravelAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiroTravelAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiroTravelAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
