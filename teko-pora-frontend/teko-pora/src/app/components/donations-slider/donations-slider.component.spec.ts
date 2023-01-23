import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsSliderComponent } from './donations-slider.component';

describe('DonationsSliderComponent', () => {
  let component: DonationsSliderComponent;
  let fixture: ComponentFixture<DonationsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationsSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
