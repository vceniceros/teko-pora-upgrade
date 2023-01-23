import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsButtonsComponent } from './donations-buttons.component';

describe('DonationsButtonsComponent', () => {
  let component: DonationsButtonsComponent;
  let fixture: ComponentFixture<DonationsButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationsButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationsButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
