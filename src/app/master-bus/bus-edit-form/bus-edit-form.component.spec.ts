import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusEditFormComponent } from './bus-edit-form.component';

describe('BusEditFormComponent', () => {
  let component: BusEditFormComponent;
  let fixture: ComponentFixture<BusEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
