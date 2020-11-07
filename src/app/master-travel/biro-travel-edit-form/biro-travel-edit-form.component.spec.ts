import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiroTravelEditFormComponent } from './biro-travel-edit-form.component';

describe('BiroTravelEditFormComponent', () => {
  let component: BiroTravelEditFormComponent;
  let fixture: ComponentFixture<BiroTravelEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiroTravelEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiroTravelEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
