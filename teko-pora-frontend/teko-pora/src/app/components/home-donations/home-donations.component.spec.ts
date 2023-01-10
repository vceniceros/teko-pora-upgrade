import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDonationsComponent } from './home-donations.component';

describe('HomeDonationsComponent', () => {
  let component: HomeDonationsComponent;
  let fixture: ComponentFixture<HomeDonationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDonationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
