import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransaksiTravelEditFormComponent } from './transaksi-travel-edit-form.component';

describe('TransaksiTravelEditFormComponent', () => {
  let component: TransaksiTravelEditFormComponent;
  let fixture: ComponentFixture<TransaksiTravelEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransaksiTravelEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransaksiTravelEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
