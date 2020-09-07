import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersRentalComponent } from './users-rental.component';

describe('UsersRentalComponent', () => {
  let component: UsersRentalComponent;
  let fixture: ComponentFixture<UsersRentalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersRentalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
