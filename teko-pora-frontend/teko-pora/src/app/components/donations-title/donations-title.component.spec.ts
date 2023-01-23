import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsTitleComponent } from './donations-title.component';

describe('DonationsTitleComponent', () => {
  let component: DonationsTitleComponent;
  let fixture: ComponentFixture<DonationsTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationsTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
